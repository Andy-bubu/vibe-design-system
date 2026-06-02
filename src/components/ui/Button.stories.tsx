import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, Download } from 'lucide-react';

import { Button } from '@/components/ui/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Deploy interface',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    leadingIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trailingIcon: <ArrowRight className="size-4" />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Download asset pack',
    leadingIcon: <Download className="size-4" />,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'View changelog',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Publishing',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Access restricted',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};
