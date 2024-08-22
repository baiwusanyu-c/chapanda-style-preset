import type { ThemeConfig } from "antd";
import { genAntdTheme } from "./theme";

export function genChaPandaAntdTheme(theme: ThemeConfig = {}){
  return {
    ...genAntdTheme(),
    ...theme
  }
}
