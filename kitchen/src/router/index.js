import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage  from '../component/homepage/homepage.vue'
import Bill from '../component/bill/bill.vue'


Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path:'/',
			name:'homepage',
			component:homepage,
			children:[{
				path:'/',
				name:'bill',
				component:Bill
			}]

		}
	]
})



export default router;