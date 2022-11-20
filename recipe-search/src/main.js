import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import { VueWindowSizePlugin } from 'vue-window-size/option-api';

library.add(faCircleExclamation)
library.add(faSpinner)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueWindowSizePlugin);
app.use(router)
app.use(BootstrapVue)
app.use(IconsPlugin)
app.mount('#app')
