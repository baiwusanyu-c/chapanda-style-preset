# @chapanda/style-preset-unocss

基于中心规范基础结合 `unocss` 的样式预设，它实现了和 `@chapanda/style-preset-base`几乎一样的样式预设.

## 使用
在 `unocss.config.ts` 配置文件中添加预设 `presetChapandaUno`

```typescript jsx
import { presetChapandaUno } from '@chapanda/style-preset-unocss'
import { defineConfig } from 'unocss'
import { presetUno  } from 'unocss'
export default defineConfig({
  theme: {
    colors: {
      'baiwu': '#00ffff'
    }
  },
  presets: [
    presetUno(),
    presetChapandaUno()
  ]
})

```


## API

### presetChapandaUno

```typescript jsx
import { Theme } from '@unocss/preset-uno';
import { UserConfig, Preset } from 'unocss';
declare function presetChapandaUno<T extends object = Theme>(): Preset<Theme>;
```


## 参考
关于全局样式（布局对齐、字体、颜色变量等）请阅读 `@chapanda/style-preset-base` 文档
