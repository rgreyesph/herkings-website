import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    include: [
      '@aws-amplify/api/rest',
      '@aws-amplify/auth',
      '@aws-amplify/ui-react'
    ],
  },
})