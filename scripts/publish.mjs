import gulp from 'gulp'
import { runTask } from './utils.mjs'

export default gulp.series(
  runTask('publish @chapanda/style-preset-utils', 'cd dist/utils && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset-vant', 'cd dist/vant && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset-unocss', 'cd dist/unocss && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset-tailwind', 'cd dist/tailwindcss && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset-antd', 'cd dist/antd && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset-ep', 'cd dist/element-plus && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset-base', 'cd dist/base && pnpm run publish:npm'),
  runTask('publish @chapanda/style-preset', 'cd dist/chapanda-style-preset && pnpm run publish:npm'),
)
