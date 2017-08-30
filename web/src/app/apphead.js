import Vue from 'vue'
import router from '../router/index.js'

const state = {
	search:[]
}

const mutations = {
	dailyspecial: () => {
		router.push({name: 'dailyspecial'})
	},
	recommend: () => {
		router.push({name: 'recommend'})
	},
	classify: () => {
		router.push({name: 'classify'})
	},
	steps: () => {
		router.push({name: 'steps'})
	},
	order: () => {
		router.push({name: 'order'})
	},
	search: () => {
		//router.push({name: 'search'})
	},
	searchshow: (data, formdata) =>{
		console.log('点击事件',formdata)
		//this.a.state.searData = formdata.searData;
		Vue.prototype.sear = formdata;
		state.search = formdata;
		console.log(this)
		/*router.push({name: 'search',params:formdata})*/
	},
	showdone:() => {
		router.push({name: 'showdone'})
	}

}

const actions = {
	dailyspecial: (events) => {
		events.commit('dailyspecial')
	},
	recommend: (events) => {
		events.commit('recommend')
	},
	classify: (events) => {
		events.commit('classify')
	},
	steps: (events) => {
		events.commit('steps')
	},
	order: (events) => {
		events.commit('order')
	},
	search: (events) => {
		events.commit('search')
	},
	searchshow: (events,val) => {
		events.commit('searchshow',{searData:val})
	},
	showdone: (events, val) => {
		events.commit('showdone')
	},

}

export default {
	state,
	mutations,
	actions
}