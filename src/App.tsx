import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import { activities, awards } from './data/activities';

const resumeNav = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#activities', label: 'Activities' },
];

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 md:grid-cols-[180px_1fr]">
          <aside className="hidden md:block">
            <ul className="sticky top-28 space-y-1">
              {resumeNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block border-l-2 border-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 transition hover:border-accent hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0">
            <Skills />
            <Projects />
            <Timeline id="awards" bigText="Awards" title="수상 · 대회" items={awards} />
            <Timeline id="activities" bigText="Activity" title="활동" items={activities} />
          </div>
        </div>

        <Contact />
      </main>
    </>
  );
}