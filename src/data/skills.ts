const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/npm/devicon@2.18.0/icons/${name}/${name}-original.svg`;
const simpleIcon = (name: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@16.37.0/icons/${name}.svg`;

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: devicon('html5') },
      { name: 'CSS3', icon: devicon('css3') },
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'TypeScript 6.0', icon: devicon('typescript') },
      { name: 'React 19', icon: devicon('react') },
      { name: 'React Router 7', icon: devicon('reactrouter') },
      { name: 'Tailwind CSS v4', icon: devicon('tailwindcss') },
      { name: 'Vite 8', icon: devicon('vitejs') },
    ],
  },
  {
    title: 'AI · Data',
    skills: [
      { name: 'Python', icon: devicon('python') },
      { name: 'YOLO (Ultralytics)', icon: simpleIcon('ultralytics') },
      { name: 'Roboflow', icon: simpleIcon('roboflow') },
      { name: 'OpenCV', icon: devicon('opencv') },
      { name: 'pandas', icon: devicon('pandas') },
      { name: 'scikit-learn', icon: devicon('scikitlearn') },
      { name: 'Streamlit', icon: devicon('streamlit') },
    ],
  },
  {
    title: 'Embedded · HW',
    skills: [
      { name: 'Raspberry Pi', icon: devicon('raspberrypi') },
    ],
  },
  {
    title: 'Backend',
    skills: [{ name: 'Node.js', icon: devicon('nodejs') }],
  },
  {
    title: '개발 · 협업 툴',
    skills: [
      { name: 'Git', icon: devicon('git') },
      { name: 'GitHub', icon: devicon('github') },
      { name: 'Vercel', icon: devicon('vercel') },
      { name: 'Google Colab', icon: devicon('googlecolab') },
      { name: 'Claude Code', icon: devicon('claude') },
      { name: 'Figma', icon: devicon('figma') },
      { name: 'Notion', icon: devicon('notion') },
    ],
  },
  {
    title: '기타',
    skills: [{ name: 'Java', icon: devicon('java') }],
  },
];