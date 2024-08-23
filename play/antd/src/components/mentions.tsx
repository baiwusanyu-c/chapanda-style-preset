import React from 'react';
import { Mentions } from 'antd';

const options = ['afc163', 'zombiej', 'yesmeck'].map((value) => ({
    value,
    key: value,
    label: value,
}));

const App: React.FC = () => (
  <>
      <Mentions
        style={{ width: '100%' }}
        placeholder="this is disabled Mentions"
        disabled
        options={options}
      />
      <Mentions
        style={{ width: '100%' }}
        placeholder="this is readOnly Mentions"
        readOnly
        options={options}
      />
  </>
);

export default App;
