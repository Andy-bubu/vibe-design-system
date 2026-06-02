import { SectionHeader } from '@/components/docs/SectionHeader';

const colorSections = [
  {
    title: '品牌色',
    items: [
      { name: 'bg-brand-primary', value: '#2563EB', swatch: 'bg-brand-primary' },
      { name: 'bg-brand-primary-hover', value: '#1D4ED8', swatch: 'bg-brand-primary-hover' },
      { name: 'ring-brand', value: '#3B82F6', swatch: 'bg-brand-primary/80' },
    ],
  },
  {
    title: '中性色',
    items: [
      { name: 'bg-enterprise', value: '#F4F7FB', swatch: 'bg-bg-enterprise' },
      { name: 'surface-elevated', value: '#FFFFFF', swatch: 'bg-surface-elevated' },
      { name: 'fg-primary', value: '#0F172A', swatch: 'bg-fg-primary' },
      { name: 'fg-secondary', value: '#475569', swatch: 'bg-fg-secondary' },
      { name: 'border-subtle', value: '#E2E8F0', swatch: 'bg-border-subtle' },
    ],
  },
  {
    title: '语义色',
    items: [
      { name: 'success', value: '#16A34A', swatch: 'bg-success' },
      { name: 'warning', value: '#D97706', swatch: 'bg-warning' },
      { name: 'danger', value: '#DC2626', swatch: 'bg-danger' },
    ],
  },
] as const;

const radiusItems = [
  { label: 'Radius / sm', value: '10px', preview: 'rounded-sm' },
  { label: 'Radius / md', value: '14px', preview: 'rounded-md' },
  { label: 'Radius / lg', value: '16px', preview: 'rounded-lg' },
  { label: 'Radius / xl', value: '20px', preview: 'rounded-xl' },
] as const;

const shadowItems = [
  { label: 'shadow-soft', value: '0 12px 32px rgba(15, 23, 42, 0.08)' },
  { label: 'shadow-panel', value: '0 24px 80px rgba(15, 23, 42, 0.14)' },
  { label: 'grid gap', value: '16px / 24px / 32px' },
] as const;

const typographyItems = [
  { label: 'Display', meta: '40-60 / 600 / -0.04em', sample: '智能文档首页标题' },
  { label: 'Heading', meta: '28-36 / 600 / -0.03em', sample: '组件章节标题' },
  { label: 'Body', meta: '14-18 / 400 / 1.7', sample: '正文说明建议使用克制、精简的中文科技文案。' },
  { label: 'Code', meta: '14 / 500 / mono', sample: 'className="rounded-xl border border-border-subtle"' },
] as const;

export function DesignTokensPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Design Tokens"
        title="设计令牌"
        description="以颜色、阴影、圆角和排版为核心，将界面的视觉决策前置成可维护的原子规范。"
      />

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg-primary">颜色系统</h2>
            <p className="mt-2 text-sm leading-6 text-fg-secondary">展示品牌色、中性色与语义色，确保组件在所有页面保持一致的层级关系。</p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {colorSections.map((section) => (
            <article key={section.title} className="doc-panel p-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-fg-primary">{section.title}</h3>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <div key={item.name} className="rounded-2xl border border-border-subtle bg-bg-canvas/70 p-3">
                    <div className={`h-16 rounded-xl border border-white/50 ${item.swatch}`} />
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-fg-primary">{item.name}</p>
                        <p className="mt-1 text-xs text-fg-secondary">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <article className="doc-panel p-5">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg-primary">阴影与圆角</h2>
          <p className="mt-2 text-sm leading-6 text-fg-secondary">通过固定的阴影层级和圆角体系，维持卡片、浮层和表单的统一质感。</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {radiusItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border-subtle bg-bg-canvas/75 p-4">
                <div className={`h-20 border border-brand-primary/15 bg-brand-primary/10 ${item.preview}`} />
                <p className="mt-3 text-sm font-semibold text-fg-primary">{item.label}</p>
                <p className="mt-1 text-sm text-fg-secondary">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {shadowItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border-subtle bg-bg-canvas/75 p-4">
                <p className="text-sm font-semibold text-fg-primary">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-fg-secondary">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="doc-panel p-5">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-fg-primary">字体排版</h2>
          <p className="mt-2 text-sm leading-6 text-fg-secondary">兼顾英文技术栈与中文说明文字，保持高密度信息下的高级感与清晰度。</p>

          <div className="mt-5 space-y-3">
            {typographyItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border-subtle bg-bg-canvas/75 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-fg-primary">{item.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-fg-secondary">{item.meta}</p>
                  </div>
                </div>
                <p className="mt-4 text-lg leading-8 text-fg-primary">{item.sample}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
