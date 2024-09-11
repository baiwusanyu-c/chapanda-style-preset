
import { genAvatarToken } from "./avatar";
import { genCalendarToken } from "./calendar";
import { genCardToken } from "./card";
import { genCollapseToken } from "./collapse";
import { genDescriptionsToken } from "./descriptions";
import { genEmptyToken } from "./empty";
import { genListToken } from "./list";
import { genPopoverToken } from "./popover";
import { genStatisticToken } from "./statistic";
import { genTableToken } from "./table";
import { genTabsToken } from "./tabs";
import { genTagToken } from "./tag";
import { genTimelineToken } from "./timeline";
import { genTreeToken } from "./tree";
import { genCascaderToken } from "./cascader";
import { genCheckboxToken } from "./checkbox";
import { genDatePickerToken } from "./date-picker";
import { genFormToken } from "./form";
import { genInputToken } from "./input";
import { genInputNumberToken } from "./input-number";
import { genMentionsToken } from "./mentions";
import { genRadioToken } from "./radio";
import { genSelectToken } from "./select";
import { genSliderToken } from "./slider";
import { genSwitchToken } from "./switch";
import { genTransferToken } from "./transfer";
import { genTreeSelectToken } from "./tree-select";
import { genUploadToken } from "./upload";
import { genAlertToken } from "./alert";
import { genMessageToken } from "./message";
import { genNotificationToken } from "./notification";
import { genPopconfirmToken } from "./popconfirm";
import { genProgressToken } from "./progress";
import { genModalToken } from "./modal";
import { genBreadcrumbToken } from "./breadcrumb";
import { genMenuToken } from "./menu";
import { genPaginationToken } from "./pagination";
import { genStepsToken } from "./steps";

export { genAvatarToken } from "./avatar";
export { genCalendarToken } from "./calendar";
export { genCardToken } from "./card";
export { genCollapseToken } from "./collapse";
export { genDescriptionsToken } from "./descriptions";
export { genEmptyToken } from "./empty";
export { genListToken } from "./list";
export { genPopoverToken } from "./popover";
export { genStatisticToken } from "./statistic";
export { genTableToken } from "./table";
export { genTabsToken } from "./tabs";
export { genTagToken } from "./tag";
export { genTimelineToken } from "./timeline";
export { genTreeToken } from "./tree";
export { genCascaderToken } from "./cascader";
export { genCheckboxToken } from "./checkbox";
export { genDatePickerToken } from "./date-picker";
export { genFormToken } from "./form";
export { genInputToken } from "./input";
export { genInputNumberToken } from "./input-number";
export { genMentionsToken } from "./mentions";
export { genRadioToken } from "./radio";
export { genSelectToken } from "./select";
export { genSliderToken } from "./slider";
export { genSwitchToken } from "./switch";
export { genTransferToken } from "./transfer";
export { genTreeSelectToken } from "./tree-select";
export { genUploadToken } from "./upload";
export { genAlertToken } from "./alert";
export { genMessageToken } from "./message";
export { genNotificationToken } from "./notification";
export { genPopconfirmToken } from "./popconfirm";
export { genProgressToken } from "./progress";
export { genModalToken } from "./modal";
export { genBreadcrumbToken } from "./breadcrumb";
export { genMenuToken } from "./menu";
export { genPaginationToken } from "./pagination";
export { genStepsToken } from "./steps";

export function genComponentToken(colors: Record<string, string>){
  return {
    ...genAvatarToken(colors),
    ...genCalendarToken(colors),
    ...genCardToken(colors),
    ...genCollapseToken(colors),
    ...genDescriptionsToken(colors),
    ...genEmptyToken(colors),
    ...genListToken(colors),
    ...genPopoverToken(colors),
    ...genStatisticToken(colors),
    ...genTableToken(colors),
    ...genTabsToken(colors),
    ...genTagToken(colors),
    ...genTimelineToken(colors),
    ...genTreeToken(colors),
    ...genCascaderToken(colors),
    ...genCheckboxToken(colors),
    ...genDatePickerToken(colors),
    ...genFormToken(colors),
    ...genInputToken(colors),
    ...genInputNumberToken(colors),
    ...genMentionsToken(colors),
    ...genRadioToken(colors),
    ...genSelectToken(colors),
    ...genSliderToken(colors),
    ...genSwitchToken(colors),
    ...genTransferToken(colors),
    ...genTreeSelectToken(colors),
    ...genUploadToken(colors),
    ...genAlertToken(colors),
    ...genMessageToken(colors),
    ...genNotificationToken(colors),
    ...genPopconfirmToken(colors),
    ...genProgressToken(colors),
    ...genModalToken(colors),
    ...genBreadcrumbToken(colors),
    ...genMenuToken(colors),
    ...genPaginationToken(colors),
    ...genStepsToken(colors),
  }
}
