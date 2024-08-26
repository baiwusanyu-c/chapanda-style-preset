export const genTableToken  = (colors: Record<string, string>) => {
  return {
    "Table": {
      'borderColor': colors['cbd-gray-3'],
      'headerBg': colors['cbd-gray-2'],
      'headerColor': colors['cbd-gray-7'],
      'colorText': colors['cbd-gray-7'],
      'headerFilterHoverBg': colors['cbd-gray-4'],
      'headerSortActiveBg': colors['cbd-gray-1'],
      'headerSortHoverBg': colors['cbd-gray-1'],
      'headerSplitColor': colors['cbd-gray-3'],
      'rowHoverBg': colors['cbd-gray-1'],
    }
  }
}
