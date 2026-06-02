import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { CodeBlock } from '@/components/docs/CodeBlock';
import { PreviewSandbox } from '@/components/docs/PreviewSandbox';
import { SectionHeader } from '@/components/docs/SectionHeader';
import { componentDocs, componentGroups, getComponentDoc } from '@/content/componentDocs';
import { cn } from '@/utils/cn';

interface ComponentsCatalogPageProps {
  selectedComponentId: string;
  onSelectComponent: (componentId: string) => void;
}

export function ComponentsCatalogPage({ selectedComponentId, onSelectComponent }: ComponentsCatalogPageProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    foundations: true,
    inputs: true,
    display: true,
    feedback: true,
  });

  const activeDoc = getComponentDoc(selectedComponentId);
  const PreviewComponent = activeDoc.preview;

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Components Catalog"
        title="组件库"
        description="按分类浏览组件，直接查看真实交互效果、使用说明与可复制代码，让开发和 AI 都能快速接入。"
      />

      <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="doc-panel h-fit p-4">
          <div className="mb-4">
            <p className="text-sm font-semibold tracking-[-0.02em] text-fg-primary">组件分类导航</p>
            <p className="mt-1 text-sm leading-6 text-fg-secondary">支持折叠切换，并高亮当前正在查看的组件。</p>
          </div>

          <div className="space-y-3">
            {componentGroups.map((group) => {
              const isOpen = group.items.includes(activeDoc.id as never) ? true : openGroups[group.id];

              return (
                <section key={group.id} className="rounded-2xl border border-border-subtle bg-bg-canvas/70 p-3">
                  <button
                    type="button"
                    onClick={() => setOpenGroups((current) => ({ ...current, [group.id]: !current[group.id] }))}
                    className="flex w-full items-center justify-between gap-3 px-1 py-1.5 text-left"
                  >
                    <span className="text-sm font-semibold text-fg-primary">{group.label}</span>
                    <ChevronDown
                      className={cn('size-4 text-fg-secondary transition-transform duration-300', isOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen ? (
                    <div className="mt-2 space-y-1">
                      {group.items.map((itemId) => {
                        const doc = componentDocs.find((item) => item.id === itemId);
                        if (!doc) {
                          return null;
                        }

                        const isActive = doc.id === activeDoc.id;

                        return (
                          <button
                            key={doc.id}
                            type="button"
                            onClick={() => onSelectComponent(doc.id)}
                            className={cn(
                              'w-full rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-300',
                              isActive
                                ? 'bg-brand-primary/10 font-semibold text-brand-primary'
                                : 'text-fg-secondary hover:bg-surface-overlay hover:text-fg-primary',
                            )}
                          >
                            {doc.label}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
        </aside>

        <div className="space-y-5">
          <section className="doc-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fg-secondary">{activeDoc.groupId}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-fg-primary">{activeDoc.label}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-fg-secondary">{activeDoc.description}</p>
          </section>

          <PreviewSandbox>
            <PreviewComponent />
          </PreviewSandbox>

          <CodeBlock code={activeDoc.code} />
        </div>
      </div>
    </div>
  );
}
