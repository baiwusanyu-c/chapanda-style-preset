export const genTreeToken  = (colors: Record<string, string>) => {
  return {
    "Tree": {
      'colorText': colors['cbd-gray-7'],
      'colorTextDisabled': colors['cbd-gray-4'],
      'nodeHoverBg': colors['cbd-gray-1'],
      'nodeSelectedBg': colors['cbd-gray-2'],
    }
  }
}
