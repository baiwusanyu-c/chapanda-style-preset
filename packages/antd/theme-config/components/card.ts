export const genCardToken  = (colors: Record<string, string>) => {
  return {
    "Card": {
      "colorText": colors['cbd-gray-7'],
      "colorBgContainer": colors['cbd-gray-1'],
      "headerBg": colors['cbd-gray-1'],
      'colorBorderSecondary': colors['cbd-gray-3'],
    }
  }
}
