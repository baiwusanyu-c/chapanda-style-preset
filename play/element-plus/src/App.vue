<template>
<!--  <p class="pf-regular-24">pf-regular-24 </p>
  <p class="pf-medium-24"> pf-medium-24 </p>
  <p class="pf-regular-20">pf-regular-20 </p>
  <p class="pf-medium-20"> pf-medium-20 </p>
  <p class="pf-regular-18">pf-regular-18 </p>
  <p class="pf-medium-18"> pf-medium-18 </p>
  <p class="pf-regular-17">pf-regular-17 </p>
  <p class="pf-medium-17"> pf-medium-17 </p>
  <p class="pf-regular-16">pf-regular-16 </p>
  <p class="pf-medium-16"> pf-medium-16 </p>
  <p class="pf-regular-15">pf-regular-15 </p>
  <p class="pf-medium-15"> pf-medium-15 </p>
  <p class="pf-regular-14">pf-regular-14 </p>
  <p class="pf-regular-12">pf-regular-12 </p>


  <p class="din">din 9999 </p>
  <p class="din-bold"> din-bold 7600</p>
  <p class="din-heavy">din-heavy 9999</p>
  <p class="din-heavy-lighter"> din-heavy-lighter 9999</p>-->
  <button @click="changeTheme">change theme color</button>
  <ButtonDemo/>
  <BreadcrumbDemo/>
  <PaginationDemo/>
  <DialogDemo/>
  <TransferDemo/>
  <MenuDemo/>
  <AvatarDemo/>
  <RadioDemo/>
  <RadioButtonDemo/>
  <CheckboxDemo/>
  <TableDemo/>
  <TagDemo/>
  <TabsDemo/>
  <DropdownDemo/>
  <InputDemo/>
  <SelectDemo/>
  <DatePickerDemo/>
  <InputNumberDemo/>
  <SelectV2Demo/>
  <CascaderDemo/>
  <DescriptionsDemo/>
  <FormDemo/>
  <TextDemo/>
  <DividerDemo/>
  <BadgeDemo/>
  <CalendarDemo/>
  <CardDemo/>
  <CollapseDemo/>
  <TimelineDemo/>
  <TreeDemo/>
  <AutoCompleteDemo/>
  <RateDemo/>
  <SwitchDemo/>
  <SliderDemo/>
  <TimepickerDemo/>
  <TreeSelectDemo/>
  <ProgressDemo/>
  <PopconfirmDemo/>
  <PageHeaderDemo/>
  <StepsDemo/>
  <AlertDemo/>
  <NotificationDemo/>
  <MessageDemo/>
  <p class="
      bg-cbd-brand-5 fcc border-success">
    Hello world! 7600
  </p>
  <p class="bg-baiwu fcc border-success">
    Hello world! 7600
  </p>
  <p class="pf-regular-24">pf-regular-24 </p>
  <p class="pf-medium-24"> pf-medium-24 </p>
  <p class="pf-regular-20">pf-regular-20 </p>
  <p class="pf-medium-20"> pf-medium-20 </p>
  <p class="pf-regular-18">pf-regular-18 </p>
  <p class="pf-medium-18"> pf-medium-18 </p>
  <p class="pf-regular-17">pf-regular-17 </p>
  <p class="pf-medium-17"> pf-medium-17 </p>
  <p class="pf-regular-16">pf-regular-16 </p>
  <p class="pf-medium-16"> pf-medium-16 </p>
  <p class="pf-regular-15">pf-regular-15 </p>
  <p class="pf-medium-15"> pf-medium-15 </p>

  <p class="font-din">din 9999 </p>
  <p class="font-din-bold"> din-bold 7600</p>
  <p class="font-din-heavy">din-heavy 9999</p>
  <p class="font-din-heavy-lighter"> din-heavy-lighter 9999</p>
</template>
<!--
<style scoped lang="scss">
@use '@chapanda/style-preset/theme/index' as cbd;
 .din {
   @include cbd.font-din(true);
   font-weight: 700;
 }
 .din-bold{
   @include cbd.font-din-bold();
   font-weight: 700;
 }
 .din-heavy{
   @include cbd.font-din-heavy(true)
 }
 .din-heavy-lighter{
   @include cbd.font-din-heavy-lighter()
 }

</style>-->
<script setup lang="ts">
import ButtonDemo from './components/button.vue'
import BreadcrumbDemo from './components/breadcrumb.vue'
import PaginationDemo from './components/pagination.vue'
import DialogDemo from './components/dialog.vue'
import TransferDemo from './components/transfer.vue'
import MenuDemo from './components/menu.vue'
import AvatarDemo from './components/avatar.vue'
import RadioDemo from './components/radio.vue'
import RadioButtonDemo from './components/radio-button.vue'
import CheckboxDemo from './components/checkbox.vue'
import TableDemo from './components/table.vue'
import TagDemo from './components/tag.vue'
import TabsDemo from './components/tabs.vue'
import DropdownDemo from './components/dropdown.vue'
import InputDemo from './components/input.vue'
import SelectDemo from './components/select.vue'
import SelectV2Demo from './components/select-v2.vue'
import DatePickerDemo from './components/date-picker.vue'
import InputNumberDemo from './components/input-number.vue'
import CascaderDemo from './components/cascader.vue'
import DescriptionsDemo from './components/descriptions.vue'
import FormDemo from './components/form.vue'
import TextDemo from './components/text.vue'
import DividerDemo from './components/divider.vue'
import BadgeDemo from './components/badge.vue'
import CalendarDemo from './components/calendar.vue'
import CardDemo from './components/card.vue'
import CollapseDemo from './components/collapse.vue'
import TimelineDemo from "./components/timeline.vue";
import TreeDemo from "./components/tree.vue";
import AutoCompleteDemo from "./components/auto-complete.vue";
import RateDemo from "./components/rate.vue";
import SwitchDemo from "./components/switch.vue";
import SliderDemo from './components/slider.vue'
import TimepickerDemo from './components/timepicker.vue'
import TreeSelectDemo from './components/tree-select.vue'
import ProgressDemo from './components/progress.vue'
import PopconfirmDemo from './components/popconfirm.vue'
import PageHeaderDemo from './components/page-header.vue'
import StepsDemo from './components/steps.vue'
import AlertDemo from './components/alert.vue'
import NotificationDemo from './components/notification.vue'
import MessageDemo from './components/message.vue'
import { defaultThemeColors, genThemeColors, mountThemeColors } from "@chapanda/style-preset-base";
import { onMounted } from "vue";
// 动态主题变量生成挂载
const themeColors = genThemeColors({
  ...defaultThemeColors,
  brand: {
    ...defaultThemeColors.brand as Record<string, string>,
      "1": "#f4f0ff",
      "2": "#ede8ff",
      "3": "#cabfff",
      "4": "#a496ff",
      "5": "#7769F3",
  },
}).colors;
function changeTheme(){
  mountThemeColors(genThemeColors({
    ...defaultThemeColors,
    brand: {
      ...defaultThemeColors.brand as Record<string, string>,
        "1": "#E9F7F9",
        "2": "#77D5D4",
        "3": "#14C7B8",
        "4": "#77D5D4",
        "5": "#008489",
    },
  }).colors)
}
onMounted(() => {
  mountThemeColors(themeColors)
})
</script>
