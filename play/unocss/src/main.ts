import App from './App.svelte'
import 'virtual:uno.css'
import "@chapanda/style-preset-unocss/theme"
const app = new App({
  target: document.getElementById('app')!,
})

export default app
