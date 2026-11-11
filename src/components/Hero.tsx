import type { MouseEvent } from 'react';
import { profile } from '../data/profile';
import { skillGroups } from '../data/skills';

const featured = ['React 19', 'TypeScript 6.0', 'Tailwind CSS v4', 'Vite 8', 'Python', 'Raspberry Pi'];
const allSkills = skillGroups.flatMap((g) => g.skills);
const featuredSkills = featured
  .map((name) => allSkills.find((s) => s.name === name))
  .filter((s) => s?.icon);

const fadeUp = 'animate-fade-up motion-reduce:animate-none';

// 스크롤 시간(ms): 거리가 멀어도 MAX 안에 도착. 숫자가 작을수록 빠름
const SCROLL_SPEED = 4000; // 1초에 내려가는 거리(px)
const MIN_DURATION = 300;
const MAX_DURATION = 800;
const NAVBAR_HEIGHT = 80;

function smoothScrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  const distance = Math.abs(end - start);
  const duration = Math.min(Math.max((distance / SCROLL_SPEED) * 1000, MIN_DURATION), MAX_DURATION);
  const startTime = performance.now();

  const step = (now: number) => {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 2);
    window.scrollTo({ top: start + (end - start) * eased, behavior: 'instant' });
    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

const handleScroll = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  smoothScrollTo(id);
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 pt-32 pb-24 md:pt-30">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className={`${fadeUp} inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-accent shadow-sm`}>
          HELLO! <span className="text-gray-300">|</span> I'm Yeeun Lee
        </p>

        <h1 className={`${fadeUp} mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl`} style={{ animationDelay: '100ms' }}>
          안녕하세요,
          <br />
          <span className="relative inline-block text-accent">
            {profile.name}
            <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded bg-accent/15 md:h-4" />
          </span>
          입니다.
        </h1>

        <p className={`${fadeUp} mt-6 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-gray-600`} style={{ animationDelay: '200ms' }}>
          {profile.interest}
        </p>

        <ul className={`${fadeUp} mt-8 flex flex-wrap gap-3`} style={{ animationDelay: '300ms' }}>
          {featuredSkills.map((s) => (
            <li key={s!.name} title={s!.name} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              <img src={s!.icon} alt={s!.name} width={28} height={28} className="h-7 w-7 object-contain" />
            </li>
          ))}
        </ul>

        <div className={`${fadeUp} mt-10 flex flex-wrap gap-3`} style={{ animationDelay: '400ms' }}>
          <a
            href="#projects"
            onClick={handleScroll('projects')}
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:opacity-90"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            onClick={handleScroll('contact')}
            className="rounded-full border-2 border-accent bg-white px-7 py-3 text-sm font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-white"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}