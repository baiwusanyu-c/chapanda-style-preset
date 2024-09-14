# @chapanda/style-preset

`@chapanda/style-preset` 是对以下包的导出，它暴露了所有预设功能支持，只是使用时引用的路径有些许差别

## @chapanda/style-preset

```typescript jsx
import { genThemeColors } from '@chapanda/style-preset'
// 等同于
// import { genThemeColors } from '@chapanda/style-preset-base'
```

```scss
@use '@chapanda/style-preset/theme';
// 等同于
// @use '@chapanda/style-preset-base/theme';
```

更多详情请参考 `@chapanda/style-preset-base` 文档.

## @chapanda/style-preset/tailwindcss

```typescript jsx
import { chaPandaTailwindConfig } from '@chapanda/style-preset/tailwindcss'
// 等同于
// import { chaPandaTailwindConfig } from '@chapanda/style-preset-tailwind'
```
更多详情请参考 `@chapanda/style-preset-tailwind` 文档.

## @chapanda/style-preset/unocss

```typescript jsx
import { presetChapandaUno } from '@chapanda/style-preset/unocss'
// 等同于
// import { presetChapandaUno } from '@chapanda/style-preset-unocss'
```
更多详情请参考 `@chapanda/style-preset-unocss` 文档.

## @chapanda/style-preset/antd

```typescript jsx
import { genChaPandaAntdTheme } from '@chapanda/style-preset/antd'
// 等同于
// import { genChaPandaAntdTheme } from '@chapanda/style-preset-antd'

import '@chapanda/style-preset/theme/antd'
// 等同于
// import '@chapanda/style-preset-antd/theme'
```
更多详情请参考 `@chapanda/style-preset-antd` 文档.

## @chapanda/style-preset/vant

```typescript jsx
import { genChaPandaVantTheme } from '@chapanda/style-preset/vant'
// 等同于
// import { genChaPandaVantTheme } from '@chapanda/style-preset-vant'

import '@chapanda/style-preset/theme/vant'
// 等同于
// import '@chapanda/style-preset-vant/theme'
```
更多详情请参考 `@chapanda/style-preset-vant` 文档.

## @chapanda/style-preset

```typescript jsx
import  '@chapanda/style-preset/theme/element-plus'
// 等同于
// @chapanda/style-preset-ep/theme'

import '@chapanda/style-preset/theme/element-plus/components'
// 等同于
// import '@chapanda/style-preset-ep/theme/components'
```

更多详情请参考 `@chapanda/style-preset-ep` 文档.
