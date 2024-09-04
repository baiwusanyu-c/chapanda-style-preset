# @chapanda/style-preset-unocss

基于中心规范基础结合 `unocss` 的样式预设，它实现了和 `@chapanda/style-preset-base`几乎一样的样式预设.

## 使用
在 `unocss.config.ts` 配置文件中使用 `chaPandaUnoConfig` 方法包裹导出的配置对象.

```typescript jsx
import { chaPandaUnoConfig } from '@chapanda/style-preset-unocss'
import { defineConfig } from 'unocss'

export default defineConfig(chaPandaUnoConfig({
  theme: {
    colors: {
      'baiwu': '#00ffff'
    }
  }
}))

```


## API

### chaPandaUnoConfig

```typescript jsx
import { Theme } from '@unocss/preset-uno';
import { UserConfig } from 'unocss';
declare function chaPandaUnoConfig<T extends object = Theme>(
  // 导出的 unocss 配置对象
  userConfig: UserConfig<T>
): UserConfig<T>;
```


## 参考
关于全局样式（布局对齐、字体、颜色变量等）请阅读 `@chapanda/style-preset-base` 文档
