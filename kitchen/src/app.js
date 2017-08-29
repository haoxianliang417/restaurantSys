import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import ElementUI from 'element-ui'


Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
