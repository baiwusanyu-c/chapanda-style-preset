import { Plugin } from 'vite'
const html = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>chapanda style preset docs</title>
    <script type="module" crossorigin src="https://cdn.jsdelivr.net/npm/@chapanda/style-preset-interactive-client@latest/+esm"></script>
    <link rel="stylesheet" crossorigin href="https://cdn.jsdelivr.net/npm/@chapanda/style-preset-interactive-client@latest/index.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
export const vitePresetDocs = () => {
  return {
    name: 'chapanda:style:preset:docs',
    async configureServer(server) {
      console.log(html)
      server.middlewares.use((req, res, next) => {
        console.log(req.url)
        if(req.url === ('/__chanpanda_preset') && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/html');
          res.end(html)
        }else{
          next()
        }
      })
    },
  } as Plugin
}
// TODO: dev mode
// TODO: client 主包、docs 主包
