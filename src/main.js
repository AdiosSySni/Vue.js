import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'



createApp(App).use(router, createPinia()).mount('#app')
