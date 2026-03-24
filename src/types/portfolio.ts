export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  colorClass: string;
  category: 'frontend' | 'backend' | 'tooling';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  accentClass: string;
}
