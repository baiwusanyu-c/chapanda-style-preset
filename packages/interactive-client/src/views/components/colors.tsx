import { genThemeColors } from "@chapanda/style-preset";
import tinyColor from 'tinycolor2'
import { copyText } from 'baiwusanyu-utils'
import {  message } from 'antd';
import { useState }  from "react";
interface ColorItem  {
  name: string
  value: string
}

export const ColorsComponent = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const  { colorsVariable, colorsDescription } = genThemeColors()
  const [ colors ] = useState<Array<ColorItem>>(Object.keys(colorsVariable).map(key => {
    return {
      name: key,
      value: colorsVariable[key]
    }
  }))

  const setLightDarkText = (color: string, name: string) => {
    return tinyColor(color).isLight() || name === '--cbd-transparent' ? 'pf-regular-14 text-black' : 'pf-regular-14 text-white'
  }
  const setBorderBg = (name: string) => {
    let clx = 'w-full box-border fcc px-8px h-full border-rounded'
    if(name === '--cbd-white' || name === '--cbd-transparent') {
      return `${clx} border-basic`
    }
    return  clx
  }

  const onCopy = (value: string) => {
    copyText(value)
    messageApi.open({
      type: 'success',
      content: `复制 ${value} 成功！`,
    });
  }
  const setDescription = (name: string) => {
    return <>{colorsDescription[name]}</>
  }
  const renderColorItem = (color: ColorItem) => {
    return (
      <div key={color.name}>
        {contextHolder}
        <div className='pf-regular-12 mb-8px text-cbd-gray-5'>说明: {setDescription(color.name)}</div>
        <div className='fsc'>
          <div
            className='h-30px w-50% mr-8px'
            style={{
              backgroundSize: '50% 50%',
              backgroundImage: 'conic-gradient(rgba(0, 0, 0, .06) 0 25%, transparent 0 50%, rgba(0, 0, 0, .06) 0 75%, transparent 0)',
            }}>
            <div className={setBorderBg(color.name)}
                 style={{
                   [`${color.name}`]: `${color.value}`,
                   backgroundColor: `var(${color.name})`
                 }}>
              <span className={setLightDarkText(color.value, color.name)}>{color.name}: {color.value}</span>
            </div>
          </div>

          <div>
            <span role='button'
                  onClick={() => onCopy(color.name)}
                  className='select-none cursor-pointer pf-regular-12 mr-8px text-cbd-brand-4 hover:text-cbd-brand-5'>复制变量名</span>
            <span role='button'
                  onClick={() => onCopy(color.value)}
                  className='select-none cursor-pointer pf-regular-12 text-cbd-brand-4 hover:text-cbd-brand-5'>复制颜色值</span>
          </div>
        </div>
      </div>
    )
  }

  return <>
    {colors.map(colorItem => (renderColorItem(colorItem)))}
  </>
}
