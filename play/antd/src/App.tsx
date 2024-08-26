import { Flex, ConfigProvider } from 'antd';

import { genChaPandaAntdTheme } from '@chapanda/style-preset/antd'
import RadioDemo from './components/radio.tsx'
import AvatarDemo from './components/avatar.tsx'
import ButtonDemo from './components/button.tsx'
import CardDemo from './components/card.tsx'
import CollapseDemo from './components/collapse.tsx'
import DescriptionsDemo from './components/descriptions.tsx'
import EmptyDemo from './components/empty.tsx'
import ListDemo from './components/list.tsx'
import PopoverDemo from './components/popover.tsx'
import StatisticDemo from './components/statistic.tsx'
import TableDemo from './components/table.tsx'
import TabsDemo from './components/tabs.tsx'
import TagDemo from './components/tag.tsx'
import TimelineDemo from './components/timeline.tsx'
import TreeDemo from './components/tree.tsx'
import CascaderDemo from './components/cascader.tsx'
import CheckboxDemo from './components/checkbox.tsx'
import DatePickerDemo from './components/date-picker.tsx'
import FormDemo from './components/form.tsx'
import InputDemo from './components/input.tsx'
import MentionsDemo from './components/mentions.tsx'
import SelectDemo from './components/select.tsx'
import SlidereDemo from './components/slider.tsx'
import TransfereDemo from './components/transfer.tsx'
import TreeSelectDemo from './components/tree-select.tsx'
import UploadDemo from './components/upload.tsx'
import AlertDemo from './components/alert.tsx'
import MessageDemo from './components/message.tsx'
import NotificationDemo from './components/notification.tsx'
import PopconfirmDemo from './components/popconfirm.tsx'
import ProgressDemo from './components/progress.tsx'
import ModalDemo from './components/modal.tsx'
import BreadcrumbDemo from './components/breadcrumb.tsx'
import MenuDemo from './components/menu.tsx'
import PaginationDemo from './components/pagination.tsx'
import InputNumberDemo from './components/input-number.tsx'
import SwitchDemo from './components/switch.tsx'
import CalendarDemo from './components/calendar.tsx'

function App() {
  return (
    <ConfigProvider theme={genChaPandaAntdTheme()}>
      <Flex gap="small" wrap>
       <ButtonDemo/>
      </Flex>
      <Flex gap="small" wrap>
        <AvatarDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <RadioDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <CardDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <CollapseDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <DescriptionsDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <EmptyDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <ListDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <PopoverDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <StatisticDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TableDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TabsDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TagDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TimelineDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TreeDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <CascaderDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <CheckboxDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <DatePickerDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <FormDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <InputDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <MentionsDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <SelectDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <SlidereDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TransfereDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <TreeSelectDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <UploadDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <AlertDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <MessageDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <NotificationDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <PopconfirmDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <ProgressDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <ModalDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <BreadcrumbDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <MenuDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <PaginationDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <InputNumberDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <SwitchDemo/>
      </Flex>

      <Flex gap="small" wrap>
        <CalendarDemo />
      </Flex>
    </ConfigProvider>
  )
}

export default App
