import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ ajuste para o GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/festivalamoda/', // <-- coloque exatamente o nome do seu repositório aqui!
})
