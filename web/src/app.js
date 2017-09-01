import ElementUI from 'element-ui'
import Vue from 'vue';
import store from './vuex/store'
import router from './router/'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.baseUrl = '/'

Vue.prototype.wsUrl = 'ws://localhost:8888/'

Vue.prototype.yehua = {}

var socket = io.connect('ws://localhost:8888/')
socket.emit('login',{mid:'yehua登录'})
socket.on('connect',function(){
	console.log('socket连接成功')
})

Vue.use(ElementUI)

Vue.prototype.$ajax = axios

Vue.prototype.storage = window.localStorage

var designWidth = 768, rem2px = 100;
document.documentElement.style.fontSize =
  ((window.innerWidth / designWidth) * rem2px) + 'px';
  
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})