import path from 'path'
import gulp from 'gulp'
import fs from 'fs-extra'
import {entryPkg, entryTheme, entryThemePost} from './dir.mjs'

const distRoot = path.resolve(process.cwd(), '../dist')

const copyPackageJsonFiles = async(
  srcDir,
  destDir,
) => {
  const destPaths = {} // 存储输出目录和源文件目录的对应关系
  fs.readdirSync(srcDir).forEach((file) => {
    const filePath = path.join(srcDir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory() && file !== 'node_modules') { // 排除 node_modules 目录
      Object.assign(destPaths, copyPackageJsonFiles(filePath, destDir)) // 递归调用
    } else if (file === 'package.json') {
      let packageJson = fs.readJsonSync(filePath) // 读取原始 package.json 文件
      // transform
      if(srcDir.includes('chapanda-style-preset')) {{
        packageJson.exports = {
          ".": {
            "types": "./index.d.ts",
            "require": "./index.js",
            "import": "./index.mjs"
          },
          "./antd": {
            "types": "./antd/index.d.ts",
            "require": "./antd/index.js",
            "import": "./antd/index.mjs"
          },
          "./element-plus": {
            "types": "./element-plus/index.d.ts",
            "require": "./element-plus/index.js",
            "import": "./element-plus/index.mjs"
          },
          "./tailwindcss": {
            "types": "./tailwindcss/index.d.ts",
            "require": "./tailwindcss/index.js",
            "import": "./tailwindcss/index.mjs"
          },
          "./unocss": {
            "types": "./unocss/index.d.ts",
            "require": "./unocss/index.js",
            "import": "./unocss/index.mjs"
          },
          "./vant": {
            "types": "./vant/index.d.ts",
            "require": "./vant/index.js",
            "import": "./vant/index.mjs"
          },
          "./utils": {
            "types": "./utils/index.d.ts",
            "require": "./utils/index.js",
            "import": "./utils/index.mjs"
          },
          "./theme/index": "./theme/index.scss",
          "./theme/antd": "./theme/antd/index.scss",
          "./theme/vant": "./theme/vant/vant.scss"
        }
      }} else {
        packageJson.main = './index.mjs'
        packageJson.module = './index.mjs'
        packageJson.exports = {
          '.': {
            types: './index.d.ts',
            require: './index.js',
            import: './index.mjs',
          },
          "./theme/index": "./theme/index.scss"
        }
      }
      const packageDir = path.dirname(filePath)
      const relativePath = path.relative(srcDir, packageDir)
      const destPath = path.join(destDir, relativePath, 'package.json')
      const version = packageJson.version
      const packageJsonContentStr = JSON.stringify(packageJson).replaceAll('workspace:*', `^${version}`)
      packageJson = JSON.parse(packageJsonContentStr)
      fs.outputJsonSync(destPath, packageJson, { spaces: 2 }) // 写入修改后的 package.json 文件到指定目录
      destPaths[destPath] = packageDir // 存储输出目录和源文件目录的对应关系
    }
  })
  return destPaths
}

const movePkgToRootDist = async(entryPkg) => {
  for (const srcKey in entryPkg) {
    await copyPackageJsonFiles(
      entryPkg[srcKey],
        `${distRoot}/${srcKey}`)
  }
}

const moveThemeToRootDist = async(entryPkg) => {
  for (const srcKey in entryPkg) {
    const vs = entryPkg[srcKey]
    for (let i = 0; i < vs.length; i++) {
      await fs.copy(
          `${vs[i]}/theme`,
          `${distRoot}/${srcKey}/theme`)
    }
  }
}

const moveThemePostToRootDist = async(entryPkg) => {
  for (const srcKey in entryPkg) {
    const vs = entryPkg[srcKey]
    for (let i = 0; i < vs.length; i++) {
      await fs.copy(
          `${vs[i]}`,
          `${distRoot}/${srcKey}/theme/antd`)
    }
  }
}

// const moveREADMEToRootDist = async(entryPkg) => {
//   for (const srcKey in entryPkg) {
//     await fs.copy(
//         `${entryPkg[srcKey]}/README.md`,
//         `${distRoot}/${srcKey}/README.md`)
//   }
// }

export default gulp.series(
  // 移动 package.json 到 dist
  async() => {
    const res = await movePkgToRootDist(entryPkg)
    return res
  },
   // 移动 theme 到 dist
  async() => {
    const res = await moveThemeToRootDist(entryTheme)
    return res
  },
  async() => {
    const res = await moveThemePostToRootDist(entryThemePost)
    return res
  },
  // 移动 README 到 dist
  // async() => {
  //   const res = await moveREADMEToRootDist(entryPkg)
  //   return res
  // },
)
