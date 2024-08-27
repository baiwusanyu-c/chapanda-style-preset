import type { ConfigProviderThemeVars  } from "vant";
import { mergeObjects } from '@chapanda/style-preset-utils'
import { genVantTheme } from "./theme-config";

export { genToken } from "./theme-config";
export { genVantTheme } from "./theme-config";
export { genThemeColors } from '@chapanda/style-preset-base'

export function genChaPandaVantTheme(theme: ConfigProviderThemeVars = {}){
  return {
    ...mergeObjects<ConfigProviderThemeVars>(genVantTheme(), theme)
  }
}

