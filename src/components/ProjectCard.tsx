import { Bot, CircleCheck, Clock, Code, ExternalLink, Rocket, Trophy, Users, type LucideIcon } from 'lucide-react';
import type { Project } from '../data/projects';
import { groupOfTag, tagColor, type Tag } from '../data/tags';

const statusConfig: Record<Project['status'], { icon: LucideIcon; className: string }> = {
  수상: { icon: Trophy, className: 'bg-yellow-100 text-yellow-800' },
  '배포·운영': { icon: Rocket, className: 'bg-blue-50 text-accent' },
  '진행 중': { icon: Clock, className: 'bg-purple-100 text-purple-700' },
  완료: { icon: CircleCheck, className: 'bg-gray-100 text-gray-600' },
};

interface Props {
  project: Project;
  selectedTag: Tag | null;
  onTagClick: (tag: Tag) => void;
}

export default function ProjectCard({ project, selectedTag, onTagClick }: Props) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${status.className}`}>
          <StatusIcon size={12} strokeWidth={2.5} aria-hidden />
          {project.status}
        </span>
        <span className="text-xs font-medium text-gray-400">{project.period}</span>
      </div>

      <header>
        <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
        <p className="mt-1 text-sm text-gray-600">{project.summary}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-400">
          <Users size={13} aria-hidden />
          {project.team}
        </p>
      </header>

      {project.highlights.length > 0 && (
        <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {project.highlights.map((h) => (
            <div key={h.label} className="rounded-xl bg-accent/5 px-3 py-2.5">
              <dt className="text-[11px] font-medium text-gray-500">{h.label}</dt>
              <dd className="mt-0.5 text-sm font-bold text-accent">{h.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <section>
        <h5 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">담당</h5>
        <ul className="space-y-1 text-sm text-gray-700">
          {project.roles.map((role) => (
            <li key={role} className="flex gap-2">
              <span className="text-accent">•</span>
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </section>

            {project.tech && project.tech.length > 0 && (
        <section>
          <h5 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">기술 포인트</h5>
          <ul className="space-y-1.5 border-l-2 border-accent/30 pl-3 text-sm text-gray-700">
            {project.tech.map((t) => (
              <li key={t.topic}>
                <span className="font-semibold text-gray-900">{t.topic}</span>
                <span className="text-gray-400"> · </span>
                {t.detail}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-auto space-y-3">
        {project.ai && (
          <p className="flex items-start gap-1.5 text-xs text-gray-500">
            <Bot size={14} className="mt-px shrink-0" aria-hidden />
            {project.ai}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => {
            const group = groupOfTag[tag];
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick(tag)}
                aria-pressed={active}
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition ${
                  active ? tagColor[group].active : tagColor[group].base
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {(project.github || project.link) && (
          <div className="flex gap-2">
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
      </div>
    </article>
  );
}