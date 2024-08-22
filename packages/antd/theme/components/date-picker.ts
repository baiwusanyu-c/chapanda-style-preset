export const genDatePickerToken  = (colors: Record<string, string>) => {
  return {
    "DatePicker": {
      'activeBg': colors['cbd-gray-3'],
      'cellHoverBg': colors['cbd-gray-3'],
      'colorTextDisabled': colors['cbd-gray-4'],
      'colorText': colors['cbd-gray-7'],
      'borderRadiusSM': 50,
    }
  }
}
