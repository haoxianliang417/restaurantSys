import ElementUI from 'element-ui'
import Vue from 'vue';
import store from './vuex/store'
import router from './router/'
import App from './App.vue'

Vue.use(ElementUI)

var designWidth = 768, rem2px = 100;
document.documentElement.style.fontSize =
  ((window.innerWidth / designWidth) * rem2px) + 'px';
  //console.log(document.documentElement.style.fontSize)
  
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})