import { extend } from 'baiwusanyu-utils'
import { defaultThemeColors } from './colors'
import { defaultThemeColorsDescription } from './description'
export { defaultThemeColors } from './colors'
export { defaultThemeColorsDescription } from './description'
const COLOR_PREFIX = 'cbd'
const CE_STYLE = 'cbd-custom'
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
  const resolveThemeColors = mix ? extend(defaultThemeColors, themeColors): themeColors
  let preflights = '';
  const colorsVariable: Record<string, any> = {}
  const colors : Record<string, string> = {}
  const colorsVariableImp : Record<string, string> = {}
  Object.keys(resolveThemeColors).forEach((k) => {
    const key = k as keyof typeof resolveThemeColors
    if (typeof resolveThemeColors[key] === 'string') {
      const resolveKey = `--${prefix}-${k}`
      const resolveValue = resolveThemeColors[key]
      colorsVariable[resolveKey] = resolveValue
      colors[`${prefix}-${k}`] = `${resolveValue}`
      colorsVariableImp[`${prefix}-${k}`] = `var(${resolveKey})`;
      preflights = preflights + '\n' + `${resolveKey}:${resolveValue};`;
    } else {
      Object.keys(resolveThemeColors[key]).forEach((v) => {
        const keyV = v as keyof typeof resolveThemeColors[typeof key]
        const resolveKey = `--${prefix}-${k}-${v}`
        const resolveValue = resolveThemeColors[key][keyV]
        colorsVariable[resolveKey] = resolveValue
        colors[`${prefix}-${k}-${v}`] = `${resolveValue}`
        colorsVariableImp[`${prefix}-${k}-${v}`] = `var(${resolveKey})`;
        preflights = preflights + '\n' + `${resolveKey}:${resolveValue};`;

      });
    }
  });

  const colorsDescription: Record<string, any> = {}
  Object.keys(defaultThemeColorsDescription).forEach((k) => {
    const key = k as keyof typeof defaultThemeColorsDescription
    if (typeof defaultThemeColorsDescription[key] === 'string') {
      const resolveKey = `--${prefix}-${k}`
      colorsDescription[resolveKey] = defaultThemeColorsDescription[key]

    } else {
      Object.keys(defaultThemeColorsDescription[key]).forEach((v) => {
        const keyV = v as keyof typeof defaultThemeColorsDescription[typeof key]
        const resolveKey = `--${prefix}-${k}-${v}`
        colorsDescription[resolveKey] = defaultThemeColorsDescription[key][keyV]
      });
    }
  });

  return {
    preflights,
    colorsVariable,
    colorsDescription,
    colorsVariableImp,
    colors,
  };
};

/**
 *
 * @param themeColors - 主题颜色变量对象
 * @param ceStyle @Options - 自定义生成的 style 标签属性值， 默认值是cbd-custom
 */
export const mountThemeColors = (
  themeColors = defaultThemeColors,
  ceStyle = CE_STYLE,
) => {
  const el = document.querySelector(`[data-cbd-style="${ceStyle}"]`) as HTMLStyleElement
  const content = `
      :root {  ${Object.keys(themeColors).map(key => `--${key}:${themeColors[key]}`).join(';')} };
    `
  if(el){
    el.textContent = content
  } else {
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-cbd-style', ceStyle);
    styleEl.setAttribute('type', 'text/css');
    styleEl.textContent = content
    document.head.appendChild(styleEl);
  }
}

export * from './colors'
export type {
  ThemeColors
} from './colors'
