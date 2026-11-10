import { Bot, CircleCheck, Clock, Code, ExternalLink, History, Rocket, Trophy, Users, type LucideIcon } from 'lucide-react';
import { useLastPushed } from '../hooks/useLastPushed';
import { fromNow } from '../lib/relativeTime';
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
  const pushedAt = useLastPushed(project.github, project.status === '진행 중');

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
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="inline-flex items-center gap-1.5 text-gray-400">
            <Users size={13} aria-hidden />
            {project.team}
          </span>
          {pushedAt && (
            <span
              className="inline-flex items-center gap-1.5 font-medium text-emerald-600"
              title={new Date(pushedAt).toLocaleString('ko-KR')}
            >
              <History size={13} aria-hidden />
              최근 업데이트 {fromNow(pushedAt)}
            </span>
          )}
        </div>
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
      
      {project.measureNote && (
        <p className="-mt-3 text-[11px] leading-relaxed text-gray-400">{project.measureNote}</p>
      )}

      <section>
        <h5 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">담당</h5>
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