<template>
  <section class="mt-10">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div class="flex flex-wrap items-center mx-auto max-w-7xl">
        <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div class="relative w-full max-w-lg">
              <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

              <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
              <div class="relative">
                <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" :src="house.image">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> {{house.name}} </span>
          <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">{{house.name}}</h1>
          <p class="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
          <div class="flex flex-wrap w-full mt-2 -mx-4 text-left">

          </div>
        </div>
      </div>
    </div>
  </section>


  <h1 class="mb-4 text-center text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">The Place</span> offers.</h1>
  <p class="text-lg p-4 font-normal text-gray-500 lg:text-xl dark:text-gray-400"></p>


</template>

<script lang="ts">
import {ref , reactive , onMounted} from 'vue'
import {useRouter , useRoute} from 'vue-router'
import axios from "axios";
import Houses from "./Houses.vue";
export default {
  name: "ShowHouse",
  computed: {
    Houses() {
      return Houses
    }
  },
  components: {},
  setup(){
    let house = ref({})
    const router = useRouter();
    const route = useRoute();
    onMounted(async()=>{
      const id = route.params.id
      const response = await axios(`/houses/${id}`)
      house.value = response.data
    })
    return{
      house
    }
  }

}
</script>

<style scoped>

</style>