import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Zone'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) { // 如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})
export default router
