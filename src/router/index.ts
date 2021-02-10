import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { store } from '@/store'
/* 支持通过路由加载导航栏 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/Index.vue'),
    meta: {
      title: 'Zone'
    }
  },
  {
    path: '/Home',
    name: '工具',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Zone - Home'
    }
  },
  {
    path: '/About',
    name: '个人中心',
    component: () => import('../views/About.vue'),
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
    store.commit('setRoute', to)
  }
  next()
})
export default router
