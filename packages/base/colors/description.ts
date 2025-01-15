import {ThemeColors} from "./colors";

const yellow = {
  '1': '基础黄 1',
  '2': '基础黄 2',
  '3': '基础黄 3/警告色',
  '4': '基础黄 4',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '不在设计规范中但UI使用',
  '6': '不在设计规范中但UI使用',
  '7': '不在设计规范中但UI使用',
}

const red = {
  '1': '基础红 1',
  '2': '基础红 2',
  '3': '基础红 3/错误色',
  '4': '基础红 4',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '不在设计规范中但UI使用',
  '6': '不在设计规范中但UI使用',
}

const green = {
  '1': '基础绿 1',
  '2': '基础绿 2',
  '3': '基础绿 3/成功色',
  '4': '基础绿 4',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '不在设计规范中但UI使用',
  '6': '不在设计规范中但UI使用',
  '7': '不在设计规范中但UI使用',
  '8': '不在设计规范中但UI使用',
  '9': '不在设计规范中但UI使用',
  '10': '不在设计规范中但UI使用',
}

const mint = {
  '1': '基础青 1',
  '2': '基础青 2',
  '3': '基础青 3',
  '4': '基础青 4',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '不在设计规范中但UI使用',
}

const purple = {
  '1': '基础紫 1',
  '2': '基础紫 2',
  '3': '基础紫 3',
  '4': '基础紫 4',
}

const gray = {
  // 浅色背景
  '1': '浅色背景',
  // 深色背景/浅色分割线、边框
  '2': '深色背景/浅色分割线、边框',
  // 深色色分割线、边框
  '3': '深色色分割线、边框',
  // 置灰/引导信息
  '4': '置灰/引导信息',
  // 次要信息/辅助说明
  '5': '次要信息/辅助说明',
  // 次强调信息
  '6': '次强调信息',
  // 强调信息、基础的文字颜色
  '7': '强调信息、基础的文字颜色',
  // 以下为不在设计规范中但UI使用的颜色
  '8': '不在设计规范中但UI使用',
  '9': '不在设计规范中但UI使用',
  '10': '不在设计规范中但UI使用',
  '11': '不在设计规范中但UI使用',
  '12': '不在设计规范中但UI使用',
  '13': '不在设计规范中但UI使用',
  '14': '不在设计规范中但UI使用',
  '15': '不在设计规范中但UI使用',
  '16': '不在设计规范中但UI使用',
  '17': '不在设计规范中但UI使用',
  '18': '不在设计规范中但UI使用',
  '19': '不在设计规范中但UI使用',
  '20': '不在设计规范中但UI使用',
  '21': '不在设计规范中但UI使用',
  '22': '不在设计规范中但UI使用',
  '23': '不在设计规范中但UI使用',
  '24': '不在设计规范中但UI使用',
  '25': '不在设计规范中但UI使用',
  '26': '不在设计规范中但UI使用',
  '27': '不在设计规范中但UI使用',
  '28': '不在设计规范中但UI使用',
  '29': '不在设计规范中但UI使用',
  '30': '不在设计规范中但UI使用',
  '31': '不在设计规范中但UI使用',
  '32': '不在设计规范中但UI使用',
  '33': '不在设计规范中但UI使用',
  '34': '不在设计规范中但UI使用',
  '35': '不在设计规范中但UI使用',
  '36': '不在设计规范中但UI使用',
  '37': '不在设计规范中但UI使用',
  '38': '不在设计规范中但UI使用',
  '39': '不在设计规范中但UI使用',
  '40': '不在设计规范中但UI使用',
  '41': '不在设计规范中但UI使用',
  '42': '不在设计规范中但UI使用',
  '43': '不在设计规范中但UI使用',
  '44': '不在设计规范中但UI使用',
  '45': '不在设计规范中但UI使用',
  '46': '不在设计规范中但UI使用',
  '47': '不在设计规范中但UI使用',
  '48': '不在设计规范中但UI使用',
  '49': '不在设计规范中但UI使用',
  '50': '不在设计规范中但UI使用',
  '51': '不在设计规范中但UI使用',
  '52': '不在设计规范中但UI使用',
  '53': '不在设计规范中但UI使用',
  '54': '不在设计规范中但UI使用',
  '55': '不在设计规范中但UI使用',
  '56': '不在设计规范中但UI使用',
  '57': '不在设计规范中但UI使用',
  '58': '不在设计规范中但UI使用',
  '59': '不在设计规范中但UI使用',
  '60': '不在设计规范中但UI使用',
}

const brand = {
  // 浅色背景
  '1': '浅色背景',
  // 特殊场景
  '2': '特殊场景',
  // 填充/悬浮
  '3': '填充/悬浮',
  // 填充/常规
  '4': '填充/常规',
  // 品牌色/字体/点击
  '5': '品牌色/字体/点击变换',
  // 深色填充/字体
  '6': '深色填充/字体',
  // 以下为不在设计规范中但UI使用的颜色
  '7': '不在设计规范中但UI使用',
  '8': '不在设计规范中但UI使用',
  '9': '不在设计规范中但UI使用',
  '10': '不在设计规范中但UI使用',
  '11': '不在设计规范中但UI使用',
  '12': '不在设计规范中但UI使用',
  '13': '不在设计规范中但UI使用',
  '14': '不在设计规范中但UI使用',
  '15': '不在设计规范中但UI使用',
  '16': '不在设计规范中但UI使用',
  '17': '不在设计规范中但UI使用',
  '18': '不在设计规范中但UI使用',
  '19': '不在设计规范中但UI使用',
  '20': '不在设计规范中但UI使用',
  '21': '不在设计规范中但UI使用',
}

export const defaultThemeColorsDescription: ThemeColors = {
  transparent: '透明色',
  black: '默认黑',
  white: '默认白',
  yellow,
  red,
  green,
  mint,
  purple,
  gray,
  brand,
}
