import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue)
app.use(IconsPlugin)
app.mount('#app')
