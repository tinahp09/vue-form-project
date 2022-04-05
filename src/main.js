import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import { Routes } from './Router.js'
import { store } from './store/Store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(VueAxios, axios)


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')