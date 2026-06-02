import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/utils/cn';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'h-11 w-full appearance-none rounded-lg border border-border-subtle bg-bg-canvas/90 px-4 pr-11 text-sm text-fg-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300',
          'focus:border-brand-primary/40 focus:outline-none focus:ring-4 focus:ring-brand-primary/10',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-fg-secondary" aria-hidden="true" />
    </div>
  );
});

Select.displayName = 'Select';
