import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
// import "@chapanda/style-preset/theme"
import App from './views/App'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
