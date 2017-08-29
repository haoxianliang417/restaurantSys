import Vue from 'vue'
import axios from 'axios'
import router from '../../router/index'
import $ from 'jquery'

const state = {
}

const mutations = {
	login: (data, formData) => {
		console.log(777)
		// if(formData.username == 'dk' && formData.password == 'dk'){
		// 	router.push({name: 'home'})
		// } else {
			//formData.grant_type = 'password'
			// http.post('login/index', formData)
			// .then(response => {
			// 	router.push({name: 'home'})
			// })
		// }
		axios({
			method:'get',
			url:'http://10.3.134.114:8888/test',
		})
		.then(function(res){
  			console.log(res)
  			$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide()
		})
		.catch(function(err){
		  console.log(err)
		})
	}
}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData);
		console.log(events,formData);
		console.log(formData);
		console.log(666)
	}
}

export default {
	state,
	mutations,
	actions
}