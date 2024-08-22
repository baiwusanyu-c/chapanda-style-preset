export const genSelectToken  = (colors: Record<string, string>) => {
  return {
    "Select": {
      'borderRadius': 2,
      'borderRadiusLG': 2,
      'borderRadiusSM': 2,
      'optionSelectedColor': colors['cbd-gray-7'],
      'colorTextDisabled': colors['cbd-gray-4'],
      'colorText': colors['cbd-gray-7'],
      'colorBgContainerDisabled': colors['cbd-gray-2'],
      'colorBorder': colors['cbd-gray-3'],
    }
  }
}
