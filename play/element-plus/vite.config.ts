import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // TODO 写入文档
      '@chapanda/style-preset-base/theme/font': path.resolve(
        __dirname, 'node_modules/@chapanda/style-preset/theme/font'
      ),
      // '@chapanda/style-preset-base/theme/font': path.resolve(
      //   __dirname, 'node_modules/@chapanda/style-preset-base/theme/font'
      // ),
    },
  },

  // assetsInclude: [
  //   '/node_modules/@chapanda/style-preset-base/*.ttf',
  //   '/node_modules/@chapanda/style-preset-base/*.otf',
  //   '**/*.ttf',
  //   '**/*.otf'
  // ],
})
