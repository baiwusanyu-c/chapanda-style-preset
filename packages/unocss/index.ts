
import { genThemeColors } from './colors'
import type { Theme } from "@unocss/preset-uno";
import type { Rule, Preset } from "unocss";
import { chaPandaPresetUnoRules } from './rules'

export * from './colors'
export * from './rules'

export function presetChapandaUno<T extends object = Theme>(){
  const { colors: themeColors } = genThemeColors()
  return {
    theme: {
      colors: {
        ...themeColors
      }
    },
    rules: [
      ...chaPandaPresetUnoRules(themeColors) as Rule<T>[]
    ]
  } as Preset<Theme>
}

