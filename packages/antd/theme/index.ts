import { genToken } from "./token";
import { genThemeColors } from "@chapanda/style-preset-base";


export function genAntdTheme(){
  const { colors } = genThemeColors()
  return {
    token: genToken(colors)
  }
}
