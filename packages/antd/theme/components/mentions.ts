export const genMentionsToken  = (colors: Record<string, string>) => {
  return {
    "Mentions": {
      'hoverBg': colors['cbd-gray-2'],
      'activeBg': colors['cbd-gray-3'],
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
