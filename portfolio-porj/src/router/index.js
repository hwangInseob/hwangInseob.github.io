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
    },
    {
      path: '/HeaderSet',
      name: 'HeaderSet',
      component: () => import('@/views/HeaderSetView.vue'),
      meta:{
        layout:'EmptyLayout'
      }
    },
    {
      path: '/SelectBox',
      name: 'selectBox',
      component: () => import('@/views/SelectBoxView.vue'),
      meta:{
        layout:'EmptyLayout'
      }
    },
    {
      path: '/SwipeButton',
      name: 'SwipeButton',
      component: () => import('@/views/SwipeButtonView.vue'),
      meta:{
        layout:'EmptyLayout'
      }
    },
    {
      path: '/SwipeScreen',
      name: 'SwipeScreen',
      component: () => import('@/views/SwipeScreenView.vue'),
      meta:{
        layout:'EmptyLayout'
      }
    },
  ]
})

export default router
