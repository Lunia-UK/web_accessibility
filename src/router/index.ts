import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Learn from '../views/Learn.vue'
import Check from '../views/Check.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../views/Learn.vue')
  },
  {
    path: '/check',
    name: 'Check',
    component: () => import('../views/Check.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
