import Vue from 'vue'
import axios from 'axios'
import $ from 'jquery'



const state = {
}

const mutations = {
	login: (data, formData) => {
		//console.log(777);
		axios({
			method:'get',
			url:'http://localhost:8888/',
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
		//console.log(events,formData);
		//console.log(formData);
		//console.log(666)
	}
}

export default {
	state,
	mutations,
	actions
}