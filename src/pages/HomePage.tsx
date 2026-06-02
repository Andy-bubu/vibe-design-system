import { ArrowRight, Layers3, Orbit, Sparkles } from 'lucide-react';

import type { AppRoute } from '@/App';
import { MetricCard } from '@/components/ui/MetricCard';
import { Button } from '@/components/ui/Button';

interface HomePageProps {
  navigate: (route: AppRoute) => void;
}

export function HomePage({ navigate }: HomePageProps) {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_380px]">
        <div className="doc-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-9">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_28%)]"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-canvas/75 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-fg-secondary">
              <Sparkles className="size-3.5 text-brand-primary" aria-hidden="true" />
              AI Native Design System
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-fg-primary sm:text-5xl xl:text-6xl">
              专为智能代码生成与高效复用打造的 React 高级设计系统
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-fg-secondary sm:text-lg">
              统一的 Token、克制的交互语言与可直接复制的代码示例，让设计、前端与 AI 在同一套界面标准中稳定协作。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button trailingIcon={<ArrowRight className="size-4" aria-hidden="true" />} onClick={() => navigate({ page: 'components', componentId: 'button' })}>
                浏览组件库
              </Button>
              <Button variant="secondary" leadingIcon={<Layers3 className="size-4" aria-hidden="true" />} onClick={() => navigate({ page: 'tokens' })}>
                查看设计令牌
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <MetricCard title="文档覆盖率" value="24 个模块" trend={{ value: 12.6, isPositive: true }} icon={<Orbit className="size-4" />} />
          <MetricCard title="Token 一致性" value="98.4%" trend={{ value: 3.2, isPositive: true }} icon={<Layers3 className="size-4" />} />
          <div className="doc-panel p-5">
            <p className="text-sm font-semibold tracking-[-0.02em] text-fg-primary">文档定位</p>
            <p className="mt-3 text-sm leading-7 text-fg-secondary">
              这不是只给人看的组件目录，而是给设计、前端和 AI 一起复用的执行界面。每一页都保留真实预览、原子规范与可复制代码。
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          {
            title: '设计令牌先行',
            description: '先定义颜色、圆角、阴影和字体，再让组件实现自然落在同一视觉体系下。',
          },
          {
            title: '预览与代码并列',
            description: '组件预览画布与代码复制区同步展示，开发和 AI 都能直接拿来使用。',
          },
          {
            title: '中文化表达统一',
            description: '界面文案、注释说明与交互标签统一中文，降低团队沟通与交付成本。',
          },
        ].map((item) => (
          <article key={item.title} className="doc-panel p-5">
            <p className="text-lg font-semibold tracking-[-0.03em] text-fg-primary">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-fg-secondary">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
