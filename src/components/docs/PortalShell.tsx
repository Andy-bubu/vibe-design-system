import type { ReactNode } from 'react';
import { Code2, Sparkles } from 'lucide-react';

import { cn } from '@/utils/cn';

interface NavigationItem {
  label: string;
  caption: string;
  isActive: boolean;
  icon: ReactNode;
  onClick: () => void;
}

interface PortalShellProps {
  navigationItems: NavigationItem[];
  children: ReactNode;
}

export function PortalShell({ navigationItems, children }: PortalShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-halo" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] opacity-80 [mask-image:radial-gradient(circle_at_top,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <header className="glass-panel flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-bg-canvas/70 text-brand-primary shadow-soft">
              <Code2 className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-[-0.02em] text-fg-primary">Vibe Design System</p>
              <p className="truncate text-sm text-fg-secondary">中文组件文档系统 · React / Tailwind / AI Ready</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border-subtle bg-bg-canvas/70 px-3 py-1.5 text-xs font-medium tracking-[0.18em] text-fg-secondary md:inline-flex">
            <Sparkles className="size-3.5 text-brand-primary" aria-hidden="true" />
            PREMIUM DOC PORTAL
          </div>
        </header>

        <div className="mt-4 grid flex-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="glass-panel hidden p-4 lg:block">
            <div className="mb-5 border-b border-border-subtle/80 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-secondary">Navigation</p>
              <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-fg-primary">设计系统中台</h2>
            </div>

            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className={cn(
                    'w-full rounded-xl border px-4 py-3 text-left transition-all duration-300',
                    item.isActive
                      ? 'border-brand-primary/20 bg-brand-primary/10 shadow-soft'
                      : 'border-transparent bg-transparent hover:border-border-subtle hover:bg-bg-canvas/60',
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold tracking-[-0.02em] text-fg-primary">{item.label}</span>
                    <span className={cn('text-fg-secondary transition-transform duration-300', item.isActive && 'translate-x-0.5 text-brand-primary')}>
                      {item.icon}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-fg-secondary">{item.caption}</p>
                </button>
              ))}
            </nav>
          </aside>

          <div className="glass-panel overflow-hidden">
            <nav className="scrollbar-hidden flex gap-2 overflow-x-auto border-b border-border-subtle/80 p-3 lg:hidden">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                    item.isActive
                      ? 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary'
                      : 'border-border-subtle bg-bg-canvas/70 text-fg-secondary',
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <main className="min-h-[calc(100vh-10rem)] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
