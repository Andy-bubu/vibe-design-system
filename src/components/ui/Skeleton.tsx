import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl bg-[linear-gradient(90deg,rgba(226,232,240,0.72),rgba(241,245,249,0.96),rgba(226,232,240,0.72))] bg-[length:200%_100%]',
        className,
      )}
      {...props}
    />
  );
}
