import { Button, Flex, ConfigProvider } from 'antd';
import { genChaPandaAntdTheme } from '@chapanda/style-preset/antd'
function App() {
  return (
    <ConfigProvider theme={genChaPandaAntdTheme()}>
      <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </ConfigProvider>
  )
}

export default App
