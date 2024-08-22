export const genRadioToken  = (colors: Record<string, string>) => {
  return {
    "Radio": {
      'buttonBg': colors['cbd-gray-2'],
      'buttonCheckedBg': colors['cbd-gray-2'],
      "buttonColor": colors['cbd-gray-6'],
      'buttonCheckedBgDisabled': colors['cbd-gray-2'],
      'buttonCheckedColorDisabled': colors['cbd-gray-4'],
      'colorTextDisabled': colors['cbd-gray-4'],
      "borderRadius": 2,
      "borderRadiusLG": 2,
      "borderRadiusSM": 2
    }
  }
}
