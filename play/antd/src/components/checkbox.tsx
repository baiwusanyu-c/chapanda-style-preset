import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => (
  <>
      <Checkbox defaultChecked={false} disabled/>
      <br/>
      <Checkbox indeterminate disabled/>
      <br/>
      <Checkbox defaultChecked disabled/>
      <br/>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
  </>
)

export default App;
