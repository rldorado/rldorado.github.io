import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      devtools: true
    }),
    tailwind()
  ],
  site: 'https://rldorado.github.io'
});
