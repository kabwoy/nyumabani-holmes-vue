<template>
   <JumboTron/>
   <HighestRatedSection/>
   <OtherHouses/>
    <BottomNavbar/>
   <Footer/>
</template>

<script lang="ts">
// @ts-ignore
import { Ref, ref } from 'vue'
import NavBar from './NavBar.vue'
import JumboTron from './JumboTron.vue'
import HighestRatedSection from './HighestRatedSection.vue'
import OtherHouses from './OtherHouses.vue'
import Footer from './Footer.vue'
import BottomNavbar from './BottomNavbar.vue'
export default{
    components:{
        NavBar,
        JumboTron,
        HighestRatedSection,
        OtherHouses,
        Footer,
        BottomNavbar
    },
    setup() {
        
        const name:Ref<number> = ref(1)

        return{
            name
        }
        
    },
}
</script>

<style scoped>

</style>
