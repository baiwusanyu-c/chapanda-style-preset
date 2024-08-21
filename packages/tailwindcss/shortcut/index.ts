import type { PluginAPI } from "tailwindcss/types/config";
import { chaPandaLayoutShortcut } from '../layout'
import { chaPandaFontShortcut } from '../font'
import { chaPandaBorderShortcut } from '../border'
export function chaPandaPresetTailWindShortcut(
  customShortcut: Record<string, string> = {},
){
  return (context: PluginAPI) => {
    context.addUtilities({
      ...chaPandaLayoutShortcut,
      ...chaPandaFontShortcut(),
      ...chaPandaBorderShortcut(context),
      ...customShortcut
    })
  }
}
