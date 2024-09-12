import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

import { vitePresetDocs } from "@chapanda/style-preset-interactive";

export default defineConfig({
  plugins: [
    solid(),
    vitePresetDocs(),
  ],
  resolve: {
    alias: {},
  },
})
