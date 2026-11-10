import { useEffect, useState } from 'react';

const CACHE_KEY = 'gh-pushed-at';

// "https://github.com/owner/repo" → "owner/repo"
function parseRepo(url?: string) {
  if (!url) return null;
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/#?]+)/);
  return match ? `${match[1]}/${match[2].replace(/\.git$/, '')}` : null;
}

function readCache(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function writeCache(cache: Record<string, string>) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // 저장에 실패해도 표시에는 문제 없으므로 무시
  }
}

export function useLastPushed(githubUrl?: string, enabled = true) {
  const repo = parseRepo(githubUrl);
  const [pushedAt, setPushedAt] = useState<string | null>(() => (repo ? readCache()[repo] ?? null : null));

  useEffect(() => {
    if (!enabled || !repo || pushedAt) return;

    const controller = new AbortController();

    fetch(`https://api.github.com/repos/${repo}`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { pushed_at?: string } | null) => {
        if (!data?.pushed_at) return;
        setPushedAt(data.pushed_at);
        writeCache({ ...readCache(), [repo]: data.pushed_at });
      })
      .catch(() => {
        // 네트워크 오류 · 호출 제한 · 비공개 레포는 표시하지 않음
      });

    return () => controller.abort();
  }, [enabled, repo, pushedAt]);

  return enabled ? pushedAt : null;
}