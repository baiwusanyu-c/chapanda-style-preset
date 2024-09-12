import * as process from 'process'
import * as path from 'path'
import { defineConfig } from 'tsup'
import { entry as entryConfig } from './dir.mjs'

function normalizePath(filename) {
  const res =  filename.split(path.win32.sep).join(path.posix.sep);
  if (path.win32.isAbsolute(res)) {
    return res.replace(/^[a-zA-Z]:/, ''); // 移除盘符
  }
  return res
};

let entry = {}
const buildMode = process.env.BUILD_MODE
const baseConfig = {
  entry: {},
  external: [
    'chalk',
    'fs-extra',
    'vue',
    'fast-glob',
    'fs-extra',
    'magic-string',
  ],
  format: ['cjs', 'esm'],
  clean: true,
  minify: false,
  dts: false,
  outDir: path.resolve(process.cwd(), '../dist'),

}
const configOptions = []

if (buildMode === 'prod') {
  entry = entryConfig
  for (let i = 0; i < entry.length; i++) {
    const config = JSON.parse(JSON.stringify(baseConfig))
    // path
    config.entry = [entry[i].entryPath]
    config.external = [/@chapanda/]
    config.outDir = path.resolve(process.cwd(), `../dist/${entry[i].outputPath}`)
    config.dts = true
    configOptions.push(config)
    config.define = {
      'process.env.CBD_DOCS_JS': JSON.stringify('https://cdn.jsdelivr.net/npm/@chapanda/style-preset-interactive-client@latest/+esm'),
      'process.env.CBD_DOCS_CSS': JSON.stringify('https://cdn.jsdelivr.net/npm/@chapanda/style-preset-interactive-client@latest/index.css')
    }
  }
}

if (buildMode === 'dev') {
  const currentDir = process.cwd();
  entry = entryConfig
  for (let i = 0; i < entry.length; i++) {
    const config = JSON.parse(JSON.stringify(baseConfig))
    // path
    config.entry = [entry[i].entryPath]
    config.minify = false
    config.watch = buildMode === 'dev' ?  ['../packages/**/**.ts'] : false
    config.ignoreWatch = [
      '../packages/**/node_modules/**/**.d.ts',
      '../packages/**/node_modules/**/**.d.mts',
      '../packages/**/node_modules/**/**.js',
      '../packages/**/node_modules/**/**.mjs',
      '../packages/**/dist/**/**.d.ts',
      '../packages/**/dist/**/**.d.mts',
      '../packages/**/dist/**/**.js',
      '../packages/**/dist/**/**.mjs',
    ]
    config.external = [/@chapanda/]
    config.dts = true
    config.outDir = path.resolve(currentDir, `../packages/${entry[i].outputPath}/dist`)
    configOptions.push(config)
    const clientPath = normalizePath(path.resolve(currentDir, `../dist/interactive-client`))
    console.log(clientPath)
    config.define = {
      'process.env.CBD_DOCS_JS': JSON.stringify(`${clientPath}/index.js`),
      'process.env.CBD_DOCS_CSS': JSON.stringify(`${clientPath}/index.css`),
    }
  }
}

export default defineConfig(configOptions)
