import path from 'path'
import { defineConfig } from 'vite'
import symfonyPlugin from 'vite-plugin-symfony'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [symfonyPlugin(), tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: false, // Empêche Vite de changer de port
    host: '0.0.0.0', // IMPORTANT: Permet d'écouter sur toutes les interfaces
    watch: {
      usePolling: true,
    },
    hmr: {
      host: 'localhost',
    },
    open: false,
    https: false,
  },
  build: {
    outDir: './public/build', // Sortie des fichiers dans le dossier public de Symfony
    base: '/build/', // Cette ligne est importante pour servir à partir de la racine
  },
})
