import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative p-2 rounded-lg transition-all duration-300',
        'hover:bg-bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary',
        className
      )}
      aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
          )}
        />
        <Moon
          className={cn(
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          )}
        />
      </div>
    </button>
  );
}
