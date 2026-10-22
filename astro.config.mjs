import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const SITE_URL = 'https://www.tomasfigueroa.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/styleguide/') &&
        !page.includes('/api/'),
    }),
  ],
  image: {
    // Use Astro's built-in image optimization
    domains: [],
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Keep asset file names deterministic
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
