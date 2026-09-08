import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => chemins relatifs, compatible GitHub Pages quel que soit le nom du repo
export default defineConfig({
  base: './',
  plugins: [react()],
})
