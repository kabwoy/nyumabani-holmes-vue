<template>
   <HomePage/>
    
    
</template>

<script lang="ts">

    import {reactive , ref} from 'vue';
    // @ts-ignore
    import StarRating from 'vue-star-rating';
    import HomePage from './components/HomePage.vue';
    import JumboTron from './components/JumboTron.vue';
    import { onMounted } from 'vue'
    import { initFlowbite , initDropdowns } from 'flowbite'

    export default {

        components:{
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
