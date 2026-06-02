import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'h-11 w-full rounded-lg border border-border-subtle bg-bg-canvas/90 px-4 text-sm text-fg-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300',
        'placeholder:text-fg-secondary/70 focus:border-brand-primary/40 focus:outline-none focus:ring-4 focus:ring-brand-primary/10',
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';
