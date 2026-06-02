/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'rgb(var(--color-brand-primary) / <alpha-value>)',
        'brand-primary-hover': 'rgb(var(--color-brand-primary-hover) / <alpha-value>)',
        'brand-foreground': 'rgb(var(--color-brand-foreground) / <alpha-value>)',
        'bg-enterprise': 'rgb(var(--color-bg-enterprise) / <alpha-value>)',
        'bg-canvas': 'rgb(var(--color-bg-canvas) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--color-surface-elevated) / <alpha-value>)',
        'surface-overlay': 'rgb(var(--color-surface-overlay) / <alpha-value>)',
        'fg-primary': 'rgb(var(--color-fg-primary) / <alpha-value>)',
        'fg-secondary': 'rgb(var(--color-fg-secondary) / <alpha-value>)',
        'border-subtle': 'rgb(var(--color-border-subtle) / <alpha-value>)',
        'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
        'ring-brand': 'rgb(var(--color-ring-brand) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
      },
      borderRadius: {
        sm: '0.625rem',
        md: '0.875rem',
        lg: '1rem',
        xl: '1.25rem',
      },
      boxShadow: {
        soft: '0 12px 32px rgba(15, 23, 42, 0.08)',
        panel: '0 24px 80px rgba(15, 23, 42, 0.14)',
        focus: '0 0 0 4px rgba(59, 130, 246, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"SFMono-Regular"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
        halo: 'radial-gradient(circle at top, rgba(59, 130, 246, 0.14), transparent 34%), radial-gradient(circle at bottom right, rgba(15, 118, 110, 0.14), transparent 30%)',
      },
    },
  },
  plugins: [],
};
