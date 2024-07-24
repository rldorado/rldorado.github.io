import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      devtools: true
    }),
    tailwind(),
    icon({
      sets: ['mdi']
    })
  ],
  site: 'https://rldorado.github.io'
});
