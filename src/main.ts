import '@/assets/styles/base.scss'
import "@/assets/styles/main.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

createApp(App).mount("#app");

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
