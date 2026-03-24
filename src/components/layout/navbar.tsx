import { NavLink } from 'react-router-dom';

import { ThemeToggle } from '@/components/layout/theme-toggle';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contacts', label: 'Contacts' },
];

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur'>
      <nav className='container flex h-16 items-center justify-between'>
        <NavLink to='/' className='font-console text-xs text-cat-mauve'>
          RAMA.DEV
        </NavLink>

        <ul className='hidden gap-5 text-sm md:flex'>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
