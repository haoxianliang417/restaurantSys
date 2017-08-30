import Vue from 'vue'
import axios from 'axios'
import $ from 'jquery'


var url = 'http://localhost:8888/bill';

const state = {
}

const mutations = {
	login: (data, formData) => {
		//console.log(777);
		axios({
			method:'get',
			url:url,
		})
		.then(function(res){
  			console.log(res)
  			$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide()
		})
		.catch(function(err){
		  console.log(err)
		})
	},
	getInfo:()=>{
		axios({
			method:'get',
			url:url,
			})
			.then(function(res){
	  			console.log(666,res.data.data)
	  			console.log(res)
	  			$('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide()
	  			var dataMenu = res.data.data;
	  			for(var i=0;i<self.data.length;i++){
	  				dataMenu[i]['detail']= JSON.parse(dataMenu[i]['detail'])
	  				console.log(dataMenu[i]['detail']);
	  			}	  			
	  			console.log(dataMenu);
	  			self.data = dataMenu;
	
			})
	}

}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData);
		//console.log(events,formData);
		//console.log(formData);
		//console.log(666)
	},
	getInfo:()=>{
		events.commit('getInfo', formData);
	}
}

export default {
	state,
	mutations,
	actions
}