export type Category = 'Frontend' | 'AI · Edge AI' | '기타';
export type Status = '🏆 수상' | '🚀 배포·운영' | '🔄 진행 중' | '✅ 완료';

export interface Project {
  title: string;
  summary: string;
  category: Category;
  status: Status;
  period: string;
  team: string;
  roles: string[];
  achievements: string[];
  stack: string[];
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: '웨딩 준비 통합 플랫폼 · WEDU',
    summary:
      '심리테스트로 커플의 프로포즈 취향을 분석해 상품을 추천하고, 일정·예산·체크리스트·모바일 청첩장까지 관리하는 웨딩 준비 웹 플랫폼',
    category: 'Frontend',
    status: '🚀 배포·운영',
    period: '2026.07 – 2026.08',
    team: '10명 · PM 1 / 디자인 1 / 프론트엔드 4 (본인) / 백엔드 4',
    roles: [
      '쇼핑·룩북 6개 페이지 개발 (프로포즈 샵, 상품 상세, 인기 랭킹, 위시리스트, 장바구니, 웨딩 룩북)',
      'Spring Boot 백엔드 API ↔ 화면 연동 (axios)',
      '프론트 4명 공통 컨벤션: Tailwind @theme 디자인 토큰, 공통 UI 컴포넌트',
    ],
    achievements: [
      'LCP 14.5s → 5.6s (-61%, Lighthouse 모바일)',
      '이미지 전송량 26.2MB → 1.4MB (-94.6%)',
      '메인 JS 번들 649kB → 329kB (-49.3%)',
    ],
    stack: ['React 19', 'TypeScript 6.0', 'Vite 8', 'Tailwind CSS v4', 'React Router 7'],
    github: 'https://github.com/weduProject/wedu-frontend',
    link: 'https://wedu.io.kr',
  },
  {
    title: '비상약 인식·음성 안내 서비스 · A-EYE',
    summary:
      '약 포장지를 촬영하면 YOLO 모델이 비상약 13종을 인식하고 복용법·주의사항을 음성(TTS)으로 안내하는 서비스',
    category: 'AI · Edge AI',
    status: '✅ 완료',
    period: '2026.05 – 2026.06',
    team: '3명 · 팀장 1 / YOLO 추론 1 / UI·통합·모델 평가 1 (본인)',
    roles: [
      '모델 평가 파이프라인 구축 (run_eval.py · analyze_thresholds.py · analyze_confusion.py)',
      '저성능 4개 클래스 재촬영·재학습, 클래스별 confidence·margin threshold 적용',
    ],
    achievements: [
      '13개 클래스 정답률 61.5% → 84.6%',
      'fusidin → festal 오인식 192건 → 3건',
    ],
    stack: ['Python', 'YOLOv12n', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/seowon-two/A-EYE',
  },
  {
    title: '위험음 방향 인지 허리띠형 웨어러블 · 팔방송이',
    summary:
      '4채널 마이크로 주변 위험음의 종류와 방향을 인식해 진동으로 알려주는 AI 촉각 알림 시스템 (AI·전자·기계 3개 전공 융합)',
    category: 'AI · Edge AI',
    status: '🏆 수상',
    period: '2026.08 – 2026.09',
    team: '6명 · 인공지능공학 2 (본인 팀장) / 지능형전자시스템 2 / 기계시스템 2',
    roles: [
      '3개 전공 간 인터페이스(방향 추정 → 소리 분류 → 판단·진동 출력) 정의',
      '분류 결과(클래스·확신도) 기반 위험도 판단 → 진동 세기·패턴 결정 로직',
    ],
    achievements: ['MEIT 5회 전공 융합 프로젝트 대회 은상'],
    stack: ['YAMNet', 'TDoA', 'MCU'],
    github: 'https://github.com/MEIT-competition/meit-ai',
  },
];