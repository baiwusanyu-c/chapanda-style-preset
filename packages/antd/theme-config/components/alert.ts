export const genAlertToken  = (colors: Record<string, string>) => {
  return {
    "Alert": {
      'colorText': colors['cbd-gray-7'],
      'colorInfoBorder': colors['cbd-brand-7'],
      'colorInfoBg': colors['cbd-brand-7'],
      'colorErrorBorder': colors['cbd-red-1'],
      'colorErrorBg': colors['cbd-red-1'],
      'colorSuccessBorder': colors['cbd-green-17'],
      'colorSuccessBg': colors['cbd-green-1'],
      'colorWarningBorder': colors['cbd-yellow-1'],
      'colorWarningBg': colors['cbd-yellow-1']
    }
  }
}
