import { projects } from '../data/projects';
import { tagColor, tagGroups, type Tag } from '../data/tags';

interface Props {
  selected: Tag | null;
  onSelect: (tag: Tag | null) => void;
}

export default function TagFilter({ selected, onSelect }: Props) {
  const countOf = (tag: Tag) => projects.filter((p) => p.stack.includes(tag)).length;

  return (
    <div className="mb-12 rounded-2xl border border-gray-100 bg-gray-50 p-5">
      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-gray-900">기술 스택으로 프로젝트 보기</p>
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            selected === null ? 'bg-accent text-white' : 'bg-white text-gray-600 hover:text-accent'
          }`}
        >
          전체 보기
        </button>
      </div>

      <div className="space-y-3">
        {tagGroups.map(({ group, tags }) => (
          <div key={group} className="flex flex-col gap-2 md:flex-row md:items-start">
            <span className="w-32 shrink-0 pt-1 text-xs font-bold uppercase tracking-wide text-gray-500">{group}</span>
            <div className="flex flex-wrap gap-1.5">
              {(tags as readonly Tag[]).map((tag) => {
                const count = countOf(tag);
                if (count === 0) return null;
                const active = selected === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onSelect(active ? null : tag)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                      active ? tagColor[group].active : tagColor[group].base
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}