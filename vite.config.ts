import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://portfolio.driouich.me',
      // Remove 'routes' and let the plugin handle the single page
      // Alternatively, use a dynamic route generation if needed later
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});