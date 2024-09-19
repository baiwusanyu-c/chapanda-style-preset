import path, { posix, win32 } from "path";
import fs from "fs-extra";

function normalizePath(filename: string) {
  return filename.split(win32.sep).join(posix.sep);
}

export function getPath() {
 return  normalizePath(
    path.resolve(
    process.cwd(),
    process.env.CBD_DOCS as string,
  ))
}

export async function getFilesContent(path: string, names: Array<string[]>) {
  const res: Record<string, string | Buffer> = {}
  for (let i = 0; i < names.length; i++) {
    const content = await fs.readFile(`${path}/${names[i][0]}`, names[i][1] as any);
    res[names[i][0]] = content
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
    <script type="module" crossorigin src="/__chanpanda_preset/index.js"></script>
    <link rel="stylesheet" crossorigin href="/__chanpanda_preset/index.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
