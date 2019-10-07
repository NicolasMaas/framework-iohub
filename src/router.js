import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import( /* webpackChunkName: "about" */ './views/Settings.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () => import( /* webpackChunkName: "404" */ './views/404.vue')
    }
  ]
})