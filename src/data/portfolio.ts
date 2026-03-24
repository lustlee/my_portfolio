import type { NavItem, Project, Skill } from '@/types/portfolio';

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
];

export const skills: Skill[] = [
  { name: 'React 19 + TypeScript', level: 93, colorClass: 'bg-cat-blue', category: 'frontend' },
  { name: 'Next-gen React Patterns (RSC/Suspense)', level: 84, colorClass: 'bg-cat-mauve', category: 'frontend' },
  { name: 'State & Server State (Zustand, React Query)', level: 88, colorClass: 'bg-ayu-cyan', category: 'frontend' },
  { name: 'Performance (Code Splitting, Memo, Web Vitals)', level: 82, colorClass: 'bg-cat-green', category: 'frontend' },
  { name: 'Node.js + Express.js', level: 86, colorClass: 'bg-ayu-orange', category: 'backend' },
  { name: 'REST API Design + Auth (JWT/Cookies)', level: 83, colorClass: 'bg-cat-peach', category: 'backend' },
  { name: 'PostgreSQL / Prisma Basics', level: 76, colorClass: 'bg-cat-sapphire', category: 'backend' },
  { name: 'Testing (Vitest, RTL, API tests)', level: 78, colorClass: 'bg-cat-flamingo', category: 'tooling' },
];

export const projects: Project[] = [
  {
    title: 'Neko Quest UI',
    description:
      'Игровой лендинг со sprite-вдохновленной типографикой, анимированными секциями и адаптивной навигацией.',
    tags: ['React', 'GSAP', 'Tailwind'],
    link: '#',
    accentClass: 'from-cat-mauve/50 to-cat-blue/50',
  },
  {
    title: 'Retro Watchlist',
    description:
      'Приложение для отслеживания аниме и тайтлов в стиле ретро-консоли с акцентом на UX и micro-interactions.',
    tags: ['TypeScript', 'Zustand', 'UI/UX'],
    link: '#',
    accentClass: 'from-ayu-orange/50 to-cat-peach/50',
  },
  {
    title: 'Pixel Portfolio Engine',
    description:
      'Конструктор портфолио-блоков с настраиваемыми цветами, темами и плавными сцен-переходами.',
    tags: ['Design System', 'Animations', 'Frontend'],
    link: '#',
    accentClass: 'from-ayu-cyan/50 to-cat-green/50',
  },
];
