import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configuraciones de seguridad para desarrollo
    host: 'localhost',
    strictPort: true,
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:5173'],
      credentials: false
    }
  },
  build: {
    // Configuraciones de seguridad para producción
    sourcemap: false, // No exponer source maps en producción
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})