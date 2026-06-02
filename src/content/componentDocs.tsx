/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import type { ReactElement } from 'react';
import {
  BadgeCheck,
  Bell,
  CheckCircle2,
  CircleAlert,
  LayoutGrid,
  MoonStar,
  PanelsTopLeft,
  Sparkles,
  Type,
} from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';
import { MetricCard } from '@/components/ui/MetricCard';
import { Modal } from '@/components/ui/Modal';
import { Select } from '@/components/ui/Select';
import { Skeleton } from '@/components/ui/Skeleton';

export interface ComponentDoc {
  id: string;
  label: string;
  groupId: string;
  description: string;
  preview: () => ReactElement;
  code: string;
}

export const componentGroups = [
  { id: 'foundations', label: '基础组件', items: ['button', 'icon', 'typography'] },
  { id: 'inputs', label: '数据输入', items: ['input', 'select', 'checkbox'] },
  { id: 'display', label: '数据展示', items: ['metric-card', 'table', 'badge'] },
  { id: 'feedback', label: '反馈通知', items: ['modal', 'toast', 'skeleton'] },
] as const;

function ButtonPreview() {
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <Button size="sm">小尺寸</Button>
        <Button size="md">默认按钮</Button>
        <Button size="lg" trailingIcon={<Sparkles className="size-4" aria-hidden="true" />}>
          强调操作
        </Button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="secondary">次级操作</Button>
        <Button variant="ghost" leadingIcon={<MoonStar className="size-4" aria-hidden="true" />}>
          Ghost 按钮
        </Button>
        <Button loading={loading} onClick={simulateLoading}>
          {loading ? '提交中...' : '模拟 Loading'}
        </Button>
      </div>
    </div>
  );
}

function IconPreview() {
  const icons = [Sparkles, LayoutGrid, PanelsTopLeft, Bell, BadgeCheck, Type];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="rounded-xl border border-border-subtle bg-bg-canvas/70 p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
        >
          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-surface-overlay text-brand-primary">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <p className="mt-3 text-sm text-fg-secondary">24px 描边图标</p>
        </div>
      ))}
    </div>
  );
}

function TypographyPreview() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-fg-secondary">Display / 40 / Semibold</p>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-fg-primary">让界面语言保持克制与力量感</h2>
      </div>
      <div>
        <p className="text-sm text-fg-secondary">Body / 16 / Regular</p>
        <p className="max-w-2xl text-base leading-7 text-fg-secondary">
          面向智能代码生成场景的文档界面，需要同时兼顾可读性、结构密度与可复制性，正文建议保持 1.7 左右行高。
        </p>
      </div>
      <div>
        <p className="text-sm text-fg-secondary">Code / 14 / Medium</p>
        <code className="inline-flex rounded-lg border border-border-subtle bg-slate-950 px-3 py-2 text-sm text-slate-100">
          className=&quot;rounded-xl border border-border-subtle&quot;
        </code>
      </div>
    </div>
  );
}

function InputPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2 text-sm font-medium text-fg-primary">
        项目名称
        <Input placeholder="例如：增长驾驶舱" />
      </label>
      <label className="space-y-2 text-sm font-medium text-fg-primary">
        API Key
        <Input defaultValue="sk-live-xxxx-portal" />
      </label>
    </div>
  );
}

function SelectPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2 text-sm font-medium text-fg-primary">
        发布环境
        <Select defaultValue="production">
          <option value="production">生产环境</option>
          <option value="staging">预发环境</option>
          <option value="development">开发环境</option>
        </Select>
      </label>
      <label className="space-y-2 text-sm font-medium text-fg-primary">
        主题模式
        <Select defaultValue="light">
          <option value="light">亮色模式</option>
          <option value="dark">暗色模式</option>
          <option value="system">跟随系统</option>
        </Select>
      </label>
    </div>
  );
}

function CheckboxPreview() {
  return (
    <div className="space-y-3">
      {['自动同步 Tailwind Token', '生成可复制代码片段', '开启实验性 AI 建议'].map((item) => (
        <label key={item} className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-canvas/70 px-4 py-3 text-sm text-fg-primary">
          <Checkbox defaultChecked={item !== '开启实验性 AI 建议'} />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}

function MetricCardPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <MetricCard title="组件覆盖率" value="92%" trend={{ value: 8.4, isPositive: true }} icon={<LayoutGrid className="size-4" />} />
      <MetricCard title="本周复用次数" value="1,284" trend={{ value: 4.1, isPositive: true }} icon={<Sparkles className="size-4" />} />
    </div>
  );
}

function TablePreview() {
  const rows = [
    { name: 'Button', status: '稳定', owner: 'Foundation', version: 'v1.4.0' },
    { name: 'MetricCard', status: '稳定', owner: 'Dashboard', version: 'v1.1.2' },
    { name: 'Modal', status: '迭代中', owner: 'Overlay', version: 'v0.9.8' },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-canvas/80">
      <table className="min-w-full divide-y divide-border-subtle text-left text-sm">
        <thead className="bg-surface-overlay/70 text-fg-secondary">
          <tr>
            <th className="px-4 py-3 font-medium">组件名</th>
            <th className="px-4 py-3 font-medium">状态</th>
            <th className="px-4 py-3 font-medium">负责人</th>
            <th className="px-4 py-3 font-medium">版本</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {rows.map((row) => (
            <tr key={row.name} className="transition-colors duration-300 hover:bg-surface-overlay/40">
              <td className="px-4 py-3 font-medium text-fg-primary">{row.name}</td>
              <td className="px-4 py-3 text-fg-secondary">{row.status}</td>
              <td className="px-4 py-3 text-fg-secondary">{row.owner}</td>
              <td className="px-4 py-3 text-fg-secondary">{row.version}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>默认标签</Badge>
      <Badge variant="brand">品牌高亮</Badge>
      <Badge variant="success">已通过</Badge>
      <Badge variant="warning">待确认</Badge>
      <Badge variant="danger">高风险</Badge>
    </div>
  );
}

function ModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <Button onClick={() => setOpen(true)}>打开弹窗</Button>
        <p className="text-sm text-fg-secondary">用于高优先级确认、设置面板或关键反馈。</p>
      </div>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="部署前确认"
        description="该操作将把最新设计令牌同步到生产环境，请确认团队已完成视觉验收。"
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button onClick={() => setOpen(false)}>确认同步</Button>
          </>
        }
      >
        <div className="rounded-2xl border border-border-subtle bg-bg-canvas/70 p-4 text-sm leading-6 text-fg-secondary">
          建议在发布前至少运行一次 Storybook 截图回归，以确保颜色、间距与边框状态没有偏移。
        </div>
      </Modal>
    </>
  );
}

function ToastPreview() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-success/15 bg-success/10 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 text-success" aria-hidden="true" />
          <div>
            <p className="font-semibold text-success">保存成功</p>
            <p className="mt-1 text-sm leading-6 text-fg-secondary">新的 Button Token 已同步到组件文档与构建系统。</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-warning/15 bg-warning/10 p-4">
        <div className="flex items-start gap-3">
          <CircleAlert className="mt-0.5 size-5 text-warning" aria-hidden="true" />
          <div>
            <p className="font-semibold text-warning">等待审批</p>
            <p className="mt-1 text-sm leading-6 text-fg-secondary">品牌色更新尚未通过设计评审，请暂缓发布到生产环境。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkeletonPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-border-subtle bg-bg-canvas/75 p-5">
        <Skeleton className="h-4 w-28 rounded-full" />
        <Skeleton className="mt-4 h-10 w-40" />
        <Skeleton className="mt-6 h-24 w-full" />
      </div>
      <div className="rounded-2xl border border-border-subtle bg-bg-canvas/75 p-5">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-2xl" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-4 w-40 rounded-full" />
          </div>
        </div>
        <Skeleton className="mt-6 h-28 w-full" />
      </div>
    </div>
  );
}

export const componentDocs: ComponentDoc[] = [
  {
    id: 'button',
    label: 'Button',
    groupId: 'foundations',
    description: '用于触发主要操作、次级操作与即时反馈，是整个系统最常用的交互入口。',
    preview: ButtonPreview,
    code: `import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui';

export function Example() {
  return (
    <div className="flex gap-3">
      <Button size="sm">小尺寸</Button>
      <Button trailingIcon={<Sparkles className="size-4" />}>强调操作</Button>
      <Button loading>提交中...</Button>
    </div>
  );
}`,
  },
  {
    id: 'icon',
    label: 'Icon',
    groupId: 'foundations',
    description: '统一使用 24px 描边图标语言，保证导航、状态提示与操作符号在视觉上保持一致。',
    preview: IconPreview,
    code: `import { Sparkles } from 'lucide-react';

export function Example() {
  return <Sparkles className="size-5 text-brand-primary" aria-hidden="true" />;
}`,
  },
  {
    id: 'typography',
    label: 'Typography',
    groupId: 'foundations',
    description: '定义标题、正文与代码的字号、行高和字重，让中文信息密度与可读性保持平衡。',
    preview: TypographyPreview,
    code: `export function Example() {
  return (
    <>
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-fg-primary">高级标题</h2>
      <p className="mt-4 text-base leading-7 text-fg-secondary">正文信息建议控制在 70 字以内。</p>
    </>
  );
}`,
  },
  {
    id: 'input',
    label: 'Input',
    groupId: 'inputs',
    description: '用于接收简洁的单行文本输入，适合项目名、URL、Key 等表单字段。',
    preview: InputPreview,
    code: `import { Input } from '@/components/ui';

export function Example() {
  return <Input placeholder="请输入项目名称" />;
}`,
  },
  {
    id: 'select',
    label: 'Select',
    groupId: 'inputs',
    description: '提供结构化选项的单选输入，适合环境、角色、主题等状态切换。',
    preview: SelectPreview,
    code: `import { Select } from '@/components/ui';

export function Example() {
  return (
    <Select defaultValue="production">
      <option value="production">生产环境</option>
      <option value="staging">预发环境</option>
    </Select>
  );
}`,
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    groupId: 'inputs',
    description: '用于多选确认与设置开关，建议与说明文字组合使用，避免孤立出现。',
    preview: CheckboxPreview,
    code: `import { Checkbox } from '@/components/ui';

export function Example() {
  return (
    <label className="flex items-center gap-3">
      <Checkbox defaultChecked />
      <span>自动同步 Tailwind Token</span>
    </label>
  );
}`,
  },
  {
    id: 'metric-card',
    label: 'MetricCard',
    groupId: 'display',
    description: '用于展示关键业务指标，支持趋势、图标和骨架加载状态，是仪表盘页面的高频模块。',
    preview: MetricCardPreview,
    code: `import { LayoutGrid } from 'lucide-react';
import { MetricCard } from '@/components/ui';

export function Example() {
  return (
    <MetricCard
      title="组件覆盖率"
      value="92%"
      trend={{ value: 8.4, isPositive: true }}
      icon={<LayoutGrid className="size-4" />}
    />
  );
}`,
  },
  {
    id: 'table',
    label: 'Table',
    groupId: 'display',
    description: '适合展示结构化数据列表，建议使用清晰的列层级与轻量 hover 强调。',
    preview: TablePreview,
    code: `export function Example() {
  return (
    <table className="min-w-full divide-y divide-border-subtle text-sm">
      <thead className="bg-surface-overlay/70">
        <tr>
          <th className="px-4 py-3">组件名</th>
          <th className="px-4 py-3">状态</th>
        </tr>
      </thead>
    </table>
  );
}`,
  },
  {
    id: 'badge',
    label: 'Badge',
    groupId: 'display',
    description: '用于承载轻量状态标签和分类标识，适合列表、卡片与表格中的辅助信息。',
    preview: BadgePreview,
    code: `import { Badge } from '@/components/ui';

export function Example() {
  return <Badge variant="success">已通过</Badge>;
}`,
  },
  {
    id: 'modal',
    label: 'Modal',
    groupId: 'feedback',
    description: '用于阻断式确认与关键配置，适合影响较大的操作流程。',
    preview: ModalPreview,
    code: `import { useState } from 'react';
import { Button, Modal } from '@/components/ui';

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>打开弹窗</Button>
      <Modal open={open} onOpenChange={setOpen} title="部署前确认" />
    </>
  );
}`,
  },
  {
    id: 'toast',
    label: 'Toast',
    groupId: 'feedback',
    description: '适合短暂展示提交结果、审批进度或系统提醒，信息应短、状态应明确。',
    preview: ToastPreview,
    code: `export function Example() {
  return (
    <div className="rounded-2xl border border-success/15 bg-success/10 p-4">
      <p className="font-semibold text-success">保存成功</p>
    </div>
  );
}`,
  },
  {
    id: 'skeleton',
    label: 'Skeleton',
    groupId: 'feedback',
    description: '用于加载前的布局占位，保持页面节奏稳定，减少布局跳动。',
    preview: SkeletonPreview,
    code: `import { Skeleton } from '@/components/ui';

export function Example() {
  return <Skeleton className="h-24 w-full rounded-xl" />;
}`,
  },
];

export function getComponentDoc(componentId: string) {
  return componentDocs.find((item) => item.id === componentId) ?? componentDocs[0];
}
