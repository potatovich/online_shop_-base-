import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'catalog',
    component: () => import("@/components/v-catalog.vue"),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("@/components/v-cart.vue"),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
