import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/shrimpMap/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// export default defineConfig(({ command, mode }) => {
//   return {
//     base: mode === 'development' ? '/' : '/shrimpMap/',
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url))
//       }
//     }
//   }
// })
