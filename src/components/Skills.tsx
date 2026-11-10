import { useState } from 'react';
import { skillGroups, type Skill } from '../data/skills';
import SectionHeading from './SectionHeading';

function SkillIcon({ name, icon }: Skill) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <img
      src={icon}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-5 w-5 shrink-0 object-contain"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mb-24">
      <SectionHeading bigText="Skills" title="기술 스택" />

      <div className="divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-3 p-5 md:flex-row md:items-start md:gap-6">
            <h3 className="w-32 shrink-0 pt-1.5 text-sm font-bold text-gray-900">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 py-1.5 pr-3.5 pl-2 text-sm font-medium text-gray-700"
                >
                  <SkillIcon {...skill} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}