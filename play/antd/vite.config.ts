import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {

      // ✅
      // TODO 使用 @chapanda/style-preset 写入文档
      //  '@chapanda/style-preset-base/theme/font': path.resolve(
      //    __dirname, 'node_modules/@chapanda/style-preset/theme/font'
      //  ),
    },
  },
})
