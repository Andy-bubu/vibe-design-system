import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/utils/cn';

const buttonVariants = {
  primary:
    'bg-brand-primary text-brand-foreground shadow-soft hover:bg-brand-primary-hover focus-visible:ring-ring-brand',
  secondary:
    'border border-border-subtle bg-surface-elevated text-fg-primary hover:border-border-strong hover:bg-surface-overlay focus-visible:ring-ring-brand',
  ghost:
    'text-fg-secondary hover:bg-surface-overlay hover:text-fg-primary focus-visible:ring-ring-brand',
} as const;

const buttonSizes = {
  sm: 'h-9 rounded-md px-3.5 text-sm',
  md: 'h-11 rounded-lg px-4 text-sm',
  lg: 'h-12 rounded-lg px-5 text-base',
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      leadingIcon,
      trailingIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-[-0.01em] transition-all duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50',
          buttonVariants[variant],
          buttonSizes[size],
          className,
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : leadingIcon}
        <span>{children}</span>
        {!loading ? trailingIcon : null}
      </button>
    );
  },
);

Button.displayName = 'Button';
