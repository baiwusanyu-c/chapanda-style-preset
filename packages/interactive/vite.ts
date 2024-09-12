import { Plugin } from 'vite'
import { setGlobalPrefix, log } from 'baiwusanyu-utils'
export const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>chapanda style preset docs</title>
    <script type="module" crossorigin src=${process.env.CBD_DOCS_JS}></script>
    <link rel="stylesheet" crossorigin href=${process.env.CBD_DOCS_CSS}>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

export const vitePresetDocs = () => {
  return {
    name: 'chapanda:style:preset:docs',
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if(req.url === ('/__chanpanda_preset') && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/html');
          res.end(html)
        }else{
          next()
        }
      })

      log('info', '  ➜  【@chapanda/style-preset】')
      log('info', '  ➜  样式预设交互式文档请查看: ')
      log('info', '  ➜  www.baidu.com')
    },
  } as Plugin
}

// TODO: log
