export const tagGroups = [
  {
    group: 'Frontend',
    tags: ['TypeScript 6.0', 'JavaScript', 'HTML/CSS', 'React 19', 'React Router 7', 'Tailwind CSS v4', 'Vite 8', 'axios'],
  },
  {
    group: 'AI · Data',
    tags: ['Python', 'pandas', 'YOLO', 'ByteTrack', 'YAMNet', 'TensorFlow', 'librosa', 'OpenCV', 'Roboflow', 'Streamlit', 'gTTS'],
  },
  {
    group: 'Embedded · IoT',
    tags: ['Raspberry Pi', 'ESP32', 'I2C'],
  },
  {
    group: 'Backend · 통신',
    tags: ['Node.js', 'Express', 'Socket.IO', 'MongoDB Atlas', 'FastAPI', 'REST API', 'TCP', 'Serial'],
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

export const tagColor: Record<TagGroup, string> = {
  Frontend: 'bg-blue-50 text-blue-700',
  'AI · Data': 'bg-emerald-50 text-emerald-700',
  'Embedded · IoT': 'bg-amber-50 text-amber-700',
  'Backend · 통신': 'bg-purple-50 text-purple-700',
  기타: 'bg-gray-100 text-gray-700',
};