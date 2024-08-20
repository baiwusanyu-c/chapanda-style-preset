import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { genThemeColors } from './colors'
import { chaPandaPresetShortcut } from './shortcut'

export * from './colors'
export * from './shortcut'

export const chaPandaTailwindConfig = (
  userConfig: Config
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
    userConfig.plugins.push(chaPandaPresetShortcut())
  } else if(!userConfig.plugins ){
    userConfig.plugins = [
      plugin(chaPandaPresetShortcut())
    ]
  }
  return userConfig
}
