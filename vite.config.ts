import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = process.env.GITHUB_PAGES === 'true' ? '/rack-label-ocr-lite/' : '/';

export default defineConfig({
  plugins: [react()],
  base: githubPagesBase,
});
