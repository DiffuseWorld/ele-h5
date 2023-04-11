import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {route} from '../src/router/index'
import App from './App.vue'


import 'vant/lib/index.css'
// import './assets/main.css'

const app = createApp(App)
// 测试一下
app.use(createPinia())
app.use(route)

app.mount('#app')
