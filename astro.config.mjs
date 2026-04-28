// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light-high-contrast',
    },
  }
});
