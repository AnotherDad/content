// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axois from 'axios'
import store from './store'
import VueAxois from 'vue-axios'
import Eslint from 'element-ui'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import "./mock"
import "./mock/shouce"
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueAxois,Axois,)
Vue.use(Eslint)
Vue.use(Vant)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  components: { App },
  template: '<App/>'
})
