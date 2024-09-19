import { html, getPath, getFilesContent } from './utils'
import type { Application } from 'express'
import type { Middleware, Configuration  } from 'webpack-dev-server'
import { log } from 'baiwusanyu-utils'
export const webpackPresetDocs = (middlewares: Middleware, devServer: Configuration ) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }
  // 自定义中间件
  (devServer.app as unknown as Application)?.get('/__chanpanda_preset', (_, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/index.js', async (_, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    const content = await getFilesContent(getPath(), [['index.js', 'utf-8']]);
    res.end(content['index.js'])
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/index.css', async (_, res) => {
    res.setHeader('Content-Type', 'text/css');
    const content = await getFilesContent(getPath(), [['index.css', 'utf-8']]);
    res.end(content['index.css'])
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/DINNextLTPro-Heavy.ttf', async (_, res) => {
    res.setHeader('Content-Type', 'text/css');
    const content = await getFilesContent(getPath(), [['DINNextLTPro-Heavy.ttf']]);
    res.end(content['DINNextLTPro-Heavy.ttf'])
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/DINNextLTPro-Medium.ttf', async (_, res) => {
    res.setHeader('Content-Type', 'text/css');
    const content = await getFilesContent(getPath(), [['DINNextLTPro-Medium.ttf']]);
    res.end(content['DINNextLTPro-Medium.ttf'])
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/DINNextLTPro-Bold.ttf', async (_, res) => {
    res.setHeader('Content-Type', 'text/css');
    const content = await getFilesContent(getPath(), [['DINNextLTPro-Bold.ttf']]);
    res.end(content['DINNextLTPro-Bold.ttf'])
  });

  (devServer.app as unknown as Application)?.get('/__chanpanda_preset/DIN-Bold.otf', async (_, res) => {
    res.setHeader('Content-Type', 'text/css');
    const content = await getFilesContent(getPath(), [['DIN-Bold.otf']]);
    res.end(content['DIN-Bold.otf'])
  });

  const { port, host } = (devServer as any).options;
  log('info', '@chapanda/style-preset ')
  log('info', `样式预设交互式文档请查看: http://${host}:${port}/__chanpanda_preset`)
  return middlewares;
}
