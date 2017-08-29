import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '../components/home/home.vue'
import dailyspecialCom from '../components/dailySpecial/dailyspecial.vue'
import recommendCom from '../components/recommend/recommend.vue'
import classifyCom from '../components/classify/classify.vue'
import stepsCom from '../components/steps/steps.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
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
	]
})

export default router