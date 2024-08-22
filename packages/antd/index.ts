import type { ThemeConfig } from "antd";
import { mergeObjects } from '@chapanda/style-preset-utils'
import { genAntdTheme } from "./theme";

export { genButtonToken } from "./theme";
export { genAvatarToken } from "./theme";
export { genCalendarToken } from "./theme";
export { genCardToken } from "./theme";
export { genCollapseToken } from "./theme";
export { genDescriptionsToken } from "./theme";
export { genEmptyToken } from "./theme";
export { genListToken } from "./theme";
export { genPopoverToken } from "./theme";
export { genStatisticToken } from "./theme";
export { genTableToken } from "./theme";
export { genTabsToken } from "./theme";
export { genTagToken } from "./theme";
export { genTimelineToken } from "./theme";
export { genTreeToken } from "./theme";
export { genCascaderToken } from "./theme";
export { genCheckboxToken } from "./theme";
export { genDatePickerToken } from "./theme";
export { genFormToken } from "./theme";
export { genInputToken } from "./theme";
export { genInputNumberToken } from "./theme";
export { genMentionsToken } from "./theme";
export { genRadioToken } from "./theme";
export { genSelectToken } from "./theme";
export { genSliderToken } from "./theme";
export { genSwitchToken } from "./theme";
export { genTransferToken } from "./theme";
export { genTreeSelectToken } from "./theme";
export { genUploadToken } from "./theme";
export { genAlertToken } from "./theme";
export { genMessageToken } from "./theme";
export { genNotificationToken } from "./theme";
export { genPopconfirmToken } from "./theme";
export { genProgressToken } from "./theme";
export { genModalToken } from "./theme";
export { genBreadcrumbToken } from "./theme";
export { genMenuToken } from "./theme";
export { genPaginationToken } from "./theme";

export function genChaPandaAntdTheme(theme: ThemeConfig = {}){
  return mergeObjects<ThemeConfig>(genAntdTheme(), theme)
}

