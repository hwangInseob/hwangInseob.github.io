<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

const defaultLayout = 'EmptyLayout'

const layout = computed(() => route.meta?.layout || defaultLayout)

</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style scoped>
</style>
