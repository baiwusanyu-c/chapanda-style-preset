export const genTreeSelectToken  = (colors: Record<string, string>) => {
  return {
    "TreeSelect": {
      'colorBorder': colors['cbd-gray-3'],
      'colorTextDisabled': colors['cbd-gray-4'],
      'colorBgContainerDisabled': colors['cbd-gray-2'],
      'colorText': colors['cbd-gray-7'],
      'borderRadius': 2,
      'borderRadiusLG': 2,
      'borderRadiusSM': 2,
    }
  }
}
