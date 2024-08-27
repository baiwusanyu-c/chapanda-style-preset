import type { ThemeConfig } from "antd";
import { mergeObjects } from '@chapanda/style-preset-utils'
import { genAntdTheme } from "./theme-config";

export { genButtonToken } from "./theme-config";
export { genAvatarToken } from "./theme-config";
export { genCardToken } from "./theme-config";
export { genCollapseToken } from "./theme-config";
export { genDescriptionsToken } from "./theme-config";
export { genEmptyToken } from "./theme-config";
export { genListToken } from "./theme-config";
export { genPopoverToken } from "./theme-config";
export { genStatisticToken } from "./theme-config";
export { genTableToken } from "./theme-config";
export { genTabsToken } from "./theme-config";
export { genTagToken } from "./theme-config";
export { genTimelineToken } from "./theme-config";
export { genCascaderToken } from "./theme-config";
export { genCheckboxToken } from "./theme-config";
export { genDatePickerToken } from "./theme-config";
export { genFormToken } from "./theme-config";
export { genInputToken } from "./theme-config";
export { genInputNumberToken } from "./theme-config";
export { genMentionsToken } from "./theme-config";
export { genSelectToken } from "./theme-config";
export { genSwitchToken } from "./theme-config";
export { genTransferToken } from "./theme-config";
export { genTreeSelectToken } from "./theme-config";
export { genUploadToken } from "./theme-config";
export { genAlertToken } from "./theme-config";
export { genMessageToken } from "./theme-config";
export { genNotificationToken } from "./theme-config";
export { genPopconfirmToken } from "./theme-config";
export { genProgressToken } from "./theme-config";
export { genBreadcrumbToken } from "./theme-config";
export { genMenuToken } from "./theme-config";
export { genCalendarToken } from "./theme-config";
export { genRadioToken } from "./theme-config";
export { genSliderToken } from "./theme-config";
export { genModalToken } from "./theme-config";
export { genPaginationToken } from "./theme-config";
export { genTreeToken } from "./theme-config";
export { genThemeColors } from '@chapanda/style-preset-base'
export function genChaPandaAntdTheme(theme: ThemeConfig = {}){
  return {
    ...mergeObjects<ThemeConfig>(genAntdTheme(), theme),
    cssVar: { key: '--cbd' }
  }
}

