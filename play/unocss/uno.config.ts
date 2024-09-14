
import { presetChapandaUno } from '@chapanda/style-preset-unocss'
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'baiwu': '#00ffff'
    }
  },
  presets: [
    presetChapandaUno(),
  ]
})
