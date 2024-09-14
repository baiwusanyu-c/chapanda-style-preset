
import { presetChapandaUno } from '@chapanda/style-preset/unocss'
import { defineConfig } from 'unocss'
import { presetUno  } from 'unocss'

export default defineConfig(
 {
    presets: [
      presetUno(),
      presetChapandaUno(),
    ],
})
