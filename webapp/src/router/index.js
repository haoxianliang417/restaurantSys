import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage  from '../component/homepage/homepage.vue'
import login from '../component/login/login.vue'
<<<<<<< HEAD
import foodComponent from '../component/food/food.vue'
import seatComponent from '../component/seat/seat.vue'
import indentComponent from '../component/indent/indent.vue'
import commentComponent from '../component/comment/comment.vue'
import reminderComponent from '../component/reminder/reminder.vue'
import tableComponent from '../component/table/table.vue'
=======

>>>>>>> 7af58224622e2a7f8c35482a8843112ec8963168
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
<<<<<<< HEAD
			path: '/',
			name: 'food',
			component: foodComponent

		},{
			path: '/seat/:id',
			name: 'seat',
			component: seatComponent
		},{
			path: '/indent/:id',
			name: 'indent',
			component: indentComponent
		},{
			path: '/comment/:id',
			name: 'comment',
			component: commentComponent
		},{
			path: '/reminder/:id',
			name: 'reminder',
			component: reminderComponent
		},{
			path: '/table/:id',
			name: 'table',
			component: tableComponent
=======
			path:'/',
			name:'homepage',
			component:homepage,

		},{
			path:'/login',
			name:'login',
			component:login
>>>>>>> 7af58224622e2a7f8c35482a8843112ec8963168
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