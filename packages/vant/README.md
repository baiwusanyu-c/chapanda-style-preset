# @chapanda/style-preset-vant

基于中心规范基础结合 `vant` 的组件库样式预设.

## 使用

1. 首先通过 `vant` 提供的 `VanConfigProvider`，通过使用 `genChaPandaVantTheme` 方法设置主题变量。  
注意： 要写全局生效你需要设置`theme-vars-scope="global"`。
```vue
<template>
  <VanConfigProvider 
      :theme-vars='genChaPandaVantTheme()'
      theme-vars-scope="global">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="success">朴素按钮</van-button>
    <van-button disabled type="primary">禁用状态</van-button>
    <van-button disabled type="success">禁用状态</van-button>
  </VanConfigProvider>
</template>
<script setup lang="ts">
  import { genChaPandaVantTheme } from '@chapanda/style-preset-vant'
</script>

```

2. 入口文件 `main.tsx` 引入 `scss` 样式文件（单靠 `vant` 提供的 `token` 定制主题，无法完全满足样式需求）

```typescript jsx
import { createApp } from 'vue'
import '@chapanda/style-preset-vant/theme'
import App from './App.vue'
createApp(App).mount('#app')
```

## API

### genChaPandaVantTheme

```typescript jsx
 declare function genChaPandaVantTheme(theme?: ConfigProviderThemeVars): {
  // ...
  // 省略返回类型
}
```
`genChaPandaVantTheme` 用于生成符合中心规范的结合 `vant` 的组件库变量 `token`, 它接收一个可选的参数 `theme`,
当传入 `theme` 时，它的将和默认的 `chapanda` 预设合并，如果存在相同 `vant`，
将覆盖 `chapanda` 预设的 `vant`，最终返回 `vant` 的 `theme` 对象传递给 `VanConfigProvider` 组件


## 参考
关于全局样式（布局对齐、字体、颜色变量等）请阅读 `@chapanda/style-preset-base` 文档
