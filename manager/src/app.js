import Vue from 'vue'
// import App from './App.vue'
// import router from './router/index'
// import store from './vuex/store'

import manage from './component/manage/manage.vue';

import store from './vuex/store';

Vue.prototype.hm = 'http://localhost:8888/';

new Vue({
  el: '#app',
  store,
  render: h => h(manage)
})
