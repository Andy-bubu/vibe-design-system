import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        'size-5 rounded border-border-strong text-brand-primary shadow-sm transition-all duration-300',
        'focus:ring-4 focus:ring-brand-primary/15',
        className,
      )}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';
