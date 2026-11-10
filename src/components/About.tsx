import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { awards } from '../data/activities';
import SectionHeading from './SectionHeading';

export default function About() {
  const counters = [
    { value: projects.length, label: '프로젝트' },
    { value: projects.filter((p) => p.status === '배포·운영').length, label: '실배포 서비스' },
    { value: awards.filter((a) => a.badge?.kind === '수상').length, label: '수상' },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading bigText="About" title="About Me" />

      <div className="grid gap-12 md:grid-cols-2">
        <p className="leading-loose text-gray-600">
          {profile.intro.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </p>

        <ul className="space-y-3">
          {profile.info.map((item) => (
            <li key={item.label} className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-semibold text-gray-900">{item.label}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-accent">
                  {item.value}
                </a>
              ) : (
                <span className="text-gray-600">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-100 pt-12">
        {counters.map((c) => (
          <div key={c.label} className="text-center">
            <p className="text-4xl font-extrabold text-accent md:text-5xl">{c.value}</p>
            <p className="mt-2 text-sm font-medium text-gray-500">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}