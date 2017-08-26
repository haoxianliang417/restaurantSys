import Vue from 'vue'
import Vuex from 'vuex'
//添加控件的js文件，在控件下的vue可以调用js里面的方法
import home from '../component/homepage/homepage.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		//存放上面声明的js文件
		home
	}
	
})