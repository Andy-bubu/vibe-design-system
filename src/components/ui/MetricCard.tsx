import type { ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { cn } from '@/utils/cn';

export interface MetricCardTrend {
  value: number;
  isPositive: boolean;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: MetricCardTrend;
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function MetricCard({
  title,
  value,
  trend,
  loading = false,
  icon,
  className,
}: MetricCardProps) {
  const trendLabel = trend ? `${trend.isPositive ? 'Up' : 'Down'} ${Math.abs(trend.value)}%` : null;

  return (
    <article
      className={cn(
        'group relative w-full min-w-0 overflow-hidden rounded-xl border border-border-subtle',
        'bg-gradient-to-br from-bg-canvas via-surface-elevated to-surface-overlay/70',
        'p-5 shadow-soft transition-all duration-200 ease-in-out',
        'hover:-translate-y-0.5 hover:border-border-strong hover:shadow-panel',
        className,
      )}
      aria-busy={loading || undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_32%)] opacity-80"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {loading ? (
            <span className="block h-4 w-24 animate-pulse rounded bg-surface-overlay" />
          ) : (
            <p className="text-sm font-medium tracking-[-0.01em] text-fg-secondary">{title}</p>
          )}
        </div>

        {icon ? (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-canvas/80 text-fg-secondary transition-colors duration-200 group-hover:text-fg-primary">
            {icon}
          </div>
        ) : null}
      </div>

      <div className="relative mt-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          {loading ? (
            <span className="block h-10 w-32 animate-pulse rounded-lg bg-surface-overlay" />
          ) : (
            <p className="truncate text-3xl font-semibold tracking-[-0.04em] text-fg-primary md:text-4xl">
              {value}
            </p>
          )}
        </div>

        {loading ? (
          <span className="block h-7 w-20 animate-pulse rounded-full bg-surface-overlay" />
        ) : trend ? (
          <div
            className={cn(
              'inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold',
              trend.isPositive
                ? 'border-success/20 bg-success/10 text-success'
                : 'border-danger/20 bg-danger/10 text-danger',
            )}
            aria-label={trendLabel ?? undefined}
          >
            {trend.isPositive ? (
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            ) : (
              <ArrowDownRight className="size-3.5" aria-hidden="true" />
            )}
            <span>{Math.abs(trend.value)}%</span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
