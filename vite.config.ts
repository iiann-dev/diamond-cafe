import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router/')) return 'vendor';
          if (id.includes('node_modules/motion/')) return 'motion';
          if (id.includes('node_modules/lenis/')) return 'lenis';
        },
      },
    },
    cssMinify: 'lightningcss',
  },
})
