import type { Preview } from '@storybook/react-vite';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'Enterprise',
      values: [
        { name: 'Enterprise', value: '#f4f7fb' },
        { name: 'Canvas', value: '#ffffff' },
        { name: 'Slate', value: '#0f172a' },
      ],
    },
  },
};

export default preview;
