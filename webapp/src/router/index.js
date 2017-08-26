import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage  from '../component/homepage/homepage.vue'
import login from '../component/login/login.vue'
import foodComponent from '../component/food/food.vue'
import seatComponent from '../component/seat/seat.vue'
import indentComponent from '../component/indent/indent.vue'
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path:'/:id',
			name:'food',
			component:foodComponent

		},{
			path:'/seat/:id',
			name:'seat',
			component:seatComponent
		},{
			path:'/indent/:id',
			name:'indent',
			component:indentComponent
		}

	]
})

// router.beforeEach((to,from,next)=>{
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router;