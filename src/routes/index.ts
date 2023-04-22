import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'
import Houses from '../components/houses/Houses.vue'
import ShowHouse from '../components/houses/ShowHouse.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/" , component:HomePage , name:"home"},
        {path:"/about" , component:About, name:"about"},
        {path:"/houses" , component:Houses , name:"houses"},
        {path:"/houses/:id" , component:ShowHouse , name:"show"},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

})

export default router;