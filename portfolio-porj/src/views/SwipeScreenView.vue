<template>

    <div class="thumb">
        <div v-for="(item,index) of screenList" 
            class="thumb_card" 
            :class="{active: index === currentScreenIndex}"
            @click="onClickThumb(index)"
            :key="index">
            <span>
                {{ item.thumbTitle }}
            </span>
        </div>
    </div>
    <div class="screen_wrapper">
        <div class="screen">
            <ul ref="screenRef" @mousedown="onMouseDown" :style="{transform: 'translateX('+xPosition+'px)'}">
                <li v-for="(item,index) of screenList" 
                    :key="index">
                    <div class="screen_item" style="background-size: 100% 100%;"
                        :style="{'background-image': `url(${item.img})`}">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const xPosition = ref(0)

const isDown = ref(false)
const screenRef = ref(null)
const screenList = ref([
    {
        img: new URL('@/assets/img/swipeView/page_1.png', import.meta.url),
        thumbTitle: "Sign Up"
    },
    {
        img: new URL('@/assets/img/swipeView/page_1.png', import.meta.url),
        thumbTitle: "Log In"
    },
    {
        img: new URL('@/assets/img/swipeView/page_1.png', import.meta.url),
        thumbTitle: "Feed"
    }
])
const currentScreenIndex = ref(0)
const widthOfOneScreen = ref(0)
const itemCount = ref(3)
const swipeTransitionId = ref(0)
const transitionDuration = ref(100)

function onMouseMove(e) {
    e.preventDefault()
    console.log(e.movementX)
    console.log(e.movementY)
    if(isDown.value) {
        let xMove = e.movementX

        if(xMove + xPosition.value > 0) {
            xPosition.value = 0
        } else if(xPosition.value + xMove < -(widthOfOneScreen.value * (itemCount.value-1))){
            xPosition.value = -(widthOfOneScreen.value * (itemCount.value-1))
        } else {
            xPosition.value += xMove
        }
    }

    getScreenOfCurrentPosition()
}

function onMouseDown(e) {  
    e.preventDefault()
    clearTimeout(swipeTransitionId.value)
    deleteTransition(0)
    isDown.value = true

}

function onMouseUp(e) {  
    e.preventDefault()
    isDown.value = false
    console.log(e)
    fitToScreen()
}

function onClickThumb(index) {
    currentScreenIndex.value = index
    fitToScreen()
}

function addTransition() {
    screenRef.value.style.transition = `transform ease-in ${transitionDuration.value/1000}s`
}

function deleteTransition(timeout) {
    swipeTransitionId.value = setTimeout(() => {
        screenRef.value.style.transition = "none"
    }, timeout);
}

function getScreenOfCurrentPosition() {
    const currentPos = -(xPosition.value)

    for(let i = 0; i < itemCount.value; i++) {
        const left = i * widthOfOneScreen.value
        const right = i * widthOfOneScreen.value + widthOfOneScreen.value
        
        const basePos = currentPos+(widthOfOneScreen.value*.5)
        if(basePos >=  left && basePos <= right) {
            currentScreenIndex.value = i
            break;
        }
    }
}

function fitToScreen() {
    addTransition()
    
    const left = currentScreenIndex.value * widthOfOneScreen.value
    xPosition.value = -left
    
    deleteTransition(transitionDuration.value)

}

function addSwipeMouseEvent() {
    window.addEventListener("mouseup", onMouseUp)
    window.addEventListener("mousemove", onMouseMove)
}

function getEachItemSize() {
    const items = document.getElementsByClassName("screen_item")
    if(items?.length) {
        widthOfOneScreen.value = items[0].getBoundingClientRect().width

    }
}

onMounted(() => {
    addSwipeMouseEvent()
    getEachItemSize()
})

</script>

<style scoped lang="scss">
.screen_wrapper{
    position: relative;
    margin: 250px auto;
    width: 262px;
    height: 568px;
    background-color: indigo;
    box-shadow: 0px 2px 5px 2px rgb(158, 158, 158);

    .screen{
        position: relative;
        width:100%;
        height:100%;
        white-space: nowrap;
        overflow:hidden;
        ul{
            position: absolute;
            width:100%;
            height:100%;
            white-space:nowrap;
            li{
                display:inline-block;
                width:100%;
                height:100%;
                vertical-align: top;
                .screen_item{
                    width:100%;
                    height:100%;
                }
            }
        }
    }
}

.thumb{
    position: absolute;
    top: 10%;
    margin: 0px calc(50% - 720px);
    width: 1440px;
    height: 100px;
    text-align: center;
    .thumb_card{
        display:inline-block;
        width:100px;
        height: 100%;
        background-color: brown;
        margin: 0 10px 0 0;
        border: 2px solid rgb(255, 255, 255);
        opacity: .2;
        transition: all ease-in .1s;
        cursor: pointer;
        &:last-child{
            margin:0 0;
        }
        &.active{
            opacity: 1;
            border: 2px solid black;
        }
    }
}
</style>