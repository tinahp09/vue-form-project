import Vue from 'vue'
import { ButtonPlugin, NavbarPlugin, FormPlugin, LayoutPlugin, FormCheckboxPlugin } from 'bootstrap-vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import { router } from '@/Router'
import { store } from './store/Store.js'
import axios from 'axios'
import { i18n } from './plugins/i18n.js'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import lodash from 'lodash'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import './filters/filter'
import Plugin from './plugins/myPlugin'

Vue.config.productionTip = false




Vue.use(ButtonPlugin)
Vue.use(NavbarPlugin)
Vue.use(FormPlugin)
Vue.use(LayoutPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2);
Vue.use(Plugin)

Vue.prototype._ = lodash




new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')