import { extend } from 'baiwusanyu-utils'
import { defaultThemeColors } from './colors'
const COLOR_PREFIX = 'cbd'
/**
 * 生成主题颜色变量
 * @param themeColors 主题色对象
 * @param mix 是否集成默认颜色
 * @param prefix 变量前缀
 */
export const genThemeColors = (
  themeColors = defaultThemeColors,
  mix = false,
  prefix = COLOR_PREFIX,
) => {
  const resolveThemeColors = mix ? extend(themeColors, defaultThemeColors): themeColors
  let preflights = '';
  const colorsVariable: Record<string, any> = {}
  const colors : Record<string, string> = {}
  Object.keys(resolveThemeColors).forEach((k) => {
    const key = k as keyof typeof resolveThemeColors
    if (typeof resolveThemeColors[key] === 'string') {
      const resolveKey = `--${prefix}-${k}`
      const resolveValue = resolveThemeColors[key]
      colorsVariable[resolveKey] = resolveValue
      colors[`${prefix}-${k}`] = `var(${resolveKey})`
      preflights = preflights + '\n' + `${resolveKey}:${resolveValue};`;
    } else {
      Object.keys(resolveThemeColors[key]).forEach((v) => {
        const keyV = v as keyof typeof resolveThemeColors[typeof key]
        const resolveKey = `--${prefix}-${k}-${v}`
        const resolveValue = resolveThemeColors[key][keyV]
        colorsVariable[resolveKey] = resolveValue
        colors[`${prefix}-${k}-${v}`] = `var(${resolveKey})`
        preflights = preflights + '\n' + `${resolveKey}:${resolveValue};`;

      });
    }
  });
  return {
    preflights,
    colorsVariable,
    colors,
  };
};

export * from './colors'
