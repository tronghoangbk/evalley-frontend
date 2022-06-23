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
      component: () => import('./views/customer/Home.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/customer/Profile.vue'),
      meta: {
        layout: 'auth'
      }
    },
    {
      path: '/activate/:username/:token',
      name: 'activate',
      component: () => import('./views/Activate.vue'),
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
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/customer/Product-detail.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/mycart',
      name: 'mycart',
      component: () => import('./views/customer/Mycart.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('./views/customer/Payment.vue'),
      meta: {
        layout: 'default'
      }
    }
  ]
})
