import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import loginList from "@/views/loginList.vue";
import homeList from "@/views/homeList.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: homeList
  },
  {
    path: '/books',
    name:'books',
    component: () => import('../views/bookList.vue')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
