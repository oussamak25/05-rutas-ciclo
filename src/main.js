import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

//debemos añadir el router para poder usar las rutas
createApp(App).use(router).mount('#app')
