export const genUploadToken  = (colors: Record<string, string>) => {
  return {
    "Upload": {
      'colorBorder': colors['cbd-gray-3'],
      'colorTextDisabled': colors['cbd-gray-4'],
      'colorText': colors['cbd-gray-7'],
    }
  }
}
