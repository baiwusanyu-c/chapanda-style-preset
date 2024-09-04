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
    alias: {},
  },
})
