import type {Rule} from "unocss";
import type {Theme} from "@unocss/preset-uno";


export const chaPandaFontRules = () => {
  const basicFontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"`
  const pfFontFamily = `PingFang-SC, ${basicFontFamily}`
  const hmFontFamily = `'HarmonyOS Sans SC', ${basicFontFamily}`
  const regular = [24,22,20,18,17,16,15,14,12]
  const medium = [24,22,20,18,17,16,15]
  const rules:Rule<Theme>[] = []
  regular.forEach(p => {
    rules.push([
      `pf-regular-${p}`,
      {
        'font-weight': '400',
        'font-size': `${p}px`,
        'line-height': p === 24 ? '1.4' : '',
        'font-family': pfFontFamily
      }
    ])

    rules.push([
      `hm-regular-${p}`,
      {
        'font-weight': '400',
        'line-height': p === 24 ? '1.4' : '',
        'font-size': `${p}px`,
        'font-family': hmFontFamily
      }
    ])
  })

  medium.forEach(p => {
    rules.push([
      `pf-medium-${p}`,
      {
        'font-weight': '500',
        'line-height': p === 24 ? '1.4' : '',
        'font-size': `${p}px`,
        'font-family': pfFontFamily
      }
    ])

    rules.push([
      `hm-medium-${p}`,
      {
        'font-weight': '500',
        'line-height': p === 24 ? '1.4' : '',
        'font-size': `${p}px`,
        'font-family': hmFontFamily
      }
    ])
  })

  rules.push([
    `font-pingfang`,
    {
      'font-family': pfFontFamily
    }
  ])

  rules.push([
    `font-harmony`,
    {
      'font-family': hmFontFamily
    }
  ])

  return rules
}
