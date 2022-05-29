import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/animate.min.css';
Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
