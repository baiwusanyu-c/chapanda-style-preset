import * as process from 'process'
import * as path from 'path'
import { defineConfig } from 'tsup'
import { entry as entryConfig } from './dir.mjs'
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
  }
}

if (buildMode === 'dev') {
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
    config.outDir = path.resolve(process.cwd(), `../packages/${entry[i].outputPath}/dist`)
    configOptions.push(config)
  }
}

export default defineConfig(configOptions)
