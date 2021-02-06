import { createStore } from 'vuex'
import { mutations } from '@/store/api/mutations'
import { getters } from '@/store/api/getters'
import { ref } from 'vue'

export const store = createStore({
  state: {
    routerUrl: {
      path: '/',
      name: 'Index',
      component: undefined,
      meta: {
        title: 'Zone'
      }
    },
    path: ref('/')
  },
  getters,
  mutations,
  actions: {},
  modules: {}
})
