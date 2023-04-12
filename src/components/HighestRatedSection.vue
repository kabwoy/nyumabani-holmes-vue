<template>
    <h2 class="text-3xl text-center p-4 font-bold">Our Highest Rated BnBs </h2>
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="blog">
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Mombasa Mansion</h1>
                    <span>$25000.00</span>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet  fugiat perferendis aliquid modi suscipit sed! Iste voluptatum fugiat expedita adipisci. Est, fuga nesciunt.</p>
                 <star-rating star-size=30 :animate=true :rounded-corners=true :increment="0.5"/>
                <button type="button" class="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View More</button>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="blog">
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Kitengela Mansion.</h1>
                    <span>ksh40000.00</span>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.  I labore facere sapiente officiis.
                ndus optio nostrum  vero a doloribus sint! Reiciendis, ducimus rerum!</p>
                 <star-rating star-size=30 :animate=true :rounded-corners=true />
                <button type="button" class="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View More</button>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="blog">
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Malindi Resort</h1>
                    <span>ksh50000.00</span>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                <star-rating star-size=30 :animate=true :rounded-corners=true />
                <button type="button" class="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">View More</button>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>