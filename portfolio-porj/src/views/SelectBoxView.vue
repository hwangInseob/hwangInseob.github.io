<template>
  <div class="w-fit m-auto relative top-[800px]">
      <div ref="baseOfCalc" class="relative inline-block text-left">
        <div>
          <button 
                  type="button" 
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md 
                          bg-white px-3 py-2 text-sm font-semibold text-gray-900 
                          shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
                  id="menu-button" 
                  aria-expanded="true" 
                  aria-haspopup="true"
                  @click="onClickOption">
            Options
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

    <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    <!-- 
      ------------------
      --      UP      --
      ------------------
      bottom-12
      origin-top-right
      
      ------------------
      --      DOWN      --
      ------------------
      origin-bottom-right
    -->
    <!--  -->
      <div ref="optionContainer" 
            class="absolute right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            :class="{'origin-top-right': !isUpSide, 'origin-bottom-right': isUpSide, 'bottom-12': isUpSide, 'invisible': !isShowOption}"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1 flex" role="none"
          :class="{'flex-col': !isUpSide, 'flex-col-reverse': isUpSide}">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <a href="#" class="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
          <form method="POST" action="#" role="none">
            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-indigo-400 w-[10px] h-[10px] absolute top-[1500px]"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'


const baseOfCalc = ref(null)
const optionSizeInfo = ref({})
const optionContainer = ref(null)
const isShowOption = ref(false)

const isUpSide = ref(false)

function closeMenu() {
  isShowOption.value = false
}

function openMenu() {
  isShowOption.value = true
}

function onClickOption() {
  getOpenDirection()
  if(isShowOption.value) {
    closeMenu()
  } else {
    openMenu()
  }
}

function getOpenDirection() {
  const scrollY = window.scrollY
  const viewHeight = document.documentElement.clientHeight

  const viewInfo = {
    top: scrollY,
    bottom: viewHeight
  }

  if((optionSizeInfo.value.height + baseOfCalc.value.getBoundingClientRect().bottom + 5) < viewInfo.bottom) {
    isUpSide.value = false
  } else {
    isUpSide.value = true
  }

}

function getBaseOptionSizeInfo() {
  const domRectInfo = optionContainer.value.getBoundingClientRect()
  optionSizeInfo.value.x = domRectInfo.x
  optionSizeInfo.value.y = domRectInfo.y
  optionSizeInfo.value.left = domRectInfo.left
  optionSizeInfo.value.top = domRectInfo.top
  optionSizeInfo.value.width = domRectInfo.width
  optionSizeInfo.value.height = domRectInfo.height
}

function addScrollEvent() {
  window.addEventListener('scroll', getOpenDirection)
  window.addEventListener('resize', getOpenDirection)
}

onMounted(() => {
  getBaseOptionSizeInfo()
  addScrollEvent()
})
</script>

<style scoped lang="scss">
</style>