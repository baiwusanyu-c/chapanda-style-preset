import type { PluginAPI } from "tailwindcss/types/config";

export function chaPandaPresetShortcut(
  customShortcut?: Record<string, string>,
){
  return (context: PluginAPI) => {
    context.addUtilities({
      ...customShortcut
    })
  }
}
