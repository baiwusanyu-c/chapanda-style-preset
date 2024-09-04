import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// TODO: 写进文档
// import '@chapanda/style-preset/theme/element-plus'
// import '@chapanda/style-preset/theme/element-plus/component'
import '@chapanda/style-preset-ep/theme'
import '@chapanda/style-preset-ep/theme/component'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
