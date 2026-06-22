import { cn } from '@/utils/cn';
import { forwardRef, type HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors',
          {
            'bg-bg-secondary text-text': variant === 'default',
            'bg-primary text-text': variant === 'primary',
            'bg-text text-bg': variant === 'secondary',
            'border border-bg-secondary text-text': variant === 'outline',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
