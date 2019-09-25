import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getter'
import tagsView from '@/store/modules/tagsViews'
import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tagsView,
    app,
    permission,
    user,
  },
  getters,
  state: {

  },
  mutations: {

  },
  actions: {

  },
})
