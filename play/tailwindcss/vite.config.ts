import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from "path";

export default defineConfig({
  plugins: [
    solid()
  ],
  resolve: {
    alias: {
      // ✅
      // TODO 使用 @chapanda/style-preset-tailwind 写入文档
      '@chapanda/style-preset-base/theme/font': path.resolve(
        __dirname, 'node_modules/@chapanda/style-preset-tailwind/theme/font'
      ),



      // ✅
      // TODO 使用 @chapanda/style-preset 写入文档
      // '@chapanda/style-preset-base/theme/font': path.resolve(
      //   __dirname, 'node_modules/@chapanda/style-preset/theme/font'
      // ),

      // TODO 打包
    },
  },
})
