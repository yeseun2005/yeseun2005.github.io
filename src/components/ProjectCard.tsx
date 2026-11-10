import type { Project } from '../data/projects';

const statusStyle: Record<Project['status'], string> = {
  '🏆 수상': 'bg-yellow-100 text-yellow-800',
  '🚀 배포·운영': 'bg-blue-100 text-blue-800',
  '🔄 진행 중': 'bg-purple-100 text-purple-800',
  '✅ 완료': 'bg-gray-100 text-gray-700',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[project.status]}`}>
            {project.status}
          </span>
          <span className="text-xs text-gray-500">{project.period}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.summary}</p>
        <p className="text-xs text-gray-500">👥 {project.team}</p>
      </header>

      <section>
        <h4 className="mb-1 text-sm font-semibold text-gray-800">담당 · 기여</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
          {project.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="mb-1 text-sm font-semibold text-gray-800">주요 성과</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
          {project.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.link) && (
        <footer className="mt-auto flex gap-4 text-sm font-medium">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-900 underline">
              GitHub
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              서비스 보기
            </a>
          )}
        </footer>
      )}
    </article>
  );
}