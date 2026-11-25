import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ahavacy.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
