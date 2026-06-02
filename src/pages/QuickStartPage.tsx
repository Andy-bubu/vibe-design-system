import { SectionHeader } from '@/components/docs/SectionHeader';

export function QuickStartPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Quick Start"
        title="Vibe Coding 快速上手"
        description="用最少步骤把这套组件库接入到你的新页面、原型实验或 AI 生成流程里。"
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <article className="doc-panel p-6">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg-primary">推荐流程</h2>
          <div className="mt-5 space-y-4">
            {[
              '优先从设计令牌页复制颜色、圆角和排版规则，先定视觉基线，再写页面结构。',
              '在组件库页找到目标组件，先看预览画布确认状态，再复制代码块到业务页面。',
              '如果使用 AI 生成界面，直接要求它复用现有 Tailwind Token，例如 `bg-brand-primary`、`border-border-subtle`。',
              '新增组件时，尽量沿用现有边框、阴影和留白节奏，避免出现风格漂移。',
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-border-subtle bg-bg-canvas/75 p-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-fg-secondary">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="doc-panel p-6">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg-primary">代码入口</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-border-subtle bg-slate-950 p-4 text-sm text-slate-100">
              <pre className="overflow-x-auto leading-7">
                <code>{`import { Button, Input, MetricCard } from '@/components/ui';`}</code>
              </pre>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-slate-950 p-4 text-sm text-slate-100">
              <pre className="overflow-x-auto leading-7">
                <code>{`<Button className="bg-brand-primary text-brand-foreground">
  继续生成页面
</Button>`}</code>
              </pre>
            </div>

            <p className="text-sm leading-7 text-fg-secondary">
              如果你在提示词里明确写出“保持 `border-border-subtle`、`shadow-soft` 和 `rounded-xl` 风格一致”，AI 生成结果会更接近当前系统。
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
