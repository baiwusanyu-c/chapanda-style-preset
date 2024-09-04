# @chapanda/style-preset-tailwind

基于中心规范基础结合 `tailwindcss` 的样式预设，它实现了和 `@chapanda/style-preset-base`几乎一样的样式预设.

## 使用
在 `tailwind.config.ts` 配置文件中使用 `chaPandaTailwindConfig` 方法包裹导出的配置对象. 

```typescript jsx
import type { Config } from 'tailwindcss'
import { chaPandaTailwindConfig } from '@chapanda/style-preset-tailwind'
export default chaPandaTailwindConfig({
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [
    // 省略配置
  ],
  darkMode: 'media', // or 'class'
  theme: [
    // 省略配置
  ],
  plugins: [
    // 省略配置
  ],
}) satisfies Config
```


## API

### chaPandaTailwindConfig

`@chapanda/style-preset-tailwind` 使用了 `tailwindcss` 的 `theme` 中 `colors` 和 `plugin` 中的 `shortcut` 选项,
特别是如果你需要扩展 `shortcut` 时，不要把他放在 `plugin` 选项里，而是需要把他作为第二个参数传递给 `chaPandaTailwindConfig`

```typescript jsx
declare function chaPandaPresetTailWindShortcut(customShortcut?: Record<string, string>): (context: PluginAPI) => void;
declare const chaPandaTailwindConfig: (
  // tailwindcss 的配置对象
  userConfig: Config, 
  // shortcut 插件选项
  options?: ChaPandaTailwindOptions
) => tailwindcss_types_config.Config;
```


## 参考
关于全局样式（布局对齐、字体、颜色变量等）请阅读 `@chapanda/style-preset-base` 文档
