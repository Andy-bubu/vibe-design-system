import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/Button';

function App() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-halo" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        aria-hidden="true"
      />

      <section className="relative w-full max-w-4xl rounded-xl border border-border-subtle bg-surface-elevated/80 p-8 shadow-panel backdrop-blur xl:p-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-overlay px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-fg-secondary">
          <Sparkles className="size-3.5 text-brand-primary" aria-hidden="true" />
          Vibe Design System
        </div>

        <div className="max-w-2xl space-y-5">
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-fg-primary md:text-5xl">
            A premium React component foundation built for predictable reuse.
          </h1>
          <p className="max-w-xl text-base leading-7 text-fg-secondary md:text-lg">
            Tailwind tokens, Storybook-ready primitives, and clean composition patterns for fast human and LLM-driven implementation.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button trailingIcon={<ArrowRight className="size-4" />}>Browse components</Button>
            <Button variant="secondary">Review tokens</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
