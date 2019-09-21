import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const pathManage = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: pathManage
})

export const synaPathManage = {

}
