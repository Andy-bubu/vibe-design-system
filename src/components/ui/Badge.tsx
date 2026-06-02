import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

const badgeVariants = {
  neutral: 'border-border-subtle bg-surface-overlay text-fg-secondary',
  brand: 'border-brand-primary/15 bg-brand-primary/10 text-brand-primary',
  success: 'border-success/15 bg-success/10 text-success',
  warning: 'border-warning/15 bg-warning/10 text-warning',
  danger: 'border-danger/15 bg-danger/10 text-danger',
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold tracking-[-0.01em]',
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
