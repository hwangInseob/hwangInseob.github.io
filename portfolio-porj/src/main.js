import '@/assets/base.css'
import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BasicLayout from '@/components/layouts/BasicLayout.vue'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('BasicLayout', BasicLayout)
app.component('EmptyLayout', EmptyLayout)

app.mount('#app')
