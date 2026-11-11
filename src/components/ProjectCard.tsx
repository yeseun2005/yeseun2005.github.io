import { Bot, Code, ExternalLink, Users } from 'lucide-react';
import type { Project } from '../data/projects';
import { groupOfTag, tagColor } from '../data/tags';
import StatusBadge from './StatusBadge';

// 숫자 박스 개수에 맞춰 칸을 나눠 빈칸이 생기지 않게 함
const highlightCols: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
};

// 프로젝트 카드
// 숫자 박스 있음: 왼쪽(개요 · 숫자 박스) / 오른쪽(담당 · AI) 2열 — md 미만에서는 위아래로 쌓임
// 숫자 박스 없음: 개요 → 담당 · AI 1열 (빈 공간 방지)
// 맨 아래: 스택 태그 · 링크를 카드 전체 폭의 하단 바로 고정해 모든 카드의 끝을 맞춤
export default function ProjectCard({ project }: { project: Project }) {
  const { highlights } = project;
  const twoColumn = highlights.length > 0;

  return (
    <article
      className={`grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md ${
        twoColumn ? 'md:grid-cols-[3fr_2fr]' : ''
      }`}
    >
      <div className="flex flex-col gap-5 p-6">
        <header>
          <div className="flex items-center justify-between gap-2">
            <StatusBadge status={project.status} />
            <span className="text-xs font-medium text-gray-400">{project.period}</span>
          </div>
          <h4 className="mt-3 text-xl font-bold text-gray-900">{project.title}</h4>
          <p className="mt-1 text-sm text-gray-600">{project.summary}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-400">
            <Users size={13} aria-hidden />
            {project.team}
          </p>
        </header>

        {highlights.length > 0 && (
          <div className="space-y-2">
            <dl className={`grid gap-2 ${highlightCols[highlights.length] ?? highlightCols[3]}`}>
              {highlights.map((h) => (
                <div key={h.label} className="rounded-xl bg-accent/5 px-3 py-2.5">
                  <dt className="text-[11px] font-medium text-gray-500">{h.label}</dt>
                  <dd className="mt-0.5 text-sm font-bold text-accent">{h.value}</dd>
                </div>
              ))}
            </dl>
            {project.measureNote && (
              <p className="text-[11px] leading-relaxed text-gray-400">{project.measureNote}</p>
            )}
          </div>
        )}
      </div>

      <div
        className={`flex flex-col gap-4 border-t border-gray-100 bg-gray-50/60 p-6 ${
          twoColumn ? 'md:border-t-0 md:border-l' : ''
        }`}
      >
        <section>
          <h5 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">담당</h5>
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-700 marker:text-accent">
            {project.roles.map((role) =>
              typeof role === 'string' ? (
                <li key={role}>{role}</li>
              ) : (
                <li key={role.topic}>
                  <span className="font-semibold text-gray-900">{role.topic}</span>
                  <span className="mx-1.5 text-gray-300">|</span>
                  {role.detail}
                </li>
              ),
            )}
          </ul>
        </section>

        {project.ai && (
          <p className="mt-auto flex items-start gap-1.5 text-xs text-gray-500">
            <Bot size={14} className="mt-px shrink-0" aria-hidden />
            {project.ai}
          </p>
        )}
      </div>

      <footer
        className={`flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
          twoColumn ? 'md:col-span-2' : ''
        }`}
      >
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <li key={tag} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagColor[groupOfTag[tag]]}`}>
              {tag}
            </li>
          ))}
        </ul>

        {(project.github || project.link) && (
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-4 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-accent hover:text-accent">
                <Code size={13} aria-hidden />
                GitHub
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white transition hover:opacity-90">
                <ExternalLink size={13} aria-hidden />
                {project.linkLabel ?? '서비스 보기'}
              </a>
            )}
          </div>
        )}
      </footer>
    </article>
  );
}
