import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { genThemeColors } from './colors'
import { chaPandaPresetTailWindShortcut } from './shortcut'

export * from './colors'
export * from './shortcut'

export type ChaPandaTailwindOptions = {
  shortcut?: Record<string, string>
}
export const chaPandaTailwindConfig = (
  userConfig: Config,
  options: ChaPandaTailwindOptions = {}
) => {
  const { colors: themeColors } = genThemeColors()
  // 载入预设的颜色变量
  if(userConfig.theme && userConfig.theme.colors){
    const userColors = userConfig.theme!.colors!
    const isFn = typeof userConfig.theme!.colors === 'function'
    userConfig.theme.colors = (ctx) => {
      return {
        ...themeColors,
        ...(isFn ? (userColors as Function)(ctx) : userColors),
      }
    }
  } else{
    userConfig.theme!.colors = ({ colors }) => {
      return {
        ...themeColors,
        ...colors
      }
    }
  }
  // 载入预设的快捷短语
  if(userConfig.plugins && Array.isArray(userConfig.plugins)){
    userConfig.plugins.push(chaPandaPresetTailWindShortcut(options.shortcut))
  } else if(!userConfig.plugins ){
    userConfig.plugins = [
      plugin(chaPandaPresetTailWindShortcut(options.shortcut))
    ]
  }
  return userConfig
}
