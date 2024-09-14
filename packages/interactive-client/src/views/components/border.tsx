import React, {useEffect, useMemo, useState} from 'react'
import { chaPandaBorderRules, genThemeColors } from '@chapanda/style-preset/unocss'
import { codeToHtml } from 'shiki'
import { copyText } from 'baiwusanyu-utils'
import {  message } from 'antd';
export interface RulesItem {
  name:string
  value: Record<string, any>
  css: string
  html?: string
}

export const BorderComponent = () => {
  const [ rulesCode, setRulesCode ] = useState<RulesItem[]>([])
  const [messageApi, contextHolder] = message.useMessage();
  const resolveRules = useMemo<RulesItem[]>(() => {
    const borderRules = chaPandaBorderRules(genThemeColors().colors)
    return Object.keys(borderRules).map((key) => {
      const value = borderRules[key as keyof typeof borderRules]
      let css =  `.${key}${JSON.stringify(value)}`
        .replaceAll(',', ';\n   ')
        .replaceAll('"', '')
        .replaceAll('{', '{\n   ')
        .replaceAll('}', '\n}')
        .replaceAll(':', ': ')
      css = key.includes('gen') ? `${css}\n .my-border-width {\n    border-width: 4px;\n}`: css
      return {
        name: key,
        value,
        css,
      } as RulesItem
    })
  }, [])

   async function genHTMLCode(rulesItem: RulesItem[]){
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
     setRulesCode(res)
   }
  useEffect(() => {
    genHTMLCode(resolveRules)
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
      let cls = `w-80px h-30px bg-[#282A36] rounded`
      let description = ''
      let type = ''
      if(name.includes('error')){
        type = '错误色'
      } else if(name.includes('warning')){
        type = '警告色'
      } else if(name.includes('success')){
        type = '成功色'
      } else {
        type = '基础色'
      }
      if(name.includes('gen')){
        description = `${type}边框，可配合边框宽度使用`
        cls = `${cls} !border-width-4px`
      } else {
        description = `${type}边框，预设 1px`
      }

      return <div key={name} className='mb-10px'>
        <div className='pf-regular-12 mb-8px text-cbd-gray-5 fbc'>
          说明: {description}
          <span role='button'
                onClick={() => onCopy(ruleItem.name)}
                className='select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5'>复制变量名</span>
        </div>
        <div className='fcc h-142px'>
          <div className="rounded-lt rounded-lb flex-1 bg-[#282A36] h-100% pr">
            <div className='h-100% fcc'>
              <div className={cls} style={ruleItem.value}>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: ruleItem.html as TrustedHTML}}
               className='p-10px box-border bg-[#282A36] flex-1 h-100% rounded-rt rounded-rb'/>
        </div>
      </div>
    })
  }
  return <>
    {contextHolder}
    {renderRulesCode(rulesCode)}
  </>
}
