import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://ecs-website-5p2m.onrender.com',
        secure: false,
      }
    },
  },
  plugins: [react()],
})
