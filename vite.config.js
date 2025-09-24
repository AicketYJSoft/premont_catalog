import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/premont_catalog/', // ← 사용자/조직 페이지면 '/' 로 설정
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})
