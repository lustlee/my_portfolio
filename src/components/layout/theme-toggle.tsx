import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/store/theme-store';

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={toggleTheme}
      aria-label='Переключить тему'
      className='pixel-border bg-card'
    >
      {theme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </Button>
  );
}
