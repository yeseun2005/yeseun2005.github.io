export const tagGroups = [
  {
    group: 'Frontend',
    tags: ['TypeScript 6.0', 'JavaScript', 'HTML/CSS', 'React 19', 'React Router 7', 'Tailwind CSS v4', 'Vite 8', 'axios'],
  },
  {
    group: 'AI · Data',
    tags: ['Python', 'YOLO', 'YAMNet', 'TensorFlow', 'librosa', 'OpenCV', 'Roboflow', 'Streamlit', 'gTTS'],
  },
  {
    group: 'Embedded · IoT',
    tags: ['Raspberry Pi', 'ESP32'],
  },
  {
    group: 'Backend · 통신',
    tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB Atlas', 'FastAPI', 'REST API', 'UDP', 'Serial'],
  },
  {
    group: '기타',
    tags: ['Java', 'Swing', 'Google Colab', 'Vercel', 'Figma'],
  },
] as const;

export type TagGroup = (typeof tagGroups)[number]['group'];
export type Tag = (typeof tagGroups)[number]['tags'][number];

export const groupOfTag = Object.fromEntries(
  tagGroups.flatMap((g) => (g.tags as readonly Tag[]).map((tag) => [tag, g.group] as const)),
) as Record<Tag, TagGroup>;

export const tagColor: Record<TagGroup, { base: string; active: string }> = {
  Frontend: { base: 'bg-blue-50 text-blue-700 hover:bg-blue-100', active: 'bg-blue-600 text-white' },
  'AI · Data': { base: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100', active: 'bg-emerald-600 text-white' },
  'Embedded · IoT': { base: 'bg-amber-50 text-amber-700 hover:bg-amber-100', active: 'bg-amber-500 text-white' },
  'Backend · 통신': { base: 'bg-purple-50 text-purple-700 hover:bg-purple-100', active: 'bg-purple-600 text-white' },
  기타: { base: 'bg-gray-100 text-gray-700 hover:bg-gray-200', active: 'bg-gray-700 text-white' },
};