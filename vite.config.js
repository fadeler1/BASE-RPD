
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
    },
  },
  server: {
    port:8080,
  },
  base: 'RPD'
})
