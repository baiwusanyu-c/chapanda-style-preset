export const genDatePickerToken  = (colors: Record<string, string>) => {
  return {
    "DatePicker": {
      'cellHoverBg': colors['cbd-gray-3'],
      'borderRadiusSM': 50,
      'colorTextDisabled': colors['cbd-gray-4'],
      'activeBg': colors['cbd-gray-2'],
      'colorText': colors['cbd-gray-7'],
    }
  }
}
