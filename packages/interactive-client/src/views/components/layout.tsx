import React, {useEffect, useMemo, useState} from 'react'
import { chaPandaLayoutRules } from '@chapanda/style-preset/unocss'
import { codeToHtml } from 'shiki'

export interface RulesItem {
  name:string
  value: Record<string, any>
  css: string
  html?: string
}

export const LayoutComponent = () => {
  const [ rulesCode, setRulesCode ] = useState<RulesItem[]>([])

  const layoutRules = useMemo<RulesItem[]>(() => {
    return Object.keys(chaPandaLayoutRules).map((key) => {
      const value = chaPandaLayoutRules[key as keyof typeof chaPandaLayoutRules]
      return {
        name: key,
        value,
        css: `.${key}${JSON.stringify(value)}`
          .replaceAll(',', ';\n   ')
          .replaceAll('"', '')
          .replaceAll('{', '{\n   ')
          .replaceAll('}', '\n}')
          .replaceAll(':', ': ')
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
    genHTMLCode(layoutRules)
  }, [layoutRules])

  const renderRulesCode = (rulesItem: RulesItem[]) => {
    return rulesItem.map(ruleItem => {
      return <div className='fcc h-122px' key={ruleItem.name}>
        <div className="rounded-lt rounded-lb flex-1 bg-cbd-brand-2 h-100% pr">
          <div style={ruleItem.value} className='h-100%'>
            <div className='w-30px h-30px bg-cbd-brand-3 rounded m-4px'>
            </div>
            <div className='w-30px h-30px bg-cbd-brand-3 rounded m-4px'>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: ruleItem.html as TrustedHTML}}
             className='p-10px box-border bg-[#282A36] flex-1 h-100% rounded-rt rounded-rb'/>
      </div>
    })
  }
  return <>
    {renderRulesCode(rulesCode)}
  </>
}
