import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import CnjmPostcssPxToViewport from 'cnjm-postcss-px-to-viewport'
import autoprefixer from 'autoprefixer'
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7'],
        }),
        CnjmPostcssPxToViewport({
          viewportWidth: 375,
          minPixelValue: 1,
          unitPrecision: 2,
          // exclude: [/regional-daily\.vue/],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@chapanda/style-preset-base/theme/font': path.resolve(
        __dirname, 'node_modules/@chapanda/style-preset-base/theme/font'
      ),
    },
  },
});
