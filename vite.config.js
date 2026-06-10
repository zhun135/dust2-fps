import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
    hmr: { overlay: false },
  },
  build: {
    outDir: 'dist',
  },
});
