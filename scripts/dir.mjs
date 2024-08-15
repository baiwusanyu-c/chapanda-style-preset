export const entry = [
  {
    entryPath: "../packages/compiler/index.ts",
    outputPath: "compiler",
  },
  {
    entryPath: "../packages/runtime/index.ts",
    outputPath: "runtime",
  },
  {
    entryPath: "../packages/utils/index.ts",
    outputPath: "utils",
  },
  {
    entryPath: "../packages/unplugin/index.ts",
    outputPath: "unplugin",
  },
  {
    entryPath: "../packages/vue-tea/index.ts",
    outputPath: "vue-tea",
  },
  {
    entryPath: "../packages/vue-tea/plugin/index.ts",
    outputPath: "vue-tea/plugin",
  },
  {
    entryPath: "../packages/test/index.ts",
    outputPath: "test",
  },
]

export const entryPkg = {
  'compiler': '../packages/compiler',
  'test': '../packages/test',
  'runtime': '../packages/runtime',
  'utils': '../packages/utils',
  'vue-tea': '../packages/vue-tea',
  'unplugin': '../packages/unplugin',
}
