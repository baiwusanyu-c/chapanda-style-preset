# @chapanda/style-preset-ep

基于中心规范基础结合 `element-plus` 的组件库样式预设.

## 使用

我们通过使用 `scss` 覆盖变量和组件库样式的方式提供预设

1. 入口文件 `main.tsx` 引入 `scss` 样式文件
其中 `'@chapanda/style-preset-ep/theme'` 用于提供主题变量，覆盖 element-plus 的变量.
`'@chapanda/style-preset-ep/theme/components'` 提供组件样式覆盖。

```typescript jsx
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import '@chapanda/style-preset-ep/theme'
import '@chapanda/style-preset-ep/theme/components'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

```

## 参考
关于全局样式（布局对齐、字体、颜色变量等）请阅读 `@chapanda/style-preset-base` 文档
