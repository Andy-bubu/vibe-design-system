import type { Meta, StoryObj } from '@storybook/react-vite';
import { Activity, ShieldCheck, Wallet } from 'lucide-react';

import { MetricCard } from '@/components/ui/MetricCard';

const meta = {
  title: 'Components/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
  args: {
    title: 'Monthly recurring revenue',
    value: '$128,420',
    trend: { value: 12.4, isPositive: true },
    loading: false,
  },
  argTypes: {
    icon: {
      control: false,
    },
    trend: {
      control: 'object',
    },
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MetricCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Wallet className="size-4" aria-hidden="true" />,
  },
};

export const PositiveTrend: Story = {
  args: {
    title: 'Qualified pipeline',
    value: '$2.4M',
    trend: { value: 18.2, isPositive: true },
    icon: <Activity className="size-4" aria-hidden="true" />,
  },
};

export const NegativeTrend: Story = {
  args: {
    title: 'Infrastructure spend',
    value: '$48,900',
    trend: { value: 6.8, isPositive: false },
    icon: <ShieldCheck className="size-4" aria-hidden="true" />,
  },
};

export const WithoutTrend: Story = {
  args: {
    title: 'Active enterprise tenants',
    value: 284,
    trend: undefined,
    icon: <ShieldCheck className="size-4" aria-hidden="true" />,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    trend: { value: 0, isPositive: true },
    icon: <Wallet className="size-4" aria-hidden="true" />,
  },
};

export const GridPreview: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard
        title="Net revenue retention"
        value="118.6%"
        trend={{ value: 4.2, isPositive: true }}
        icon={<Activity className="size-4" aria-hidden="true" />}
      />
      <MetricCard
        title="Open security events"
        value="14"
        trend={{ value: 9.1, isPositive: false }}
        icon={<ShieldCheck className="size-4" aria-hidden="true" />}
      />
      <MetricCard
        title="Treasury reserve"
        value="$8.2M"
        trend={{ value: 2.7, isPositive: true }}
        icon={<Wallet className="size-4" aria-hidden="true" />}
      />
    </div>
  ),
};
