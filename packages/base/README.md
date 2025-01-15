# @chapanda/style-preset-base

基于中心规范基础的样式预设，它包含有 `colors` 颜色预设， `font` 字体预设，`border` 边框预设、`layout` 对齐预设。

## 使用
通过 `scss` 文件 引入，来使用其提供的预设方法或变量，详情方法或变量参考 `API` 不分

```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;

// 挂载预设颜色变量
:root {
  @include cbdPreset.generate-root-css-variables();
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
### `colors` 颜色预设
`colors` 颜色预设的颜色所有颜色变量如下, 当挂载到根元素下后， 你可以看到所有颜色变量， 通过 `var(--cbd-xx-yy)` 访问，  
比如: `var(--cbd-brand-5)`.

```typescript jsx
const yellow = {
  '1': '#FFF7EB',
  '2': '#FFBB33',
  // 警告色
  '3': '#FF9900',
  '4': '#EB8120',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#fef6c8',
  '6': '#f99784',
  '7': '#FABF00',
}

const red = {
  '1': '#FFF1F2',
  '2': '#FF808A',
  // 错误色
  '3': '#FF5F66',
  '4': '#F53F3F',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#dc0407',
  '6': '#F12B43',
}

const green = {
  '1': '#F1F7EA',
  '2': '#95DB42',
  // 成功色
  '3': '#72B22F',
  '4': '#529908',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#f3feee',
  '6': '#c5f89b',
  '7': '#06A561',
  '8': '#33D65F',
  '9': '#6ACC48',
  '10': '#C6F0C5',
}

const mint = {
  '1': '#E9F7F9',
  '2': '#77D5D4',
  '3': '#14C7B8',
  '4': '#00A590',
  // 以下为不在设计规范中但UI使用的颜色
  '5': '#008489',
}

const purple = {
  '1': '#EFEBFF',
  '2': '#887DFD',
  '3': '#5348CE',
  '4': '#352BA5',
}

const gray = {
  // 浅色背景
  '1': '#F9FAFC',
  // 深色背景/浅色分割线、边框
  '2': '#F0F1F5',
  // 深色色分割线、边框
  '3': '#E5E6EB',
  // 置灰/引导信息
  '4': '#C9CDD4',
  // 次要信息/辅助说明
  '5': '#86909C',
  // 次强调信息
  '6': '#4E5969',
  // 强调信息、基础的文字颜色
  '7': '#1D2129',
  // 以下为不在设计规范中但UI使用的颜色
  '8': '#2c3e50',
  '9': '#d0d0d0',
  '10': '#d3dce6',
  '11': '#99a9bf',
  '12': '#97a8be',
  '13': '#5a5e66',
  '14': '#2b2f3a',
  '15': '#676a6c',
  '16': '#707070',
  '17': '#484848',
  '18': '#bdc1c8',
  '19': '#D9E1EC',
  '20': '#1A1819',
  '21': '#131523',
  '22': '#5A607F',
  '23': '#888F9E',
  '24': '#535C6B',
  '25': '#969799',
  '26': '#ECF2FF',
  '27': '#1D2026',
  '28': '#586070',
  '29': '#8D97A8',
  '30': '#F5F8FC',
  '31': '#323233',
  '32': '#F5F5F5',
  '33': '#1c1c1e',
  '34': '#3a3a3c',
  '35': '#6C7294',
  '36': '#5C5C5C',
  '37': '#F5F6FA',
  '38': '#E2E2E2',
  '39': '#BBBDBF',
  '40': '#d9d9d9',
  '41': '#d4d4d4',
  '42': '#F2F4FD',
  '43': '#4f4f4f',
  '44': '#F7F8FC',
  '45': '#F7F8FA',
  '46': '#282F38',
  '47': '#F4F5F7',
  '48': '#8C94A3',
  '49': '#EDF0F7',
  '50': '#F8F8F8',
  '51': '#e1e8ee',
  '52': '#f3f4f6',
  '53': '#ebedf0',
  '54': '#EAEDF0',
  '55': '#7f8fa4',
  '56': '#f4f4f4',
  '57': '#e6e6e7',
  '58': '#BBC0C7',
  '59': '#eeeeee',
  '60': '#eaeef9',
}

const brand = {
  // 浅色背景
  '1': '#F2F5FD',
  // 特殊场景
  '2': '#ECF1FD',
  // 填充/悬浮
  '3': '#3775FC',
  // 填充/常规
  '4': '#105CFF',
  // 品牌色/字体/点击
  '5': '#0A4CDE',
  // 深色填充/字体
  '6': '#18284A',
  // 以下为不在设计规范中但UI使用的颜色
  '7': '#F7F9FF',
  '8': '#bcd1ff',
  '9': '#337ab7',
  '10': '#4662e6',
  '11': '#476DAB',
  '12': '#5a89cf',
  '13': '#CEDDFF',
  '14': '#94BFFF',
  '15': '#a9e6f8',
  '16': '#3f9fe9',
  '17': '#1a5da1',
  '18': '#1E5EFF',
  '19': '#2457FF',
  '20': '#E6F7FF',
  '21': '#D1E0FF',
}

```

`scss` 提供如下方法:

#### generate-root-css-variables

`generate-root-css-variables` 可以将预设颜色变量挂载到 `root` 下, 
他接受一个被 `generate-color-map` 处理过得参数, 生成对应的颜色变量

```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;
// 挂载预设颜色变量
:root {
  @include cbdPreset.generate-root-css-variables();
}
```

#### generate-color-map

`generate-color-map` 用于生成颜色变量映射，结合 `generate-root-css-variables` 使用可以自定义生成颜色变量。

```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;

$colorsHaHa: generate-color-map(
        // 前缀
        "--cbd",
        // 名称
        "haha",
        // 后缀列表
       (1),
        // 颜色列表
       ( #00ffff),
);

// 挂载预设颜色变量
:root {
  @include cbdPreset.generate-root-css-variables($colorsHaHa);
}
```
在上述例子中最终你可以通过 `var(--cbd-haha-1)` 访问到颜色变量.

#### get-color-value

`get-color-value` 方法可以通过传入变量名称直接获取颜色值，
在某些 `scss` 函数进行颜色计算时不能是一个变量，可以使用 `get-color-value` 来方便的获取值, 但它只支持预设的变量，手动通过
`generate-color-map` 和 `generate-root-css-variables` 创建的变量无法获取。
比如使用`cbdPreset.get-color-value('--cbd-brand-5')` 可以直接获取到颜色值 `#0A4CDE`

`colors` 的颜色预设除了使用 `scss` 外还提供了纯运行时的颜色变量生成, 在运行时获取颜色变量会很有用。

### genThemeColors

`genThemeColors` 用于生成主题颜色变量对象.

```typescript jsx
declare type ThemeColors = Record<string, string | Record<string, string>>;
/**
 * 生成主题颜色变量
 * @param themeColors 主题色对象，默认是 chapanda 的颜色变量，可以在此基础上扩展，但是 chapanda 的颜色变量优先级 更高
 * @param mix 是否集成默认颜色, 默认是 false，为 true 的话会使用 themeColors 参数，并合并默认 chapanda 的颜色变量
 * @param prefix 变量前缀， 默认是 'cbd'
 */
declare const genThemeColors: (themeColors?: ThemeColors, mix?: boolean, prefix?: string) => {
    preflights: string;
    colorsVariable: Record<string, any>;
    colors: Record<string, string>;
};
```
### `border` 边框预设

`border` 边框预设提供 `4` 中默认的情感边框

#### 警告色边框
```scss
.border-warning {
  border-style: solid;
  border-color: var(--cbd-yellow-3);
  border-width: 1px;
}
```
你也可以自己控制边框的粗细和风格
```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;
.border-warning-dash-2 {
  @include cbdPreset.gen-border-warning(4px, dashed)
}
```


#### 错误色边框
```scss
.border-error {
  border-style: solid;
  border-color: var(--cbd-red-3);
  border-width: 1px;
}
```
你也可以自己控制边框的粗细和风格
```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;
.border-error-dash-2 {
  @include cbdPreset.gen-border-error(4px, dashed)
}
```

#### 成功色边框
```scss
.border-success {
  border-style: solid;
  border-color: var(--cbd-green-3);
  border-width: 1px;
}
```
你也可以自己控制边框的粗细和风格
```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;
.border-success-dash-2 {
  @include cbdPreset.gen-border-success(4px, dashed)
}
```

#### 默认色边框
```scss
.border-basic {
  border-style: solid;
  border-color: var(--cbd-gray-3);
  border-width: 1px;
}
```
你也可以自己控制边框的粗细和风格
```scss
@use '@chapanda/style-preset-base/theme' as cbdPreset;
.border-basic-dash-2 {
  @include cbdPreset.gen-border-style(4px, var(--cbd-gray-3), dashed)
}
```

### `font` 字体预设
`font` 字体预设 提供默认字体样式类如下, 根据需求酌情使用对应大小的字体类
```scss

@mixin font-pingfang {
  font-family: PingFang-SC, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}
.font-pingfang{
  font-family: PingFang-SC, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}

.pf-medium-24 {
  font-weight: 500;
  line-height: 1.4;
  font-size: 24px;
  @include font-pingfang()
}
.pf-medium-22 {
  font-weight: 500;
  font-size: 24px;
  @include font-pingfang()
}

.pf-medium-20 {
  font-weight: 500;
  font-size: 20px;
  @include font-pingfang()
}
.pf-medium-18 {
  font-weight: 500;
  font-size: 18px;
  @include font-pingfang()
}

.pf-medium-17 {
  font-weight: 500;
  font-size: 17px;
  @include font-pingfang()
}

.pf-medium-16 {
  font-weight: 500;
  font-size: 16px;
  @include font-pingfang()
}

.pf-medium-15 {
  font-weight: 500;
  font-size: 15px;
  @include font-pingfang()
}

.pf-regular-24 {
  font-weight: 400;
  line-height: 1.4;
  font-size: 24px;
  @include font-pingfang()
}

.pf-regular-22 {
  font-weight: 500;
  font-size: 24px;
  @include font-pingfang()
}

.pf-regular-20 {
  font-weight: 400;
  font-size: 20px;
  @include font-pingfang()
}

.pf-regular-18 {
  font-weight: 400;
  font-size: 18px;
  @include font-pingfang()
}


.pf-regular-17 {
  font-weight: 400;
  font-size: 17px;
  @include font-pingfang()
}


.pf-regular-16 {
  font-weight: 400;
  font-size: 16px;
  @include font-pingfang()
}

.pf-regular-15 {
  font-weight: 400;
  font-size: 15px;
  @include font-pingfang()
}


.pf-regular-14 {
  font-weight: 400;
  font-size: 14px;
  @include font-pingfang()
}

.pf-regular-12 {
  font-weight: 400;
  font-size: 12px;
  @include font-pingfang()
}


@mixin font-harmony {
  font-family: 'HarmonyOS Sans SC', -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}
.font-harmony{
  font-family: 'HarmonyOS Sans SC', -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}

.hm-medium-24 {
  font-weight: 500;
  line-height: 1.4;
  font-size: 24px;
  @include font-harmony()
}
.hm-medium-20 {
  font-weight: 500;
  font-size: 20px;
  @include font-harmony()
}
.hm-medium-18 {
  font-weight: 500;
  font-size: 18px;
  @include font-harmony()
}

.hm-medium-17 {
  font-weight: 500;
  font-size: 17px;
  @include font-harmony()
}

.hm-medium-16 {
  font-weight: 500;
  font-size: 16px;
  @include font-harmony()
}

.hm-medium-15 {
  font-weight: 500;
  font-size: 15px;
  @include font-harmony()
}

.hm-regular-24 {
  font-weight: 400;
  line-height: 1.4;
  font-size: 24px;
  @include font-harmony()
}

.hm-regular-20 {
  font-weight: 400;
  font-size: 20px;
  @include font-harmony()
}

.hm-regular-18 {
  font-weight: 400;
  font-size: 18px;
  @include font-harmony()
}


.hm-regular-17 {
  font-weight: 400;
  font-size: 17px;
  @include font-harmony()
}


.hm-regular-16 {
  font-weight: 400;
  font-size: 16px;
  @include font-harmony()
}

.hm-regular-15 {
  font-weight: 400;
  font-size: 15px;
  @include font-harmony()
}


.hm-regular-14 {
  font-weight: 400;
  font-size: 14px;
  @include font-harmony()
}

.hm-regular-12 {
  font-weight: 400;
  font-size: 12px;
  @include font-harmony()
}
```
而对于移动端看板会有特殊的字体要求也进行了集成

```scss
// 以下是非设计规范里所使用的字体，
// 在移动端看板的数字显示上使用了
@font-face {
  font-family: 'DIN';
  src: url('@chapanda/style-preset-base/theme/font/DIN-Bold.otf');
  font-weight: normal;
  font-style: normal;
}

@mixin font-din($important:null) {
  @if type-of($important) != null {
    font-family: DIN, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  } @else {
    font-family: DIN, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"
  }
}
.font-din{
  font-family: DIN, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}

@font-face {
  font-family: 'DIN-Bold';
  src: url('@chapanda/style-preset-base/theme/font/DINNextLTPro-Bold.ttf');
  font-weight: normal;
  font-style: normal;
}

@mixin font-din-bold($important:null) {
  @if type-of($important) != null {
    font-family: DIN-Bold, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  } @else {
    font-family: DIN-Bold, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"
  }
}

.font-din-bold{
  font-family: DIN-Bold, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}


@font-face {
  font-family: 'DIN-Heavy';
  src: url('@chapanda/style-preset-base/theme/font/DINNextLTPro-Heavy.ttf');
  font-weight: normal;
  font-style: normal;
}
@mixin font-din-heavy($important:null) {
  @if type-of($important) != null {
    font-family: DIN-Heavy, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  } @else {
    font-family: DIN-Heavy, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"
  }
}
.font-din-heavy{
  font-family: DIN-Heavy, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}


@font-face {
  font-family: 'DIN-Heavy-Lighter';
  src: url('@chapanda/style-preset-base/theme/font/DINNextLTPro-Medium.ttf');
  font-weight: normal;
  font-style: normal;
}
@mixin font-din-heavy-lighter($important:null) {
  @if type-of($important) != null {
    font-family: DIN-Heavy-Lighter, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol" !important;
  } @else {
    font-family: DIN-Heavy-Lighter, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"
  }
}

.font-din-heavy-lighter{
  font-family: DIN-Heavy-Lighter, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"
}
```

### `layout` 对齐预设

`layout` 对齐预设提供了一些对齐和定位的简写

```scss
.pr {
  position: relative;
}

.pa {
  position: absolute;
}

.pf {
  position: fixed;
}

.fcs {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.fbs {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.fcc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fec {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.fsc {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fss {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.fbc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ifc {
  display: inline-flex;
  align-items: center;
}

```
