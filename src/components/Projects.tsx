import { useState } from 'react';
import { projects, type Category } from '../data/projects';
import type { Tag } from '../data/tags';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import TagFilter from './TagFilter';

const categories: Category[] = ['Frontend', 'AI · Edge AI', '기타'];

export default function Projects() {
  const [selected, setSelected] = useState<Tag | null>(null);

  const filtered = selected ? projects.filter((p) => p.stack.includes(selected)) : projects;

  const handleCardTagClick = (tag: Tag) => {
    setSelected((prev) => (prev === tag ? null : tag));
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="mb-24">
      <SectionHeading bigText="Projects" title="Projects" description="태그를 누르면 그 기술을 쓴 프로젝트만 볼 수 있어요." />

      <TagFilter selected={selected} onSelect={setSelected} />

      <p className="mb-8 text-sm text-gray-500">
        {selected ? (
          <>
            <span className="font-semibold text-accent">{selected}</span>을(를) 사용한 프로젝트{' '}
            <span className="font-semibold text-gray-900">{filtered.length}개</span>
          </>
        ) : (
          <>
            전체 프로젝트 <span className="font-semibold text-gray-900">{projects.length}개</span>
          </>
        )}
      </p>

      {categories.map((category) => {
        const list = filtered.filter((p) => p.category === category);
        if (list.length === 0) return null;
        return (
          <div key={category} className="mb-14">
            <div className="mb-5 flex items-baseline gap-3 border-b-2 border-accent pb-2">
              <h3 className="text-xl font-bold text-gray-900">{category}</h3>
              <span className="text-sm font-semibold text-accent">{list.length}</span>
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              {list.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  selectedTag={selected}
                  onTagClick={handleCardTagClick}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}