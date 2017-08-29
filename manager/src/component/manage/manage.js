import Vue from 'vue';

import axios from 'axios';


const state = {
	idx: '02',
  	num: '01',
 	name: '王小虎',
  	classify: '粤菜',
  	detail: '好吃不上火',
  	price: 12,
  	vipPrice: 10,
  	ban : 'false',
  	blockUp: '停止',
}

const actions = {
	
	btn: (store) => {
		console.log('这是store')
		store.commit('btn')
	},
	getFoodMenu: (store,menu) => {
		console.log('action',menu);
		// axios.get( 'http://localhost:8888/getFood?menu=' + menu)
		// .then(function(res){
		// 	console.log(res.data.munuStyle);
		// 	const data = res.data.munuStyle;
		// 	store.commit('getFoodMenu',data);
		// })
		
	}
}

const mutations = {
	
	btn: (store) => {
		console.log('这是测试文本')
	},
	getFoodMenu: (store,data) => {
		//改变state 的值 数组
		console.log('mutations',data);
		// for(let i = 0 ; i < data.length; i ++){
		// 	state.classify.push(data[i].menuName);
			
		// }
		// console.log(state.classify);
	}
} 

export default {
	state,
	actions,
	mutations,
}