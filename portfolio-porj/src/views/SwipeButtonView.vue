<template>

    <div class="relative top-[200px] left-[300px]
            w-[500px] h-[55px] bg-[#EEE] flex justify-center items-center rounded-[30px]">

        <span v-for="(item, index) of menuList" :key="index"
            class="h-full cursor-pointer transition-all ease-linear delay-[100ms] flex items-center justify-center"
            :class="['menuList', spanClass, {'text-white': index === currentMenuIndex}]" @click="onClickMenu(index)" @mouseenter="onHoverMenu(index)" @mouseleave="onMouseleave">
            {{ item }}
        </span>
        <div ref="blackRound" 
            class="testtarget absolute bg-[rgb(2,0,36)] h-full rounded-[30px] left-[0px] transition-all ease-linear duration-[100ms]
                    bg-[linear-gradient(133deg,_rgba(2,0,36,1),_rgba(25,25,25,1)_29%,_rgba(98,98,98,1))]"></div>

        <div ref="hoverRound" 
            class="absolute bg-[rgb(2,0,36)] h-full rounded-[30px] left-[0px] transition-all ease-linear duration-[100ms] opacity-[.1]
                    bg-[linear-gradient(133deg,_rgba(2,0,36,1),_rgba(25,25,25,1)_29%,_rgba(98,98,98,1))]"
            :style="{'visibility': hoverMenuIndex || hoverMenuIndex === 0 ? 'visible' : 'hidden'}"></div>
    </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'


const menuList = ref(["Menu 1", "Menu 2", "Menu 3", "Menu 4"])
const spanClass = ref("flex-1 text-center z-[1]")
const baseLeft = ref(0)
const oneMenuSizeInfo = ref([])
const currentMenuIndex = ref(0)
const hoverMenuIndex = ref(null)
const blackRound = ref(null)
const hoverRound = ref(null)

watch(hoverMenuIndex, () => {
    if(hoverMenuIndex.value || hoverMenuIndex.value === 0) {
        hoverRound.value.style.left = oneMenuSizeInfo.value[hoverMenuIndex.value].left - baseLeft.value + 'px'
    } else {
        //nohting
    }
})

watch(currentMenuIndex, () => {
    blackRound.value.style.left = oneMenuSizeInfo.value[currentMenuIndex.value].left - baseLeft.value + 'px'
})

function onHoverMenu(index) {
    hoverMenuIndex.value = index
}

function onMouseleave() {
    hoverMenuIndex.value = null
}

function onClickMenu(index) {
    currentMenuIndex.value = index
}

function getOneMenuSize() {
    const spans = [...document.getElementsByClassName("menuList")]
    
    oneMenuSizeInfo.value = []

    if(spans?.length) {
        spans.map( (el, index) => {

            if( index === 0) {
                baseLeft.value = el.getBoundingClientRect().left
            }

            blackRound.value.style.width = el.getBoundingClientRect().width + 'px'
            hoverRound.value.style.width = el.getBoundingClientRect().width + 'px'

            oneMenuSizeInfo.value.push({
                width: el.getBoundingClientRect().width,
                left: el.getBoundingClientRect().left
            })
        })
    }
}

onMounted(() => {
    getOneMenuSize()
})

</script>

<style lang="scss" scoped>



</style>