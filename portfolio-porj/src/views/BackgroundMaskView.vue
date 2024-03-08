<template>
    <div class="container" :style="{'background-image': `url(${imgSrc})`}"
        style="background-size: 100% 100%; ">
        <div class="masking"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const imgSrc = ref(new URL("@/assets/img/backgroundMask/testimg.jpg", import.meta.url))


onMounted(() => {
    document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const container = document.querySelector(".container");
        const { width, height } = container.getBoundingClientRect();

        // 마우스 포인터 위치를 비율로 변환
        const x = clientX / width;
        const y = clientY / height;

        // CSS 변수 설정
        document.body.style.setProperty("--x", x);
        document.body.style.setProperty("--y", y);
        });
})
</script>

<style scoped lang="scss">
.container{
    width:100%;
    height:100%;

    .masking{
        width:100%;
        height:100%;
        background: radial-gradient(circle closest-corner at calc(var(--x) * 100%) calc(var(--y) * 100%), rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.9) 66%);
    }
}

body {
    --x: 0;
    --y: 0;
}
</style>