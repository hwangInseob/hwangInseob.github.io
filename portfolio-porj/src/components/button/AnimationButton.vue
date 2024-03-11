<template>
    <div class="ani_button_wrapper">
        <div class="btn_wrapper">
            <span :class="{test_animation: isSend}"> Send </span>
            <div :class="{circle_to_left: isSend, circle_to_right: goToRight}" @click="onClickSend">
                <img src="@/assets/img/button/btn_arrow_right.png"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isSend = ref(false)
const goToRight = ref(false)

function onClickSend() {
    isSend.value = true

    setTimeout(() => {
        goToRight.value = true
    }, 500);
}

</script>

<style scoped lang="scss">
.ani_button_wrapper{
    display:flex;
    width: 300px;
    height: 200px;
    background-color: #AAA;

    align-items: center;
    justify-content: center;

    .btn_wrapper {
        position: relative;
        display: flex;
        width: 150px;
        height: 70px;
        border-radius: 40px;
        background-color: rgb(54, 163, 149);

        align-items: center;

        span{
            position: absolute;
            color:white;
            font-size: 20px;
            left: 20px;
        }

        div{
            position:absolute;
            cursor:pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            right: 10px;
            border-radius: 100px;
            background-color: white;

            img{
                width:50%;
            }
        }
    }
}

.test_animation{
    animation-duration: .5s;
    animation-name: test_animation;
    animation-fill-mode: forwards;
}

@keyframes test_animation{
    from{
        opacity: 1;
    }

    to{
        opacity: 0;
    }
}

.circle_to_left{
    animation-duration: .5s;
    animation-name: circle_to_left;
    animation-fill-mode: forwards;
}

@keyframes circle_to_left {
    from{
        right:10px;
    }

    to{
        right:90px;
    }
}

.circle_to_right{
    animation-duration: .3s;
    animation-name: circle_to_right;
    animation-fill-mode: forwards;
}

@keyframes circle_to_right {
    from{
        right:90px;
        opacity: 1;
    }

    50%{
        opacity: 1;
    }

    to{
        right:-50px;
        opacity: 0;
    }
}
</style>