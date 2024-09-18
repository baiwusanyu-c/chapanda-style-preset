import {normalizePath} from "vite";
import path from "path";
import fs from "fs-extra";

export function getPath() {
 return  normalizePath(
    path.resolve(
    process.cwd(),
    "./node_modules/@chapanda/style-preset-interactive/node_modules/@chapanda/style-preset-interactive-client"
  ))
}

export async function getFilesContent(path: string, names: string[]) {
  const res: Record<string, string> = {}
  for (let i = 0; i < names.length; i++) {
    const content = await fs.readFile(`${path}/${names[i]}`, 'utf8');
    res[names[i]] = content
  }
  return res
}

export const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>chapanda style preset docs</title>
    <script type="module" crossorigin src="__chanpanda_preset/index.js"></script>
    <link rel="stylesheet" crossorigin href="__chanpanda_preset/index.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
