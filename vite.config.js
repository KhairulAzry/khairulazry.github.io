import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // if got CNAME or deploying to https://<USERNAME>.github.io/
  base: '/',
  // if deploying to https://<USERNAME>.github.io/<REPO>/
  // base: '/<REPO>/',
})
