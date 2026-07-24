import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures relative asset paths, making it work in subfolders (like GitHub Pages) and local previews
  plugins: [react(), tailwindcss()],
})
