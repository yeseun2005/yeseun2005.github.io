import ProjectCard from './components/ProjectCard';
import { projects, type Category } from './data/projects';

const categories: Category[] = ['Frontend', 'AI · Edge AI', '기타'];

export default function App() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-14">
        <h1 className="text-3xl font-bold text-gray-900">이예은</h1>
        <p className="mt-1 text-lg text-gray-600">Frontend · AI Engineer</p>
        <p className="mt-4 text-gray-700">
          React · TypeScript로 웹 서비스를 만들고 배포해 왔고, 데이터 수집 → 모델 평가 · 개선으로 AI 개발 영역을 넓혀가고 있습니다.
        </p>
        <div className="mt-4 flex gap-4 text-sm font-medium">
          <a href="https://github.com/yeseun2005" className="underline">GitHub</a>
          <a href="https://www.linkedin.com/in/yeeun-lee-dev" className="underline">LinkedIn</a>
        </div>
      </header>

      {categories.map((category) => {
        const list = projects.filter((p) => p.category === category);
        if (list.length === 0) return null;
        return (
          <section key={category} className="mb-14">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">{category}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {list.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}