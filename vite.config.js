import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      // This alias is a known fix for a compatibility issue between
      // AWS Amplify v6+ and the Vite bundler.
      './runtimeConfig': './runtimeConfig.browser',
    }
  }
})