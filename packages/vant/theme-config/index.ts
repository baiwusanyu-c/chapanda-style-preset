import { genThemeColors } from "@chapanda/style-preset-base";
import { genComponentToken } from "./components";
import { genToken } from "./token";

export { genButtonToken } from "./components/button";
export  { genToken } from './token'
export function genVantTheme(){
  const { colors } = genThemeColors()
  return {
    ...genToken(),
    ...genComponentToken(colors)
  }
}
