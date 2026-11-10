import { useState } from 'react';
import { skillGroups, type Skill } from '../data/skills';
import SectionHeading from './SectionHeading';

function SkillIcon({ name, icon }: Skill) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return (
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      src={icon}
      alt=""
      width={40}
      height={40}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-10 w-10 shrink-0 object-contain"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mb-24">
      <SectionHeading bigText="Skills" title="기술 스택" />

      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-xl font-bold text-gray-800">{group.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-gray-50/60 px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <SkillIcon {...skill} />
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}