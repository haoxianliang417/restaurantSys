import Vue from 'vue';

import axios from 'axios';
import $ from 'jquery';


const state = {

	foodId: '',
	menu: '',
	tableData2: [],
	styleData: [],
	edit: {
    	name: '',
        region1: '',
        region2: '',
        price: '',
        vipPrice: '',
        desc: '',
        styleNum: '',
        input: '',
    },
}

const actions = {
	
	btn: (store) => {
		console.log('这是store')
		store.commit('btn')
	},
	getId: function(store,event){
		// 当前点击的tr
		state.foodId = $(event.target).parents('tr').find('.foodId')[0].innerText;

		//获取当前点击的信息
		state.edit.name = $(event.target).parents('tr').find('.foodName')[0].innerText;
		state.edit.region2 = $(event.target).parents('tr').find('.foodStyle')[0].innerText;
		state.edit.region1 = $(event.target).parents('tr').find('.foodType')[0].innerText;
		state.edit.price = $(event.target).parents('tr').find('.foodPrice')[0].innerText;
		state.edit.vipPrice = $(event.target).parents('tr').find('.foodVipPrice')[0].innerText;
		state.edit.desc = $(event.target).parents('tr').find('.detail')[0].innerText;
		
		store.commit('getId');

	},
	//请求菜系
	getFoodMenu: function(store,menu){
		state.menu = menu;
		console.log('传过的数据',menu);
		
		axios.get( Vue.prototype.hm + 'getFood?menu=' + state.menu)
			.then(function(res){
				console.log(res);
				let data = res.data.munuStyle;
				
				state.styleNum = data.length;
				
				var tableData = [];

				for(var i = 0 ; i < data.length; i ++){

					tableData[i] = {
					  num: i+1,
					  idx: data[i].menuId,
					  name: data[i].menuName,
			          style: data[i].style,
			          detail : data[i].detail,
			          classify: data[i].type,
			          price: data[i].menuPrice,
			          vipPrice: data[i].vipPrice,
			          ban : '-',
			          blockUp: '-'
					};
					
				}
				
				store.commit('getFoodMenu',tableData)
				
			}.bind(this))
	},
	//模糊搜索
	searchFood: function(store,searchData){
		axios.get( Vue.prototype.hm + 'searchFood?menuName=' + searchData)
				.then(function(res){
					console.log('搜索的数据',res)
					
					let data = res.data.searchFood;
					console.log('请求的搜索数据',data);
					var searchR = [];
					for(var i = 0 ; i < data.length; i ++){

						searchR[i] = {
						  num: i+1,
						  idx: data[i].menuId,
						  name: data[i].menuName,
				          style: data[i].style,
				          detail : data[i].detail,
				          classify: data[i].type,
				          price: data[i].menuPrice,
				          vipPrice: data[i].vipPrice,
				          ban : '-',
				          blockUp: '-'
						};
						
					}
					store.commit('searchFood',searchR);
					
				}.bind(this))

		
	},
	//菜系
	getFoodStyle: function(store,data){
		axios.post( Vue.prototype.hm  +  'getFoodStyle')
			.then(function(res){
				var styleData;		
				styleData = res.data.foodStyle;

				store.commit('getFoodStyle',styleData);
			}.bind(this))
	}
	
}


//修改状态
const mutations = {
	
	btn: (store) => {
		console.log('这是测试文本')
	},
	
	getId: function(store,data){
		
		state.foodId = store.foodId;
		
	},
	getFoodMenu: function(state,data){
		
		
		state.tableData2 = data;
	},
	searchFood: function(state,data){
		state.tableData2 = data;
	},
	getFoodStyle: function(state,data){
		state.styleData = data;
		console.log(state.styleData);
	}
	
} 

export default {
	state,
	actions,
	mutations,
}