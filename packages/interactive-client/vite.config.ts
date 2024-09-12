import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from "path";

export default defineConfig({
  plugins: [
    solid()
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
    }
  }
})
