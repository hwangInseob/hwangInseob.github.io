<template>
    <!-- 
        https://blog.logrocket.com/wp-content/themes/logrocket/assets/logrocket-logo.png
     -->

     <div class="sm:w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto">
        <div 
            class="bg-[var(--color-bg)] 
                    p-[8px] w-full">
            <a class="w-full h-full cursor-pointer" @click="onClickA">
                <div class="w-[100%] lg:w-[60%] bold mx-auto text-center text-white">
                    <h6 class="text-sm font-semibold">Advisory boards aren’t only for executives. 
                        <span class="text-sm font-bold underline">Join the LogRocket Content Advisory Board today</span>
                    </h6>
                </div>
            </a>
        </div>
        <div class="p-[8px] flex flex-1">
            <a class="mr-[10px] w-auto"><img src="https://blog.logrocket.com/wp-content/themes/logrocket/assets/logrocket-logo.png" class="w-[150px]"></a>
            <div class="flex flex-[1]">
                <ul class="gap-[44px] flex items-center p-[10px] text-[var(--color-bg)] text-[12px]">
                    <li>BLOG</li>
                    <li>FEATURES</li>
                    <li>SOLUTIONS</li>
                </ul>
                <div class="flex-1">
                    <div class="bg-[white] text-[var(--color-bg)] float-right flex h-full flex-col justify-center">SIGN IN</div>
                    <div class="bg-[var(--color-bg)] float-right h-full mx-[10px] rounded-[5px] text-[white] text-[13px] font-thin flex flex-col justify-center p-[8px]">START MONITORING FOR FREE</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const onClickA = () => {
    alert("no")
}

</script>

<style scoped lang="scss">
*{
    --color-bg: #764abc;
}
</style>