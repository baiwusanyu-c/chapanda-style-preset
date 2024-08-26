
export const genBreadcrumbToken  = (colors: Record<string, string>) => {
  return {
    "Breadcrumb": {
      'separatorColor': colors['cbd-gray-4'],
      'linkColor': colors['cbd-gray-6'],
      'itemColor': colors['cbd-gray-6'],
      'lastItemColor': colors['cbd-gray-7'],
      'colorText': colors['cbd-gray-7'],
    }
  }
}
