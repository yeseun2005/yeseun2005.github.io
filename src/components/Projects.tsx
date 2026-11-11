import { projects, type Category } from '../data/projects';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const categories: Category[] = ['Frontend', 'AI · Edge AI', '기타'];

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <SectionHeading bigText="Projects" title="Projects" />

      {categories.map((category) => {
        const list = projects.filter((p) => p.category === category);
        if (list.length === 0) return null;

        return (
          <div key={category} className="mb-14">
            {/* 상단 메뉴바(h-16) 바로 아래에 고정
                -mx-2 px-2: 배경을 카드 그림자 폭만큼 넓혀 카드 테두리가 양옆으로 비치지 않게 함
                after: 밑줄 아래 흰색 그라데이션으로 카드가 자연스럽게 가려지게 함 */}
            <div className="sticky top-16 z-10 -mx-2 mb-5 bg-white px-2 pt-4 after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-6 after:bg-linear-to-b after:from-white after:to-transparent">
              <div className="flex items-baseline gap-3 border-b-2 border-accent pb-2">
                <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                <span className="text-sm font-semibold text-accent">{list.length}</span>
              </div>
            </div>

            <div className="space-y-6">
              {list.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
