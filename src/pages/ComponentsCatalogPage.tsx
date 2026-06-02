import { useState } from 'react';
import { AppstoreOutlined, CodeOutlined, InboxOutlined, NotificationOutlined } from '@ant-design/icons';
import { Card, Collapse, Menu, Tag, Typography } from 'antd';

import { CodeBlock } from '@/components/docs/CodeBlock';
import { PreviewSandbox } from '@/components/docs/PreviewSandbox';
import { SectionHeader } from '@/components/docs/SectionHeader';
import { componentDocs, componentGroups, getComponentDoc } from '@/content/componentDocs';

interface ComponentsCatalogPageProps {
  selectedComponentId: string;
  onSelectComponent: (componentId: string) => void;
}

const defaultOpenGroups = {
  foundations: true,
  inputs: true,
  display: true,
  feedback: true,
};

export function ComponentsCatalogPage({ selectedComponentId, onSelectComponent }: ComponentsCatalogPageProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(defaultOpenGroups);

  const activeDoc = getComponentDoc(selectedComponentId);
  const PreviewComponent = activeDoc.preview;
  const groupIcons = {
    foundations: <AppstoreOutlined />,
    inputs: <InboxOutlined />,
    display: <CodeOutlined />,
    feedback: <NotificationOutlined />,
  };

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
            <Typography.Text strong className="!text-sm !tracking-[-0.02em] !text-fg-primary">
              组件分类导航
            </Typography.Text>
            <Typography.Paragraph className="!mb-0 !mt-1 !text-sm !leading-6 !text-fg-secondary">
              支持折叠切换，并高亮当前正在查看的组件。
            </Typography.Paragraph>
          </div>

          <Collapse
            ghost
            activeKey={componentGroups.filter((group) => group.items.includes(activeDoc.id as never) || openGroups[group.id]).map((group) => group.id)}
            onChange={(keys) => {
              const nextKeys = Array.isArray(keys) ? keys : [keys];
              setOpenGroups({
                foundations: nextKeys.includes('foundations'),
                inputs: nextKeys.includes('inputs'),
                display: nextKeys.includes('display'),
                feedback: nextKeys.includes('feedback'),
              });
            }}
            items={componentGroups.map((group) => ({
              key: group.id,
              label: group.label,
              extra: groupIcons[group.id as keyof typeof groupIcons],
              children: (
                <Menu
                  mode="inline"
                  selectedKeys={[activeDoc.id]}
                  items={group.items
                    .map((itemId) => {
                      const doc = componentDocs.find((item) => item.id === itemId);
                      return doc
                        ? {
                            key: doc.id,
                            label: doc.label,
                            onClick: () => onSelectComponent(doc.id),
                          }
                        : null;
                    })
                    .filter(Boolean)}
                  className="border-0 bg-transparent"
                />
              ),
            }))}
          />
        </aside>

        <div className="space-y-5">
          <Card className="doc-panel border-border-subtle">
            <Tag color="blue">{activeDoc.groupId}</Tag>
            <Typography.Title level={2} className="!mb-0 !mt-3 !text-fg-primary">
              {activeDoc.label}
            </Typography.Title>
            <Typography.Paragraph className="!mb-0 !mt-4 !max-w-3xl !text-base !leading-7 !text-fg-secondary">
              {activeDoc.description}
            </Typography.Paragraph>
          </Card>

          <PreviewSandbox>
            <PreviewComponent />
          </PreviewSandbox>

          <CodeBlock code={activeDoc.code} />
        </div>
      </div>
    </div>
  );
}
