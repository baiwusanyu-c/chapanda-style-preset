import { Plugin, ResolvedConfig } from 'vite'
import c from 'picocolors'
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
  let config: ResolvedConfig
  return {
    name: 'chapanda:style:preset:docs',
    apply: "serve",
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = resolvedConfig
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if(req.url === ('/__chanpanda_preset') && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/html');
          res.end(html)
        }else{
          next()
        }
      })

      const _print = server.printUrls
      server.printUrls = () => {
        let host = `${config.server.https ? 'https' : 'http'}://localhost:${config.server.port || '80'}`

        const url = server.resolvedUrls?.local[0]

        if (url) {
          try {
            const u = new URL(url)
            host = `${u.protocol}//${u.host}`
          }
          catch (error) {
            config.logger.warn(`Parse resolved url failed: ${error}`)
          }
        }

        _print()
        const base = server.config.base || '/'
        const colorUrl = (url: string) => c.green(url.replace(/:(\d+)\//, (_, port) => `:${c.bold(port)}/`))
        config.logger.info(`  ${c.green('➜')}  ${c.bold('样式预设交互式文档请查看')}`)
        config.logger.info(`  ${c.green('➜')}  ${c.bold('@chapanda/style-preset')}: ${colorUrl(`${host}${base}__chanpanda_preset`)}`)
      }
    },
  } as Plugin
}
