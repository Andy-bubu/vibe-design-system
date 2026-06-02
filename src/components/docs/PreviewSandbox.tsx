import type { ReactNode } from 'react';
import { Card, Typography } from 'antd';

interface PreviewSandboxProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function PreviewSandbox({
  title = '交互预览',
  description = '直接在画布中验证 Hover、点击与状态切换。',
  children,
}: PreviewSandboxProps) {
  return (
    <Card className="doc-panel border-border-subtle">
      <div className="mb-4">
        <Typography.Text strong className="!text-base !tracking-[-0.02em] !text-fg-primary">
          {title}
        </Typography.Text>
        <Typography.Paragraph className="!mb-0 !mt-1 !text-sm !leading-6 !text-fg-secondary">
          {description}
        </Typography.Paragraph>
      </div>
      <div className="rounded-[1.25rem] border border-border-subtle bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(244,247,251,0.96))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-6">
        {children}
      </div>
    </Card>
  );
}
