import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
<<<<<<< HEAD
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'



Vue.use(Vuex)
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
