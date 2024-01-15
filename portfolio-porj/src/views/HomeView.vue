<template>
    <div class="m-3 w-auto h-full flex items-center justify-center flex-wrap">
        <div v-for="(menu, index) of menuList" 
            class="hover:shadow-lg cursor-pointer relative m-1 bg-indigo-100 w-[300px] h-[500px] 
                bg-[url('@/assets/img/test.png')] bg-contain bg-center bg-no-repeat transition-all" 
            @click="onClickMenu(menu.url)"
            :key="index"> 
            <div class="w-full h-full flex justify-center items-center transition-all hover:backdrop-blur-none backdrop-blur-sm">
                <span class="block text-center w-full py-5 bg-white bg-opacity-70 text-lg">{{ menu.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuList = ref([
    { 
        title: 'LAYOUT',
        url: '/LayoutHome'
    },
    { 
        title: 'MENU 2',
        url: ''
    },
    { 
        title: 'MENU 3',
        url: ''
    },
    { 
        title: 'MENU 4',
        url: ''
    }
])

const onClickMenu = (url) => {
    router.push(url)
}

</script>

<style scoped>
</style>