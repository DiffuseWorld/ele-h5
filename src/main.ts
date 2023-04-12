import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {route} from '../src/router/index'
import App from './App.vue'


import 'vant/lib/index.css'
// import './assets/main.css'

const app = createApp(App)



app.use(createPinia())
app.use(route)


const resize = () => {
    const rootValue = 16
    const rootWidth = 390
    const driviceWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize = (driviceWidth * rootValue) / rootWidth + 'px'
}

resize()

window.onresize=resize


app.mount('#app')
