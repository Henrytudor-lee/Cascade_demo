import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wasm from 'vite-plugin-wasm'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    wasm()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // 如果需要配置代码分割，请根据你的需求添加相应的配置
      }
    }
  },
  optimizeDeps: {
    include: ['file-loader'], // 如果你的项目中需要使用 file-loader，请将它添加到 optimizeDeps.include 数组中
    // exclude: ['a']
  },
  server: {
    fs: {
      strict: false // 如果你需要在浏览器中模拟 Node.js 中的 fs 模块，请将 strict 设置为 false
    }
  },
  esbuild: {
    target: 'es2020' // 如果你需要支持的浏览器或环境需要 ES2020，请设置 target 为 'es2020'
  }
})
