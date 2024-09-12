# @chapanda/style-preset-interactive

基于中心规范基础的样式预设库交互式文档.

## 使用

### vite

```typescript jsx
// vite.config.ts
import {defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

import { vitePresetDocs } from "@chapanda/style-preset-interactive";

export default defineConfig({
  plugins: [
    solid(),
    vitePresetDocs(),
  ],
  resolve: {
    alias: {},
  },
})


```

### webpack(TODO)