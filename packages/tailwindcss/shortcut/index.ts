import type { PluginAPI } from "tailwindcss/types/config";
import { chaPandaLayoutShortcut } from '../layout'
import { chaPandaBorderShortcut } from '../border'
export function chaPandaPresetShortcut(
  customShortcut: Record<string, string> = {},
){
  return (context: PluginAPI) => {
    context.addUtilities({
      ...chaPandaLayoutShortcut,
      ...chaPandaBorderShortcut(context),
      ...customShortcut
    })
  }
}
