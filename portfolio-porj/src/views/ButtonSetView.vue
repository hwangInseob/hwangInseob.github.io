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
</div>
</template>

<script setup>
import { ref } from 'vue'

const buttonInfo = ref([
    {
        isOn: false
    }, 
    {
        isOn: true
    }
])

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
    margin: auto;
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

</style>