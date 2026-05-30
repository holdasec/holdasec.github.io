import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// 仓库名 holeasec.github.io + 账号 holdasec → 项目站点路径 /holeasec.github.io/
// 若改用仓库 holdasec.github.io 则可设 base: '/' 并访问 https://holdasec.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/holeasec.github.io/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
