import {hai} from '../food/common.js'
import axios from 'axios'
import qs from 'qs'
const state = {
     tables: [],
     form: [],
     state: []
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
     event.commit('_form',keyword)
  },
  //状态请求数据
  state:function(event,keyword){
     event.commit('_state',keyword)
  }

}
const mutations = {
      _form(data,keyword){
         axios.post(hai+'select',qs.stringify({database:'tables',key:'persons',keyword:keyword}))
         .then((res)=>{
            console.log(res);
            state.tables = res.data;
         })
      },
      _state(data,keyword){
         axios.post(hai+'select',qs.stringify({database:'tables',key:'state',keyword:keyword}))
         .then((res)=>{
            console.log(res);
            state.tables = res.data;
         })
      }
}
export default  {
	state,
	actions,
	mutations
}