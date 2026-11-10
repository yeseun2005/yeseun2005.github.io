import { CircleCheck, Clock, Trophy, type LucideIcon } from 'lucide-react';
import type { BadgeKind, TimelineItem } from '../data/activities';
import SectionHeading from './SectionHeading';

const badgeConfig: Record<BadgeKind, { icon: LucideIcon; className: string }> = {
  수상: { icon: Trophy, className: 'bg-yellow-100 text-yellow-800' },
  '진행 중': { icon: Clock, className: 'bg-purple-100 text-purple-700' },
  출전: { icon: CircleCheck, className: 'bg-gray-100 text-gray-600' },
};

interface Props {
  id: string;
  bigText: string;
  title: string;
  items: TimelineItem[];
}

export default function Timeline({ id, bigText, title, items }: Props) {
  return (
    <section id={id} className="mb-24">
      <SectionHeading bigText={bigText} title={title} />
      <ol className="relative space-y-8 border-l-2 border-gray-100 pl-8">
        {items.map((item) => {
          const badge = item.badge ? badgeConfig[item.badge.kind] : null;
          const BadgeIcon = badge?.icon;
          return (
            <li key={item.title} className="relative">
              <span className="absolute top-1.5 -left-[41px] h-4 w-4 rounded-full border-4 border-white bg-accent shadow" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-accent">{item.period}</span>
                {item.badge && badge && BadgeIcon && (
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}>
                    <BadgeIcon size={12} strokeWidth={2.5} aria-hidden />
                    {item.badge.text}
                  </span>
                )}
              </div>
              <h4 className="mt-1 text-lg font-bold text-gray-900">{item.title}</h4>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              {item.stack && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}