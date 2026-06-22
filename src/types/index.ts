export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  lastUpdated?: string;
  githubUrl?: string;
  category: 'personal' | 'professional';
  featured?: boolean;
  details?: {
    longDescription: string;
    images: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'freelance' | 'project';
}

export interface NavLink {
  id: string;
  label: string;
  to: string;
}
