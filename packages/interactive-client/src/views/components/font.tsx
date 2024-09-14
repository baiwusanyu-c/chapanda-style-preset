import React, {useEffect, useMemo, useState} from 'react'
import { chaPandaFontRules } from '@chapanda/style-preset/unocss'
import { codeToHtml } from 'shiki'
import { copyText } from 'baiwusanyu-utils'
import {  message } from 'antd';
export interface RulesItem {
  name:string
  value: Record<string, any> | string
  css: string
  html?: string
}

export const FontComponent = () => {
  const [ rulesCode, setRulesCode ] = useState<RulesItem[]>([])
  const [ dinCode, setDinCode ] = useState<RulesItem[]>([])
  const [messageApi, contextHolder] = message.useMessage();
  const resolveRules = useMemo<RulesItem[]>(() => {
    const fontRules = chaPandaFontRules()
    return fontRules.map((v) => {
      const value = v[1]
      const css =  `.${v[0]}${JSON.stringify(value)}`
        .replaceAll('":"',': ')
        .replaceAll('","',';\n    ')
        .replaceAll('{"', ' {\n    ')
        .replaceAll('"}', '\n}')
        .replaceAll(',', ',\n   ')
        .replaceAll('font-family:', 'font-family:\n   ')
      return {
        name: v[0],
        value,
        css,
      } as RulesItem
    })
  }, [])
  const dinFontRules = useMemo<RulesItem[]>(() => {
     return [
       {
         name: 'font-din',
         value: '',
         css: '.font-din {\n' +
           '  font-family: \n   DIN,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n' +
           '    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n' +
           '    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n' +
           '}'
       },
       {
         name: 'font-din-bold',
         value:'',
         css: '.font-din-bold {\n' +
           '  font-family: \n   DIN-Bold,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n' +
           '    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n' +
           '    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n' +
           '}'
       },
       {
         name: 'font-din-heavy',
         value: '',
         css: '.font-din-heavy {\n' +
           '  font-family: \n   DIN-Heavy,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n' +
           '    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n' +
           '    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n' +
           '}'
       },
       {
         name: 'font-din-heavy-lighter',
         value: '',
         css: '.font-din-heavy-lighter {\n' +
           '  font-family: \n   DIN-Heavy-Lighter,\n    -apple-system,\n    BlinkMacSystemFont,\n   "Segoe UI",\n' +
           '    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n' +
           '    "Segoe UI Emoji",\n    "Segoe UI Symbol"\n' +
           '}'
       }
     ] as RulesItem[]
  }, [])
   async function genHTMLCode(
     rulesItem: RulesItem[],
     cb: (res: RulesItem[]) => void
){
     const res:RulesItem[] = []
     for (let i = 0; i < rulesItem.length; i++) {
       const html = await codeToHtml(rulesItem[i].css, {
         lang: 'css',
         theme: 'dracula-soft',
       })
       res.push({
         ...rulesItem[i],
         html,
       })
     }
     cb(res)
   }

  useEffect(() => {
    genHTMLCode(resolveRules, (res) => setRulesCode(res))
    genHTMLCode(dinFontRules, (res) => setDinCode(res))
  }, [resolveRules])

  const onCopy = (value: string) => {
    copyText(value)
    messageApi.open({
      type: 'success',
      content: '复制成功！',
    });
  }

  const renderRulesCode = (rulesItem: RulesItem[]) => {
    return rulesItem.map(ruleItem => {
      const { name } = ruleItem
      const resolveNames = name.split('-')
      let description = ''
      let type = ''
      if(resolveNames.includes('hm') || resolveNames.includes('harmony')){
        type = '默认鸿蒙字体'
      } else if(resolveNames.includes('pf') || resolveNames.includes('pingfang')){
        type = '默认苹方字体'
      }
      if(resolveNames.includes('harmony') || resolveNames.includes('pingfang')){
        description = `${type}，无字体大小`
      } else {
        description = `${type}，字体大小为 ${resolveNames[2]}px, ${resolveNames[1]} 字重`
      }

      return <div key={name} className='mb-10px'>
        <div className='pf-regular-12 mb-8px text-cbd-gray-5 fbc'>
          说明: {description}
          <span role='button'
                onClick={() => onCopy(ruleItem.name)}
                className='select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5'>复制变量名</span>
        </div>
        <div className='flex items-stretch'>
          <div className="rounded-lt rounded-lb flex-1 bg-[#282A36] pr">
            <div className='h-100% fcc'>
              <div className='text-cbd-white' style={ruleItem.value as Record<string, any>}>
                <p>chanpanda 9999</p>
                {ruleItem.name}
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: ruleItem.html as TrustedHTML}}
               className='p-10px box-border bg-[#282A36] rounded-rt rounded-rb w-50%'/>
        </div>
      </div>
    })
  }
  const renderDinCode = (rulesItem: RulesItem[]) => {
    return rulesItem.map(ruleItem => {
      const { name } = ruleItem
      return <div key={name} className='mb-10px'>
        <div className='pf-regular-12 mb-8px text-cbd-gray-5 fbc'>
          说明: 不在标准内的字体，但是移动端看板使用
          <span role='button'
                onClick={() => onCopy(ruleItem.name)}
                className='select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5'>复制变量名</span>
        </div>
        <div className='flex items-stretch'>
          <div className="rounded-lt rounded-lb flex-1 bg-[#282A36] pr">
            <div className='h-100% fcc'>
              <div className={`text-cbd-white ${ruleItem.name}`}>
                <p>chanpanda 7777</p>
                {ruleItem.name}
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: ruleItem.html as TrustedHTML}}
               className='p-10px box-border bg-[#282A36] rounded-rt rounded-rb w-50%'/>
        </div>
      </div>
    })
  }
  return <>
    {contextHolder}
    {renderRulesCode(rulesCode)}
    {renderDinCode(dinCode)}
  </>
}
