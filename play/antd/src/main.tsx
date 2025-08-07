import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import '@chapanda/style-preset/theme/antd';
// import '@chapanda/style-preset-antd/theme'
import './index.scss'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
