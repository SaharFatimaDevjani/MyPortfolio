import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repo from /MyPortfolio/, not the domain root, so the build
// needs that base path — but Vercel (and local dev) serve from root, so it's opt-in via env.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/MyPortfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
