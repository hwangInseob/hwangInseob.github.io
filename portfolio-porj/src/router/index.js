import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta:{
        layout:'EmptyLayout'
      }
    },
    {
      path: '/LayoutHome',
      name: 'layoutHome',
      component: () => import('@/views/LayoutHomeView.vue'),
      meta:{
        layout:'EmptyLayout'
      }
    }
  ]
})

export default router
