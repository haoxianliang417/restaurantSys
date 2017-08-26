import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage  from '../component/homepage/homepage.vue'


Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path:'/',
			name:'homepage',
			component:homepage,

		}
	]
})



export default router;