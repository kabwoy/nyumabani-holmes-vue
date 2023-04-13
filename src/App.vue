<template>
    <NavBar/>
 <router-view></router-view>
</template>

<script lang="ts">

    import {reactive , ref} from 'vue';
    // @ts-ignore
    import StarRating from 'vue-star-rating';
    import HomePage from './components/HomePage.vue';
    import JumboTron from './components/JumboTron.vue';
    import NavBar from './components/NavBar.vue';
    import { onMounted } from 'vue'
    import { initFlowbite , initDropdowns ,initAccordions } from 'flowbite'

    export default {

        components:{
            NavBar,
            StarRating,
            HomePage,
            JumboTron
        },

        setup(){
            let name = ref("kaboi")
            let enabled = ref(false)
            onMounted(() => {
                initFlowbite();
            })
            return{
                name,
                enabled,
            }
        },

    }

</script>

<style scoped>
.star-rating{
    width: 50px;
}
</style>
