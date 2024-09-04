import type {PluginAPI} from "tailwindcss/types/config";

export const chaPandaBorderShortcut = (context: PluginAPI) => {

  const basic = {
    'border-width': '1px',
    'border-style': 'solid',
  }
  return {
    '.gen-border-style': {
      'border-style': 'solid',
      'border-color': context.theme('colors.cbd-gray-3'),
    },
    '.gen-border-warning': {
      'border-style': 'solid',
      'border-color': context.theme('colors.cbd-yellow-3'),
    },
    '.gen-border-error': {
      'border-style': 'solid',
      'border-color': context.theme('colors.cbd-red-3'),
    },
    '.gen-border-success': {
      'border-style': 'solid',
      'border-color': context.theme('colors.cbd-green-3'),
    },

    '.border-basic': {
      ...basic,
      'border-color': context.theme('colors.cbd-gray-3'),
    },
    '.border-warning': {
      ...basic,
      'border-color': context.theme('colors.cbd-yellow-3'),
    },
    '.border-error': {
      ...basic,
      'border-color': context.theme('colors.cbd-red-3'),
    },
    '.border-success': {
      ...basic,
      'border-color': context.theme('colors.cbd-green-3'),
    },
  } as Record<string, any>;
}
