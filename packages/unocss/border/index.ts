
export const chaPandaBorderRules = (
  colors: Record<string, string>
) => {

  const basic = {
    'border-width': '1px',
    'border-style': 'solid',
  }
  return {
    'gen-border-basic': {
      'border-style': 'solid',
      'border-color': colors["cbd-gray-3"]
    },
    'gen-border-warning': {
      'border-style': 'solid',
      'border-color': colors["cbd-yellow-3"]
    },
    'gen-border-error': {
      'border-style': 'solid',
      'border-color': colors["cbd-red-3"]
    },
    'gen-border-success': {
      'border-style': 'solid',
      'border-color': colors["cbd-green-3"]
    },

    'border-basic': {
      ...basic,
      'border-color': colors["cbd-gray-3"]
    },
    'border-warning': {
      ...basic,
      'border-color': colors["cbd-yellow-3"]
    },
    'border-error': {
      ...basic,
      'border-color': colors["cbd-red-3"]
    },
    'border-success': {
      ...basic,
      'border-color': colors["cbd-green-3"]
    },
  } as Record<string, any>;
}