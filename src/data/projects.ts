import type { Tag } from './tags';

export type Category = 'Frontend' | 'AI · Edge AI' | '기타';
export type Status = '수상' | '배포·운영' | '진행 중' | '완료';

export interface Highlight {
  label: string;
  value: string;
}

export type Role = string | { topic: string; detail: string };

export interface Project {
  title: string;
  summary: string;
  category: Category;
  status: Status;
  period: string;
  team: string;
  highlights: Highlight[];
  measureNote?: string;
  roles: Role[];
  stack: Tag[];
  ai?: string;
  github?: string;
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    title: 'WEDU',
    summary: '취향 분석 기반 상품 추천 + 일정·예산·청첩장 관리 웨딩 준비 플랫폼',
    category: 'Frontend',
    status: '배포·운영',
    period: '2026.07 – 2026.08',
    team: '10명 · PM 1 / 디자인 1 / FE 4 (본인) / BE 4',
    highlights: [
      { label: 'LCP', value: '14.5s → 5.6s' },
      { label: 'JS 번들', value: '-49.3%' },
      { label: '이미지 용량', value: '-94.6%' },
    ],
    measureNote: 'Lighthouse 모바일 · 3회 중앙값',
    roles: [
      { topic: '페이지 개발', detail: '쇼핑·룩북 6개 페이지 · Spring Boot API 연동 (axios)' },
      { topic: '스타일 일관성', detail: 'Tailwind @theme 디자인 토큰, 공통 UI는 src/components/ui로 분리' },
      { topic: '성능', detail: 'WebP · fetchPriority · lazy loading, React.lazy 페이지별 코드 분할' },
    ],
    stack: ['React 19', 'TypeScript 6.0', 'Vite 8', 'Tailwind CSS v4', 'React Router 7', 'REST API'],
    ai: 'Claude Code 사용 → 직접 리팩토링 · Lighthouse 측정으로 검증',
    github: 'https://github.com/weduProject/wedu-frontend',
    link: 'https://wedu.io.kr',
  },
  {
    title: 'MMe',
    summary: '오버워치 티어 기록 · 고티어 코칭 · 스쿼드 찾기 서비스',
    category: 'Frontend',
    status: '배포·운영',
    period: '2026.08 – 2026.09',
    team: '2명 · 기획 1 / 개발 1 (본인)',
    highlights: [
      { label: 'Performance', value: '97점' },
      { label: 'LCP', value: '1.5s' },
      { label: '접근성', value: '100점' },
    ],
    measureNote: 'PageSpeed Insights 모바일 기준',
    roles: [
      { topic: '전담 개발', detail: '프론트엔드 개발 100% · Vercel 배포' },
      { topic: '구조 재설계', detail: 'Codex로 만든 Next.js 프로토타입 → React + Vite SPA로 재구축' },
      { topic: '컴포넌트화', detail: '하드코딩된 화면 → 공통 컴포넌트 + Tailwind로 재구성' },
      { topic: '기능 추가', detail: '실사용자 요청을 반영해 스쿼드 찾기 기능 추가' },
    ],
    stack: ['React 19', 'TypeScript 6.0', 'Vite 8', 'Tailwind CSS v4', 'React Router 7', 'Vercel'],
    ai: 'Claude Code 사용 · AI 프로토타입을 구조부터 다시 설계',
    github: 'https://github.com/yeseun2005/MME-FRONT',
    link: 'https://mme-front.vercel.app/record',
  },
  {
    title: 'Global Shortform',
    summary: '영상 링크로 숏폼 구간 · 자막 · 해시태그를 생성하는 AI 웹서비스',
    category: 'Frontend',
    status: '배포·운영',
    period: '2026.07 – 2026.08',
    team: '3명 · FE 2 (본인: API 연동) / BE 1',
    highlights: [
      { label: 'Performance', value: '99점' },
      { label: 'LCP', value: '1.5s' },
    ],
    measureNote: 'PageSpeed Insights 모바일 · 배포 서비스 기준',
    roles: [
      { topic: '설계', detail: 'Figma 와이어프레임 설계' },
      { topic: '목업 우선 개발', detail: '목업 데이터로 화면을 먼저 완성 → 실제 API 응답 구조에 맞춰 로직 교체' },
      { topic: '화면 분리', detail: '분석 단계별 컴포넌트, API 호출은 lib/api.ts로 분리' },
      { topic: 'API 연동', detail: '링크 입력 → 분석 요청 → 결과 출력 fetch 흐름 구현 · 연동 오류 수정' },
    ],
    stack: ['React 19', 'TypeScript 6.0', 'Vite 8', 'Tailwind CSS v4', 'REST API'],
    github: 'https://github.com/choi-jieun/Global-shortform-Assistant',
    link: 'https://global-shortform-assistant.vercel.app/',
  },
  {
    title: '송이톡',
    summary: '메시지를 체크리스트 · 보관함과 연결한 협업용 실시간 채팅',
    category: 'Frontend',
    status: '완료',
    period: '2025.10 – 2025.12',
    team: '5명 · 본인: 로그인 · 설정 화면',
    highlights: [],
    roles: [
      { topic: '화면 개발', detail: '로그인 · 설정 화면 개발' },
      { topic: '스타일 정리', detail: '흩어진 nav · 검색창 스타일을 공통 CSS로 통합' },
      { topic: '기능 연동', detail: '할 일 체크 ↔ 체크리스트 연동 · 상태 유지' },
    ],
    stack: ['HTML/CSS', 'JavaScript', 'Node.js', 'Express', 'Socket.IO', 'MongoDB Atlas'],
    github: 'https://github.com/Sookmyung-WebProgramming/final',
  },
  {
    title: 'A-EYE',
    summary: '약 포장지를 찍으면 비상약 13종을 인식해 음성으로 안내하는 서비스',
    category: 'AI · Edge AI',
    status: '완료',
    period: '2026.05 – 2026.06',
    team: '3명 · 본인: UI · 통합 · 모델 평가',
    highlights: [
      { label: 'band recall', value: '0 → 0.98' },
      { label: 'fusidin 오인식', value: '192 → 3건' },
      { label: 'bearse precision', value: '0.69 → 0.96' },
    ],
    measureNote: '직접 촬영 910장 중 80% 기준 · threshold 튜닝 후',
    roles: [
      { topic: '평가 파이프라인', detail: 'threshold · confusion 분석 스크립트로 클래스별 성능 측정' },
      { topic: '데이터 개선', detail: '저성능 4개 클래스 재촬영 · negative sample 추가 후 재학습' },
      { topic: 'threshold 튜닝', detail: '클래스별 confidence · margin 기준 차등 적용' },
    ],
    stack: ['Python', 'YOLO', 'Roboflow', 'Google Colab', 'OpenCV', 'Streamlit', 'gTTS'],
    github: 'https://github.com/seowon-two/A-EYE',
  },
  {
    title: '팔방송이',
    summary: '경적 · 사이렌 · 충돌음 같은 위험음의 종류와 방향을 진동으로 알려주는 허리띠형 웨어러블',
    category: 'AI · Edge AI',
    status: '수상',
    period: '2026.08 – 2026.09',
    team: '6명 · AI 2 (본인: 판단 로직 · 통합) / 전자 2 / 기계 2',
    highlights: [
      { label: '위험음 Recall', value: '98.9%' },
      { label: '오탐률', value: '2.6%' },
      { label: 'MEIT 5회', value: '은상' },
    ],
    measureNote: '분류 + 판단 파이프라인 · 검증셋 340클립 · "알림이 울렸는가" 기준',
    roles: [
      { topic: '협업 조율', detail: '3개 전공 6명 일정 조율 · 전공 간 입출력 인터페이스 정의' },
      { topic: '위험도 판단', detail: '보정된 확신도 임계값 + 음량 게이트(dBFS)로 알림 여부 결정' },
      { topic: '진동 출력', detail: 'dBFS → 진동 세기 매핑, 클래스별 패턴을 게이팅 주기에 맞춰 자동 선택' },
      { topic: '통합 · 평가', detail: '모델 연결 · 확신도 보정, 실시간 오디오 입력 함수, 파이프라인 평가' },
    ],
    stack: ['Python', 'YAMNet', 'TensorFlow', 'librosa'],
    github: 'https://github.com/MEIT-competition/meit-ai',
    link: 'https://tar-trip-6a5.notion.site/MEIT-3c9739d7a1c381a3a169e456f72c5d0f',
    linkLabel: '프로젝트 소개',
  },
  {
    title: '작업자 추적 스팟 쿨러',
    summary: '카메라로 작업자를 인식 · 추적해, 레일 위 팬이 작업자에게 이동하며 송풍하는 물류센터용 국소 냉방 시스템',
    category: 'AI · Edge AI',
    status: '진행 중',
    period: '2026.09 – 2026.11',
    team: '3명 · 인식 1 (본인) / 구동 1 / 통합 · 송풍 1',
    highlights: [
      { label: '사람 검출률', value: '99.8%' },
      { label: '추적 ID 변경', value: '0회' },
      { label: '좌표 떨림', value: '3.0 → 2.4mm' },
    ],
    measureNote: '시제품 설치 전 단독 시험 · 노트북 웹캠 496프레임, 공개 영상 3명 15초 기준',
    roles: [
      { topic: '검출 · 추적', detail: 'YOLO11n 사람 검출 + ByteTrack으로 작업자별 ID 유지' },
      { topic: '좌표 변환', detail: '호모그래피로 영상 좌표 → 레일 좌표(mm) 변환, 이동 평균으로 떨림 감소' },
      { topic: '현장 조건', detail: '랙에 하체가 가려져도 상체 기준점으로 위치 추정' },
    ],
    stack: ['Python', 'YOLO', 'ByteTrack', 'OpenCV', 'Raspberry Pi', 'TCP'],
    github: 'https://github.com/SPTeam-2/spot-cooling-tracking-system',
  },
  {
    title: 'handsfree-door',
    summary: '짐 · 유모차 · 휠체어로 문을 열기 힘들 때 알아서 열리고, 뒤에서 누가 따라오면 바로 닫히는 온디바이스 AI 현관문',
    category: 'AI · Edge AI',
    status: '진행 중',
    period: '2026.11 – 2026.12',
    team: '3명 · 영상 인식 1 / 의도 판단 · 통합 1 (본인) / 레이더 · 안전 제어 1',
    highlights: [],
    roles: [
      { topic: '의도 판단', detail: '최근 1초 궤적(가로 이동량 · 박스 크기 변화)으로 다가옴 / 가로지름을 구분하는 규칙 기반 로직' },
      { topic: '통합 시뮬레이션', detail: '추적 CSV를 실시간처럼 재생해 판단 → 문 명령 → 가짜 문까지 연결' },
      { topic: '인터페이스', detail: '파트 간 데이터 형식과 문 명령 프로토콜(OPEN · HOLD · CLOSE · ALERT) 정의' },
    ],
    stack: ['Python', 'pandas', 'Raspberry Pi', 'ESP32', 'Serial'],
    github: 'https://github.com/handsfree-door/ai-door',
  },
  {
    title: 'nu40-commute',
    summary: '지금 나가면 탈 수 있는 지하철을 OLED에 띄우는 출근 알림 보드 (오픈소스 fork 개조)',
    category: '기타',
    status: '진행 중',
    period: '2026.10 – 진행 중',
    team: '개인',
    highlights: [],
    roles: [
      { topic: '출근 마감 모드', detail: '마감에 맞는 가장 늦은 열차 선택' },
      { topic: '호선 필터', detail: '공덕역 다른 호선 열차 제외 · 실시간 API 키 분리' },
      { topic: '도구', detail: '역 코드 찾기 스크립트 추가' },
    ],
    stack: ['Python', 'REST API', 'Serial'],
    github: 'https://github.com/yeseun2005/nu40-commute',
  },
  {
    title: 'SongBox',
    summary: '좌석 선택부터 예매 내역 조회까지 동작하는 Java Swing 영화 예매 시스템',
    category: '기타',
    status: '완료',
    period: '2026.05 – 2026.06',
    team: '4명 · 본인: View',
    highlights: [],
    roles: [
      { topic: '화면 개발', detail: 'View 화면 4종 · 공통 UI 컴포넌트' },
      { topic: 'MVC 분리', detail: 'Listener 인터페이스로 사용자 이벤트만 Controller에 전달' },
    ],
    stack: ['Java', 'Swing'],
    github: 'https://github.com/apffkxhsls/OOP-movie-reservation-system',
  },
];