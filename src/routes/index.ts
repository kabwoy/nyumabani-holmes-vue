import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/" , component:HomePage , name:"home"},
        {path:"/about" , component:About, name:"about"},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

})

export default router;