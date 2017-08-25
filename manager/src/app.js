import Vue from 'vue'
// import App from './App.vue'
// import router from './router/index'
// import store from './vuex/store'

import manage from './component/manage/manage.vue'

new Vue({
  el: '#app',
 
  render: h => h(manage)
})
