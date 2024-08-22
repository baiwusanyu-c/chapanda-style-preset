export const genTransferToken  = (colors: Record<string, string>) => {
  return {
    "Transfer": {
      'colorBgContainerDisabled': colors['cbd-gray-2'],
      'colorBorder': colors['cbd-gray-3'],
      'colorText': colors['cbd-gray-7'],
      'colorTextDisabled': colors['cbd-gray-4'],
    }
  }
}
