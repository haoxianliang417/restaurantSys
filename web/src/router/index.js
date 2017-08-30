import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/home.vue'
import dailyspecialCom from '../components/dailySpecial/dailyspecial.vue'
import recommendCom from '../components/recommend/recommend.vue'
import classifyCom from '../components/classify/classify.vue'
import stepsCom from '../components/steps/steps.vue'
import orderCom from '../components/order/order.vue'
import searchCom from '../components/search/search.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: recommendCom,
	},
	{
		path:'/dailyspecial',
		name:'dailyspecial',
		component:dailyspecialCom
	},
	{
		path:'/recommend',
		name:'recommend',
		component:recommendCom
	},
	{
		path:'/classify',
		name:'classify',
		component:classifyCom
	},
	{
		path:'/steps',
		name:'steps',
		component:stepsCom
	},
	{
		path:'/order',
		name:'order',
		component:orderCom
	},
	{
		path:'/search',
		name:'search',
		component:searchCom
	},
	]
})

export default router