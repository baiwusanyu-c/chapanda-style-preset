
export const genPaginationToken  = (colors: Record<string, string>) => {
  return {
    "Pagination": {
      'itemActiveBgDisabled': colors['cbd-gray-1'],
      'itemActiveColorDisabled': colors['cbd-gray-4'],
      'colorTextDisabled': colors['cbd-gray-4'],
      'colorText': colors['cbd-gray-6'],
      "borderRadius": 2,
      "borderRadiusLG": 2,
      "borderRadiusSM": 2
    }
  }
}
