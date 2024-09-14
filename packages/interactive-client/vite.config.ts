import { defineConfig } from 'vite'
import path from "path";
import UnoCSS from 'unocss/vite'
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
  ],
  build:{
    rollupOptions: {
      output: {
        dir: path.resolve(__dirname, '../../dist/interactive-client'),
        name: 'interactive-client',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    minify: false
  }
})

// TODO: interactive-client css 字体走 cdn
// TODO: interactive 要打成 cjs
