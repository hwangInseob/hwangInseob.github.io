<template>
<div class="page_wrapper">
    <div class="button_wrapper">
        <div v-for="(item, index) of buttonInfo"
            class="btn"
            :class="{on: item.isOn}"
            @click="() => item.isOn = !item.isOn"
            :key="index">
            <div class="btn_circle"></div>
        </div>
        
    </div>

    <AnimationButton></AnimationButton>

    <div class="button_wrapper2">
        <div class="btn_menu" :class="{open: isMenuOpen}" @click="onClickMenuOpen">
            <img src="@/assets/img/button/btn_plus.png"/>
        </div>
        <div ref="subMenuListRef" v-for="(item,index) of menuButtons" class="btn_menu_sub" :key="index">
            <img :src="item.imgSrc"/>
        </div>
    </div>

</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AnimationButton from '@/components/button/AnimationButton.vue'

const buttonInfo = ref([
    {
        isOn: false
    }, 
    {
        isOn: true
    }
])

const menuButtons = ref([
    {
        imgSrc: new URL("@/assets/img/button/btn_chat.png", import.meta.url)
    },
    {
        imgSrc: new URL("@/assets/img/button/btn_noti.png", import.meta.url)
    },
    {
        imgSrc: new URL("@/assets/img/button/btn_call.png", import.meta.url)
    }
])
const subMenuListRef = ref(null)
const isMenuOpen = ref(false)
const oneSubMenuWidth = ref(0)
const subMenuPadding = ref(10)
const firstSubMenuBottom = ref(80)
function onClickMenuOpen() {
    isMenuOpen.value = !isMenuOpen.value

    if(isMenuOpen.value) {
        subMenuListRef.value.map((el,index) => {
            el.style.bottom = firstSubMenuBottom.value + oneSubMenuWidth.value * (index) + subMenuPadding.value*(index) + 'px'
        })
    } else {
        subMenuListRef.value.map((el) => {
            el.style.bottom = '20px'
        })
    }
}

function getOneSubMenuSize() {
    if(subMenuListRef.value.length) {
        oneSubMenuWidth.value = subMenuListRef.value[0].getBoundingClientRect().width
    }
}

onMounted(() => {
    getOneSubMenuSize()
})
</script>

<style scoped lang="scss">
.page_wrapper{
    display: flex;
    width:100%;
    height:100%;
}

.button_wrapper{
    display:flex;
    width: 887px;
    height: 225px;
    background-color: #585858;
    justify-content: center;
    align-items: center;

    .btn{
        display:flex;
        margin:auto;
        width:378px;
        height:185px;
        border-radius: 100px;
        background-color: #D9D9D9;
        box-shadow: inset 7px 8px 15px 0px #0000004d, inset -7px -8px 15px 0px #ffffffc2;

        .btn_circle{
            position:relative;
            width:139px;
            height:139px;
            margin: auto 0;
            left:7%;
            background-color: #D9D9D9;
            transition: all linear .1s;
            // box-shadow: inset 10px 8px 15px 1px #ffffff73, inset -10px -8px 15px 1px rgb(174 174 174 / 45%), 7px 6px 17px 0px #0000001f;
            box-shadow: inset 10px 8px 15px 1px #ffffffb6, inset -10px -8px 15px 1px rgba(134, 134, 134, 0.521), 7px 6px 17px 0px #00000041;
            border-radius: 100px;
        }

        &.on{
            .btn_circle{
                left:57%;
                // box-shadow: inset -10px 8px 15px 1px #ffffffb6, inset 10px -8px 15px 1px rgba(134, 134, 134, 0.521), -7px 6px 17px 0px #00000041;
            }
        }
    }
}

.button_wrapper2{
    position:relative;
    width: 200px;
    height: 500px;
    background-color: #585858;
    display:flex;
    justify-content: center;
    margin-left:auto;
    
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    .btn_menu {
        display:flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        bottom: 20px;
        background-color: orange;
        border-radius: 50px;
        cursor: pointer;
        z-index: 1;
        &.open{
            img{
                transform: rotate(225deg)
            }
        }

        img{
            transition:all linear .2s;
            width:30px;
            height:30px;
        }
    }

    .btn_menu_sub{
        display:flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        bottom: 20px;
        transition: all ease-in .2s;
        background-color: white;
        border-radius: 50px;
        cursor: pointer;
        img{
            transition:all linear .2s;
            width:30px;
            height:30px;
        }
    }
}

</style>