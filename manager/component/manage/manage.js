import Vue from 'vue';

import axios from 'axios';


const state = {

}

const actions = {
	
	btn: (store) => {
		console.log('这是store')
		store.commit('btn')
	},
}

const mutations = {
	
	btn: (store) => {
		console.log('这是测试文本')
	},
	
} 

export default {
	state,
	actions,
	mutations,
}