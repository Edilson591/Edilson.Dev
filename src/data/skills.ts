import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'React', icon: 'Code2', category: 'frontend', proficiency: 90 },
  { id: '2', name: 'TypeScript', icon: 'FileType', category: 'frontend', proficiency: 85 },
  { id: '3', name: 'JavaScript', icon: 'FileCode2', category: 'frontend', proficiency: 95 },
  { id: '4', name: 'HTML5', icon: 'Layout', category: 'frontend', proficiency: 95 },
  { id: '5', name: 'CSS3', icon: 'Palette', category: 'frontend', proficiency: 90 },
  { id: '6', name: 'Tailwind CSS', icon: 'Paintbrush', category: 'frontend', proficiency: 90 },
  { id: '7', name: 'Framer Motion', icon: 'Move', category: 'frontend', proficiency: 75 },
  { id: '8', name: 'Redux', icon: 'Database', category: 'frontend', proficiency: 80 },

  // Backend
  { id: '9', name: 'Node.js', icon: 'Server', category: 'backend', proficiency: 80 },
  { id: '10', name: 'Laravel', icon: 'Layers', category: 'backend', proficiency: 75 },
  { id: '11', name: 'PHP', icon: 'FileCode', category: 'backend', proficiency: 70 },
  { id: '12', name: 'MySQL', icon: 'Database', category: 'backend', proficiency: 75 },
  { id: '13', name: 'REST APIs', icon: 'Globe', category: 'backend', proficiency: 85 },
  { id: '20', name: 'Go', icon: 'Code', category: 'backend', proficiency: 65 },

  // Tools
  { id: '14', name: 'Git', icon: 'GitBranch', category: 'tools', proficiency: 90 },
  { id: '15', name: 'GitHub', icon: 'Github', category: 'tools', proficiency: 90 },
  { id: '16', name: 'VS Code', icon: 'Code', category: 'tools', proficiency: 95 },
  { id: '17', name: 'Figma', icon: 'Figma', category: 'tools', proficiency: 70 },
  { id: '18', name: 'Vite', icon: 'Zap', category: 'tools', proficiency: 85 },
  { id: '19', name: 'npm/yarn', icon: 'Package', category: 'tools', proficiency: 85 },
];

export const skillCategories = [
  { id: 'frontend', label: 'Front-End', color: 'bg-blue-500' },
  { id: 'backend', label: 'Back-End', color: 'bg-green-500' },
  { id: 'tools', label: 'Ferramentas', color: 'bg-purple-500' },
];
