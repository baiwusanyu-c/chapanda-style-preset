/**
 * 生成主题色
 * 注释掉的使用 antd 算法自动生成
 * @param colors
 */
export const genToken = (colors: Record<string, string>) => {
  return  {
     // 品牌主题色
    "colorPrimary": colors['cbd-brand-5'],
    // 品牌主题色浅色背景
    "colorPrimaryBg": colors['cbd-brand-1'],
    // 品牌主题色主色浅色背景悬浮态
    // "colorPrimaryBgHover": colors['cbd-brand-2'],
    // 品牌主题色主色描边色
    // "colorPrimaryBorder": colors['cbd-brand-2'],
    // 品牌主题色主色描边色悬浮态
    // "colorPrimaryBorderHover": colors['cbd-brand-2'],
    // 品牌主题色悬浮
    "colorPrimaryHover": colors['cbd-brand-3'],
    // 品牌主题色主色激活态
    // "colorPrimaryActive": colors['cbd-brand-2'],
    // 品牌主题色主色文本悬浮态
    // "colorPrimaryTextHover": colors['cbd-brand-2'],
    // 品牌主题色主主色文本
    "colorPrimaryText": colors['cbd-brand-4'],
    // 品牌主题色主色主色文本激活态
    "colorPrimaryTextActive": colors['cbd-brand-5'],
    // 成功色
    "colorSuccess": colors['cbd-green-3'],
    // 成功色浅色背景
    "colorSuccessBg": colors['cbd-green-1'],
    // 成功色浅色背景悬浮态
    // "colorSuccessBgHover": colors['cbd-green-2'],
    // 成功色描边色
    // "colorSuccessBorder": colors['cbd-green-2'],
    // 成功色描边色悬浮态
    // "colorSuccessBorderHover": colors['cbd-green-2'],
    // 成功色悬浮
    "colorSuccessHover": colors['cbd-green-2'],
    // 成功色激活态
    // "colorSuccessActive": colors['cbd-green-2'],
    // 成功色文本悬浮态
    // "colorSuccessTextHover": colors['cbd-green-2'],
    // 成功色文本
    "colorSuccessText": colors['cbd-green-3'],
    // 成功色文本激活态
    "colorSuccessTextActive": colors['cbd-green-4'],
    // 警戒色
    "colorWarning": colors['cbd-yellow-3'],
    // 警戒色浅色背景
    "colorWarningBg": colors['cbd-yellow-1'],
    // 警戒色浅色背景悬浮态
    // "colorWarningBgHover": colors['cbd-yellow-2'],
    // 警戒色描边色
    // "colorWarningBorder": colors['cbd-yellow-2'],
    // 警戒色描边色悬浮态
    // "colorWarningBorderHover": colors['cbd-yellow-2'],
    // 警戒色悬浮
    "colorWarningHover": colors['cbd-yellow-2'],
    // 警戒色激活态
    // "colorWarningActive": colors['cbd-yellow-2'],
    // 警戒色文本悬浮态
    // "colorWarningTextHover": colors['cbd-yellow-2'],
    // 警戒色文本
    "colorWarningText": colors['cbd-yellow-3'],
    // 警戒色文本激活态
    "colorWarningTextActive": colors['cbd-yellow-4'],
     // 错误色
    "colorError": colors['cbd-red-3'],
    // 错误色浅色背景
    "colorErrorBg": colors['cbd-red-1'],
    // 错误色浅色背景悬浮态
    // "colorErrorBgHover": colors['cbd-red-2'],
    // 错误色描边色
    // "colorErrorBorder": colors['cbd-red-2'],
    // 错误色描边色悬浮态
    // "colorErrorBorderHover": colors['cbd-red-2'],
    // 错误色悬浮
    "colorErrorHover": colors['cbd-red-2'],
    // 错误色激活态
    // "colorErrorActive": colors['cbd-red-2'],
    // 错误色文本悬浮态
    // "colorErrorTextHover": colors['cbd-red-2'],
    // 错误色文本
    "colorErrorText": colors['cbd-red-3'],
    // 错误色文本激活态
    "colorErrorTextActive": colors['cbd-red-4'],
    // 信息色 colorInfo 相关使用品牌主题色
    "colorInfo": colors['cbd-brand-5'],
    // 信息色的浅色背景颜色
    // "colorInfoBg": colors['cbd-brand-5'],
    // 信息色的浅色背景色悬浮态
    // "colorInfoBgHover": colors['cbd-brand-5'],
    // 信息色的描边色
    // "colorInfoBorder": colors['cbd-brand-5'],
    // 信息色的描边色悬浮态
    // "colorInfoBorderHover": colors['cbd-brand-5'],
    // 信息色的深色悬浮态
    // "colorInfoHover": colors['cbd-brand-5'],
    // 信息色的深色激活态
    // "colorInfoActive": colors['cbd-brand-5'],
    // 信息色的文本悬浮态
    // "colorInfoTextHover": colors['cbd-brand-5'],
    // 信息色的文本默认态
    // "colorInfoText": colors['cbd-brand-5'],
    // 信息色的文本激活态
    // "colorInfoTextActive": colors['cbd-brand-5'],
    // 链接色
    "colorLink": colors['cbd-brand-4'],
    // 超链接悬浮颜色
    "colorLinkHover": colors['cbd-brand-3'],
    // 超链接激活颜色
    "colorLinkActive": colors['cbd-brand-5'],
     // 中性色全局默认文字
    "colorTextBase":  colors['cbd-gray-7'],
    // 中性色全局默认背景
    "colorBgBase":  colors['cbd-white'],
    // 一级文本色
    "colorText": colors['cbd-gray-7'],
    // 二级文本色
    "colorTextSecondary": colors['cbd-gray-6'],
    // 三级文本色
    "colorTextTertiary": colors['cbd-gray-5'],
    // 四级文本色
    "colorTextQuaternary": colors['cbd-gray-4'],
    // 一级边框色
    "colorBorder": colors['cbd-gray-3'],
    // 二级边框色
    "colorBorderSecondary": colors['cbd-gray-2'],
    // 一级填充色
    // "colorFill":  '',
    // 二级填充色
    // "colorFillSecondary":  '',
    // 三级填充色
    // "colorFillTertiary": '',
    // 四级填充色
    // "colorFillQuaternary": '',
    // 组件容器背景色
    "colorBgContainer":  colors['cbd-white'],
    // 浮层容器背景色
    "colorBgElevated":  colors['cbd-gray-1'],
    // 布局背景色
    "colorBgLayout": colors['cbd-gray-2'],
    // 引起注意的背景色
    "colorBgSpotlight": colors['cbd-gray-7'],
    // 浮层的背景蒙层颜色
    // "colorBgMask": '',
    // 全局圆角
    "borderRadius": 2,
    "borderRadiusXs": 2,
    "borderRadiusSm": 2,
    "borderRadiusLg": 2,
    "wireframe": false
  }
}
