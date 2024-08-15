import gulp from 'gulp'
import { runTask } from './utils.mjs'
export default gulp.series(
  runTask('publish @vue-tea/utils', 'cd dist/utils && pnpm run publish:npm'),
  runTask('publish @vue-tea/compiler', 'cd dist/compiler && pnpm run publish:npm'),
  runTask('publish @vue-tea/runtime', 'cd dist/runtime && pnpm run publish:npm'),
  runTask('publish @vue-tea/unplugin', 'cd dist/unplugin && pnpm run publish:npm'),
  runTask('publish @vue-tea/test', 'cd dist/test && pnpm run publish:npm'),
  runTask('publish vue-tea', 'cd dist/vue-tea && pnpm run publish:npm'),
)
