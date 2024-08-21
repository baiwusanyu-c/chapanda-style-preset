import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from 'unocss/vite'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      //
      // TODO 使用 @chapanda/style-preset-unocss 写入文档
     // '@chapanda/style-preset-base/theme/font': path.resolve(
     //   __dirname, 'node_modules/@chapanda/style-preset-unocss/theme/font'
     // ),



      //
      // TODO 使用 @chapanda/style-preset 写入文档
      '@chapanda/style-preset-base/theme/font': path.resolve(
        __dirname, 'node_modules/@chapanda/style-preset/theme/font'
      ),

      // TODO 打包
    },
  },
})
