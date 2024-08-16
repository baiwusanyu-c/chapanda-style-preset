import { extend } from 'baiwusanyu-utils'

const yellow = {
  '1': '#FFF7EB',
  '2': '#FFBB33',
  '3': '#FF9900',
  '4': '#EB8120',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#fef6c8',
  '6': '#f99784',
  '7': '#FABF00',
}

const red = {
  '1': '#FFF1F2',
  '2': '#FF808A',
  '3': '#FF5F66',
  '4': '#F53F3F',
  // 以下为不在设计规范中但UI使用的颜色
  '6': '#dc0407',
  '7': '#F12B43',
}

const green = {
  '1': '#F1F7EA',
  '2': '#95DB42',
  '3': '#72B22F',
  '4': '#529908',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#f3feee',
  '6': '#c5f89b',
  '7': '#06A561',
  '8': '#33D65F',
}

const mint = {
  '1': '#E9F7F9',
  '2': '#77D5D4',
  '3': '#14C7B8',
  '4': '#00A590',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#008489',
}

const purple = {
  '1': '#EFEBFF',
  '2': '#887DFD',
  '3': '#5348CE',
  '4': '#352BA5',
}

const gray = {
  // 浅色背景
  '1': '#F9FAFC',
  // 深色背景/浅色分割线、边框
  '2': '#F0F1F5',
  // 深色色分割线、边框
  '3': '#E5E6EB',
  // 置灰/引导信息
  '4': '#C9CDD4',
  // 次要信息/辅助说明
  '5': '#86909C',
  // 次强调信息
  '6': '#4E5969',
  // 强调信息
  '7': '#1D2129',
  // 以下为不在设计规范中但UI使用的颜色
  '8': '#2c3e50',
  '9': '#d0d0d0',
  '10': '#d3dce6',
  '11': '#99a9bf',
  '12': '#97a8be',
  '13': '#5a5e66',
  '14': '#2b2f3a',
  '15': '#676a6c',
  '16': '#707070',
  '17': '#484848',
  '18': '#bdc1c8',
  '19': '#D9E1EC',
  '20': '#1A1819',
  '22': '#131523',
  '23': '#5A607F',
  '24': '#888F9E',
  '25': '#535C6B',
  '26': '#969799',
  '27': '#ECF2FF',
  '28': '#1D2026',
  '29': '#586070',
  '30': '#8D97A8',
  '31': '#F5F8FC',
  '32': '#323233',
  '33': '#F5F5F5',
  '34': '#1c1c1e',
  '35': '#3a3a3c',
  '36': '#6C7294',
  '37': '#5C5C5C',
  '38': '#F5F6FA',
  '39': '#E2E2E2',
  '40': '#BBBDBF',
  '41': '#d9d9d9',
  '42': '#d4d4d4',
  '43': '#F2F4FD',
  '44': '#4f4f4f',
  '45': '#F7F8FC',
  '46': '#F7F8FA',
  '47': '#282F38',
  '48': '#F4F5F7',
  '49': '#8C94A3',
  '50': '#EDF0F7',
  '51': '#F8F8F8',
  '52': '#e1e8ee',
  '53': '#f3f4f6',
  '54': '#ebedf0',
  '55': '#EAEDF0',
  '56': '#7f8fa4',
}

const brand = {
  // 浅色背景
  '1': '#F2F5FD',
  // 特殊场景
  '2': '#ECF1FD',
  // 填充/悬浮
  '3': '#3775FC',
  // 填充/常规
  '4': '#105CFF',
  // 品牌色/字体/点击
  '5': '#0A4CDE',
  // 次强调信息
  '6': '#18284A',
  // 以下为不在设计规范中但UI使用的颜色
  '7': '#F7F9FF',
  '8': '#bcd1ff',
  '9': '#337ab7',
  '10': '#4662e6',
  '11': '#476DAB',
  '12': '#5a89cf',
  '13': '#CEDDFF',
  '14': '#94BFFF',
  '15': '#a9e6f8',
  '16': '#3f9fe9',
  '17': '#1a5da1',
  '18': '#1E5EFF',
}

export const defaultThemeColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  yellow,
  red,
  green,
  mint,
  purple,
  gray,
  brand,
}

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

// TODO: 能不能再 scss 中使用这个变量？
// TODO: tailwind 会把颜色编译死，不会挂载根节点上，因此和 scss 兼容
// TODO: unocss 会冲突吗
