import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '@chapanda/style-preset/theme/element-plus'
import '@chapanda/style-preset/theme/element-plus/components'
// import '@chapanda/style-preset-ep/theme'
// import '@chapanda/style-preset-ep/theme/components'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
