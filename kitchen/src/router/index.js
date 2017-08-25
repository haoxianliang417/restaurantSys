import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage  from '../component/homepage/homepage.vue'
import login from '../component/login/login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path:'/',
			name:'homepage',
			component:homepage,

		},{
			path:'/login',
			name:'login',
			component:login
		}
	]
})

router.beforeEach((to,from,next)=>{
	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
		router.replace('login');
		next();
	} 
	next();
})

export default router;