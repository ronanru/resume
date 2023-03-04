const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Cascadia Code',
          'Fira Code',
          'Fira Mono',
          'Ubuntu Mono',
          'ui-monospace',
          'Courier New',
          'monospace',
        ],
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
