import type {Rule} from "unocss";
import type {Theme} from "@unocss/preset-uno";


export const chaPandaFontRules = () => {
  const pfFontFamily = `PingFang-SC, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"`
  const regular = [24,20,18,17,16,15,14,12,11,10,9]
  const medium = [24,20,18,17,16,15]
  const rules:Rule<Theme>[] = []
  regular.forEach(p => {
    rules.push([
      `pf-regular-${p}`,
      {
        'font-weight': '400',
        'font-size': `${p}pt`,
        'font-family': pfFontFamily
      }
    ])
  })

  medium.forEach(p => {
    rules.push([
      `pf-medium-${p}`,
      {
        'font-weight': '500',
        'font-size': `${p}pt`,
        'font-family': pfFontFamily
      }
    ])
  })

  rules.push([
    `font-pingfang`,
    {
      'font-family': pfFontFamily
    }
  ])

  return rules
}
