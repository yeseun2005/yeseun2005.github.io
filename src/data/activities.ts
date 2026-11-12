export type BadgeKind = '수상' | '진행 중' | '출전';

export interface TimelineItem {
  period: string;
  title: string;
  badge?: { kind: BadgeKind; text: string };
  description: string;
  stack?: string[];
}

export const awards: TimelineItem[] = [
  {
    period: '2026.10',
    badge: { kind: '수상', text: '은상' },
    title: 'MEIT 5회 전공 융합 프로젝트 대회',
    description: '위험음 방향 인지 허리띠형 웨어러블 (AI 판단 로직)',
    stack: ['Python', 'YAMNet', 'TensorFlow', 'librosa'],
  },
  {
    period: '진행 중',
    badge: { kind: '진행 중', text: '본선 진출' },
    title: '제10회 SMWU 캡스톤디자인 경진대회 (시제품형)',
    description: '작업자를 따라 움직이는 물류센터용 스팟 쿨러 (작업자 인식·추적)',
    stack: ['YOLO', 'ByteTrack', 'OpenCV', 'Raspberry Pi'],
  },
  {
    period: '진행 중',
    badge: { kind: '진행 중', text: '예선 통과' },
    title: '2026 SNOWCHAT AI 서비스 경진대회',
    description: '유학생 학업·체류 통합 플래너 챗봇',
  },
];

export const activities: TimelineItem[] = [
  {
    period: '2026.09 – 현재',
    title: 'UMC 11기 · 숙명여대 지부 부회장',
    description: 'PE(풀스택) 파트',
  },
  {
    period: '2026.08',
    title: 'UMC 10th DEMODAY · 부스 운영',
    description: 'WEDU 프로젝트 소개 및 서비스 시연',
  },
  {
    period: '2026.03 – 2026.08',
    title: 'UMC 10기 · Web(프론트엔드) 파트 수료',
    description: 'React 워크북 기반 프론트엔드 학습 · 팀 프로젝트(WEDU)',
  },
];