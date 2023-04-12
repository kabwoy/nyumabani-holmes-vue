import { createApp } from 'vue'
import './style.css'
import 'flowbite/plugin'
import router from './routes/index'
import App from './App.vue';

const app = createApp(App)
app.use(router)
app.mount('#app')
