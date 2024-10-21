import { defineConfig } from 'vite'
import path from "path";
import UnoCSS from 'unocss/vite'
import react from "@vitejs/plugin-react-swc";
export default defineConfig(() => {
  //@ts-ignore
  const isDocs = process.NODE_ENV_IS_DOCS === 'true'
  return {
    base: isDocs ? '/chapanda-style-preset/' : '/',
    plugins: [
      react(),
      UnoCSS(),
    ],
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'rewrite-css-font',
            AtRule: {
              'font-face'(atRule) {
                atRule.walkDecls('font-family', declF => {
                  if(declF.value.includes('DIN')){
                    atRule.walkDecls('src', decl => {
                      if(isDocs){
                        if(declF.value === '"DIN"'){
                          decl.value = 'url("/__chanpanda_preset/DIN-Bold.otf")'
                        } else if(declF.value === '"DIN-Bold"'){
                          decl.value = 'url("/__chanpanda_preset/DINNextLTPro-Bold.ttf")'
                        } else if(declF.value === '"DIN-Heavy"'){
                          decl.value = 'url("/__chanpanda_preset/DINNextLTPro-Heavy.ttf")'
                        } else if(declF.value === '"DIN-Heavy-Lighter"'){
                          decl.value = 'url("/__chanpanda_preset/DINNextLTPro-Medium.ttf")'
                        }
                      }
                    })
                  }
                })

              }
            }
          }
        ]
      }
    },
   build:{
     rollupOptions: {
       output: {
         dir: path.resolve(__dirname, '../../dist/interactive/client'),
         name: 'interactive-client',
         entryFileNames: '[name].js',
         chunkFileNames: '[name].js',
         assetFileNames: '[name].[ext]',
       }
     },
     minify: false
   }
  }
})
