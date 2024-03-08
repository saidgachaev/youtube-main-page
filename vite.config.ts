import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es6',
    lib: {
      entry: 'src/main.tsx',
      formats: ['cjs']
    }
  }
})
