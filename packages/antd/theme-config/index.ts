import { genToken } from "./token";
import { genComponentToken } from "./components";
import { genThemeColors } from "@chapanda/style-preset-base";

export { genToken } from "./token";
export { genComponentToken } from "./components";

export { genAvatarToken } from "./components";
export { genCalendarToken } from "./components";
export { genCardToken } from "./components";
export { genCollapseToken } from "./components";
export { genDescriptionsToken } from "./components";
export { genEmptyToken } from "./components";
export { genListToken } from "./components";
export { genPopoverToken } from "./components";
export { genStatisticToken } from "./components";
export { genTableToken } from "./components";
export { genTabsToken } from "./components";
export { genTagToken } from "./components";
export { genTimelineToken } from "./components";
export { genTreeToken } from "./components";
export { genCascaderToken } from "./components";
export { genCheckboxToken } from "./components";
export { genDatePickerToken } from "./components";
export { genFormToken } from "./components";
export { genInputToken } from "./components";
export { genInputNumberToken } from "./components";
export { genMentionsToken } from "./components";
export { genRadioToken } from "./components";
export { genSelectToken } from "./components";
export { genSliderToken } from "./components";
export { genSwitchToken } from "./components";
export { genTransferToken } from "./components";
export { genTreeSelectToken } from "./components";
export { genUploadToken } from "./components";
export { genAlertToken } from "./components";
export { genMessageToken } from "./components";
export { genNotificationToken } from "./components";
export { genPopconfirmToken } from "./components";
export { genProgressToken } from "./components";
export { genModalToken } from "./components";
export { genBreadcrumbToken } from "./components";
export { genMenuToken } from "./components";
export { genPaginationToken } from "./components";

export { genStepsToken } from "./components";
export function genAntdTheme(){
  const { colors } = genThemeColors()
  return {
    token: genToken(colors),
    components: genComponentToken(colors)
  }
}
