import { Plugin, ResolvedConfig } from 'vite'
import c from 'picocolors'
import { getFilesContent, getPath, html } from "./utils";

export const vitePresetDocs = () => {
  let config: ResolvedConfig
  return {
    name: 'chapanda:style:preset:docs',
    apply: "serve",
    configResolved(resolvedConfig) {
      // 存储最终解析的配置
      config = resolvedConfig
    },
    async configureServer(server) {
      const content = await getFilesContent(getPath(), ['index.js', 'index.css'])
      server.middlewares.use((req, res, next) => {
        if(req.url === ('/__chanpanda_preset') && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/html');
          res.end(html)
        } else if(req.url === ('/__chanpanda_preset/index.js') && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/javascript');
          res.end(content['index.js'] as string)
        } else if(req.url === ('/__chanpanda_preset/index.css') && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/css');
          res.end(content['index.css'] as string)
        } else{
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
