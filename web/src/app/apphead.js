import Vue from 'vue'
import router from '../router/index.js'

const state = {
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
	search: (data, formData) => {
		console.log('根路由',formData)
		router.push({name: 'search', params:formData})
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
	search: (events, val) => {
		events.commit('search',{searData:val})
	},

}

export default {
	state,
	mutations,
	actions
}