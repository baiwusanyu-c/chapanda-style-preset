
import { genThemeColors } from './colors'
import type { Theme } from "@unocss/preset-uno";
import type {Rule, UserConfig, UserShortcuts} from "unocss";
import { chaPandaPresetUnoRules } from './rules'

export * from './colors'
export * from './rules'

export function chaPandaUnoConfig<T extends object = Theme>(
  userConfig: UserConfig<T>,
): UserConfig<T>{
  const { colors: themeColors } = genThemeColors()
  if(userConfig.theme){
    const theme = userConfig.theme as Theme
    if(theme.colors){
      const userColors = theme.colors
      theme.colors = {
        ...themeColors,
        ...userColors,
      }
    } else {
      theme.colors = themeColors
    }
    userConfig.theme = theme as T
  } else {
    userConfig.theme = {
      colors :themeColors
    } as T
  }

  // 载入预设的规则
  if(userConfig.rules){
    let rules = userConfig.rules as Rule<Theme>[]
    if(rules){
      rules = chaPandaPresetUnoRules(rules, themeColors)
    } else {
      rules = chaPandaPresetUnoRules([], themeColors)
    }
    userConfig.rules = rules as Rule<T>[]
  } else {
    userConfig.rules = chaPandaPresetUnoRules([], themeColors) as Rule<T>[]
  }

  return userConfig
}

