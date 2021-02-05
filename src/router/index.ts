import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'Zone'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Zone - Home'
    }
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: {
      title: 'Zone - About'
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
