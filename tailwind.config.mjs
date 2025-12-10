/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'IBM Plex Sans', 'Work Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    }
  },
  plugins: []
};
