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
	}
}

export default {
	state,
	mutations,
	actions
}