import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import $ from 'jquery'


Vue.use(Vuex);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
var designWidth = 375, rem2px = 100;
document.documentElement.style.fontSize =
((window.innerWidth / designWidth) * rem2px) + 'px';
console.log(document.documentElement.style.fontSize)