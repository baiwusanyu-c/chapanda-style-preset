import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// TODO: 写进文档
import '@chapanda/style-preset/theme/element-plus'
import '@chapanda/style-preset/theme/element-plus/component'
// import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
