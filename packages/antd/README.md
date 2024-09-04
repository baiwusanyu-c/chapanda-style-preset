# @chapanda/style-preset-antd

基于中心规范基础结合 `antd` 的组件库样式预设.

## 使用

1. 首先通过 `antd` 提供的 `ConfigProvider`，通过使用 `genChaPandaAntdTheme` 方法设置主题变量。

```typescript jsx
import React from 'react';
import { Button, Flex } from 'antd';
import { genChaPandaAntdTheme } from '@chapanda/style-preset-antd'
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
```

2. 入口文件 `main.tsx` 引入 `scss` 样式文件（单靠 `antd` 提供的 `token` 定制主题，无法完全满足样式需求）

```typescript jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@chapanda/style-preset-antd/theme'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## API

### genChaPandaAntdTheme

```typescript jsx
 declare function genChaPandaAntdTheme(theme?: ThemeConfig): {
  // ...
  // 省略返回类型
}
```
`genChaPandaAntdTheme` 用于生成符合中心规范的结合 `antd` 的组件库变量 `token`, 它接收一个可选的参数 `theme`,
当传入 `theme` 时，它的将和默认的 `chapanda` 预设合并，如果存在相同 `token`，
将覆盖 `chapanda` 预设的 `token`，最终返回 `antd` 的 `theme` 对象传递给 `ConfigProvider` 组件


## 参考
关于全局样式（布局对齐、字体、颜色变量等）请阅读 `@chapanda/style-preset-base` 文档
