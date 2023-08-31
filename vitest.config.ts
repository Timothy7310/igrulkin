import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      all: true,
      enabled: true, // or 'istanbul'
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
    },
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      app: path.resolve(__dirname, 'src', 'app'),
      entities: path.resolve(__dirname, 'src', 'entities'),
      features: path.resolve(__dirname, 'src', 'features'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      shared: path.resolve(__dirname, 'src', 'shared'),
      widgets: path.resolve(__dirname, 'src', 'widgets'),
      components: path.resolve(__dirname, 'src', 'components'),
      helpers: path.resolve(__dirname, 'src', 'helpers'),
      mock: path.resolve(__dirname, 'src', 'mock'),
    },
  },
});
