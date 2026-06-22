import { cn } from '@/utils/cn';
import { type HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
