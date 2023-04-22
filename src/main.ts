import { createApp } from 'vue'
import './style.css'
import 'flowbite/plugin'
import router from './routes/index'
import App from './App.vue';
import NavBar from "./components/NavBar.vue";
import HomePage from './components/HomePage.vue';
// import NavBar from './components/NavBar.vue'
import {createPinia} from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3333"
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('NavBar' , NavBar)
app.mount('#app')
