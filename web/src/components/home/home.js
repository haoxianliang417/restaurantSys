import Vue from 'vue'
import router from '../../router/index'
import axios from 'axios'

const state = {
}

const mutations = {
	login: (data, formData) => {
		
		axios.get('http://localhost:8888/test').then( res =>{
			console.log(res)
		})
	}
}


const actions = {
	login: (events, formData) => {
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}