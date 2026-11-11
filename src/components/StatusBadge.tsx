import { CircleCheck, Clock, Rocket, Trophy, type LucideIcon } from 'lucide-react';
import type { Status } from '../data/projects';

const statusConfig: Record<Status, { icon: LucideIcon; className: string }> = {
  수상: { icon: Trophy, className: 'bg-yellow-100 text-yellow-800' },
  '배포·운영': { icon: Rocket, className: 'bg-blue-50 text-accent' },
  '진행 중': { icon: Clock, className: 'bg-purple-100 text-purple-700' },
  완료: { icon: CircleCheck, className: 'bg-gray-100 text-gray-600' },
};

export default function StatusBadge({ status }: { status: Status }) {
  const { icon: Icon, className } = statusConfig[status];

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      <Icon size={12} strokeWidth={2.5} aria-hidden />
      {status}
    </span>
  );
}
