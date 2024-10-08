import React from 'react'
import { ColorsComponent } from "./components/colors";
import { LayoutComponent } from "./components/layout";
import { BorderComponent } from "./components/border";
import { FontComponent } from "./components/font";

function App() {
  return (
    <>
      <div className='fcc flex-col pr'>
        <h1 className='font-pingfang text-cbd-gray-7'>样式预设库交互式文档</h1>
        <div>
          <h2 className='font-pingfang text-cbd-gray-6 px-20px box-border'>颜色变量</h2>
          <div className='w-70vw p-20px border-rounded box-border grid-cols-2 gap-4 grid '>
            <ColorsComponent/>
          </div>
        </div>

        <div>
          <h2 className='font-pingfang text-cbd-gray-6 px-20px box-border'>布局简写</h2>
          <div className='w-70vw bg-cbd-gray-1 p-20px border-rounded box-border grid-cols-2 gap-4 grid'>
            <LayoutComponent/>
          </div>
        </div>

        <div>
          <h2 className='font-pingfang text-cbd-gray-6 px-20px box-border'>边框预设</h2>
          <div className='w-70vw bg-cbd-gray-1 p-20px border-rounded box-border grid-cols-2 gap-4 grid'>
            <BorderComponent/>
          </div>
        </div>

        <div>
          <h2 className='font-pingfang text-cbd-gray-6 px-20px box-border'>字体预设</h2>
          <div className='w-70vw bg-cbd-gray-1 p-20px border-rounded box-border grid-cols-2 gap-4 grid'>
            <FontComponent/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
