import {hai} from '../food/common.js'
import axios from 'axios'
import qs from 'qs'
const state = {
     tables: []
}
const actions = {
  //初始数据请求
	tables:function(){
       axios({
       	 method:'post',
       	 url: hai +'find',
       	 data: qs.stringify({database:'tables'})
       }).then((res)=>{
       	console.log(res);
       	state.tables = res.data;
       })		
	},
  //类型请求数据
  form:function(event,keyword){
     console.log('哈哈',keyword)
     //this.$st.commit(a)
     event.commit('a')
  },
  //状态请求数据
  state:function(evevt,keyword){
       console.log('haha',keyword)
  }

}
const mutations = {
      a:function(){
        console.log('aaaaa')
      }
}
export default  {
	state,
	actions,
	mutations
}