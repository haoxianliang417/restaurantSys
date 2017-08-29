import Vue from 'vue'
import Vuex from 'vuex'
//添加控件的js文件，在控件下的vue可以调用js里面的方法
import login from '../component/login/login'
import comment from '../component/comment/comment.js'
import table from '../component/table/table.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		//存放上面声明的js文件
		login,
		comment,
        table
	}
	
})