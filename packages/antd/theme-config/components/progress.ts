export const genProgressToken  = (colors: Record<string, string>) => {
  return {
    "Progress": {
      'circleTextColor': colors['cbd-gray-7'],
      'colorText': colors['cbd-gray-7'],
      'remainingColor': colors['cbd-gray-2'],
    }
  }
}
