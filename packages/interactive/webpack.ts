import { html, getPath, getFilesContent } from './utils'
import type { Application } from 'express'
import type { Middleware, Configuration  } from 'webpack-dev-server'
import { log } from 'baiwusanyu-utils'
export const webpackPresetDocs = async (middlewares: Middleware, devServer: Configuration ) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }

  const content = await getFilesContent(getPath(), ['index.js', 'index.css']);
  // 自定义中间件
  (devServer.app as unknown as Application)?.get('/__chanpanda_preset', (_, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/index.js', (_, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(content['index.js'])
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/index.css', (_, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(content['index.css'])
  });

  const { port, host } = (devServer as any).options;
  log('info', '@chapanda/style-preset ')
  log('info', `样式预设交互式文档请查看: http://${host}:${port}/__chanpanda_preset`)
  return middlewares;
}
