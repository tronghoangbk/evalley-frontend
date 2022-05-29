import Vue from 'vue'
import Router from 'vue-router'
// import VueAxios from 'vue-axios'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( './views/Home.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue'),
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( './views/Register.vue'),
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import( './views/Profile.vue'),
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error'
      }
    }
  ]
})
