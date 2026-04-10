import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Transforms Vite-injected CSS <link> to non-blocking using media trick
function deferCssPlugin(): Plugin {
  return {
    name: 'defer-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        (_, href) =>
          `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'" /><noscript><link rel="stylesheet" href="${href}" /></noscript>`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), deferCssPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split react-dom alone — it's the largest chunk (4.4MB source)
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom';
          }
          // react core — tiny, loads fast
          if (id.includes('node_modules/react/') || id.includes('node_modules/scheduler')) {
            return 'react-core';
          }
          // router — only needed after react-dom renders
          if (id.includes('node_modules/react-router')) {
            return 'react-router';
          }
          if (id.includes('node_modules/react-hook-form') || id.includes('node_modules/@hookform') || id.includes('node_modules/zod')) {
            return 'form-vendor';
          }
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
