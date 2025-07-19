import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/NexonMACS/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        fallback: 'index.html', // add this
      },
    },
  },
})
