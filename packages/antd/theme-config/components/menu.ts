
export const genMenuToken  = (colors: Record<string, string>) => {
  return {
    "Menu": {
      'itemColor': colors['cbd-gray-6'],
      'itemHoverBg': colors['cbd-gray-3'],
      'itemSelectedBg': colors['cbd-gray-2'],
      'itemDisabledColor': colors['cbd-gray-4'],
      'groupTitleColor': colors['cbd-gray-5'],
      'itemSelectedColor': colors['cbd-brand-5'],
      'horizontalItemSelectedColor': colors['cbd-brand-5'],
    }
  }
}
