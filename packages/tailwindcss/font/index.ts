

export const chaPandaFontShortcut = () => {
  const basicFontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"`
  const pfFontFamily = `PingFang-SC, ${basicFontFamily}`
  const hmFontFamily = `'HarmonyOS Sans SC', ${basicFontFamily}`

  const regular = [24,20,18,17,16,15,14,12]
  const medium = [24,20,18,17,16,15]
  const shortcut: Record<string, Record<string, string>> = {}
  regular.forEach(p => {
    shortcut[`.pf-regular-${p}`] = {
      'font-weight': '400',
      'font-size': `${p}px`,
      'font-family': pfFontFamily
    }
    shortcut[`.hm-regular-${p}`] = {
      'font-weight': '400',
      'font-size': `${p}px`,
      'font-family': hmFontFamily
    }
  })

  medium.forEach(p => {
    shortcut[`.pf-medium-${p}`] = {
      'font-weight': '500',
      'font-size': `${p}px`,
      'font-family': pfFontFamily
    }
    shortcut[`.hm-medium-${p}`] = {
      'font-weight': '500',
      'font-size': `${p}px`,
      'font-family': hmFontFamily
    }
  })
  shortcut['.font-pingfang'] = {
    'font-family': pfFontFamily
  }
  shortcut['.font-harmony'] = {
    'font-family': hmFontFamily
  }
  return shortcut
}
