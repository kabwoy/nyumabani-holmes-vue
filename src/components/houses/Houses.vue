<template>
<!--  <p class="mt-[40rem]">{{houses}}</p>-->
  <section class="mt-4 text-white">
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
        <div class="p-6" v-for="house in houses">
          <img class="object-cover object-center w-full mb-8 lg:h-48  rounded-xl" :src="house.image" alt="blog">
          <div class="inline-flex justify-between w-full">
            <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">{{house.name}}</h1>
            <span>${{house.price}}</span>
          </div>
          <p class="inline-flex"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
            <span class="text-bold">{{house.location}}</span>
          </p>
          <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet  fugiat perferendis aliquid modi suscipit sed! Iste voluptatum fugiat expedita adipisci. Est, fuga nesciunt.</p>
          <!--                 <star-rating star-size=30 :animate=true :rounded-corners=true :increment="0.5"/>-->
          <router-link :to="{name:'show' , params:{id:house.id}}" type="button" class="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View More</router-link>
        </div>
      </div>
    </div>
  </section>

</template>

<script  lang="ts">
import {ref, reactive, onMounted, defineComponent, Ref} from 'vue'
import {useHouseStore} from "../../../stores/house-store";
import axios from "axios"
import {useRouter,useRoute} from 'vue-router'
    export default defineComponent({
      name: "Houses",
       setup(){
        const store = useHouseStore()
         const router = useRouter()
         const route = useRoute()
        let houses = reactive([])
        onMounted(async ()=>{
          // const response = await fetch("http://localhost:3333/houses")
          const response = await axios("/houses")
          response.data.map((house:never)=>{
            houses.push(house)
          })
          console.log(response.data)
        })
        return {
          store,
          houses,
        }
      }
    })


</script>

<style scoped>
template{
  color: white;
}
</style>