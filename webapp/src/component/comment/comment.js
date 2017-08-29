import {hai} from '../food/common.js'
import axios from 'axios'
import qs from 'qs'
const state = {
     comments:[]
};
const actions = {
	comment: function(){
		console.log(hai);
		// axios({
		// 	method: 'post',
		// 	url: hai + 'find'
		// }).then((res)=>{
		// 	console.log(res);
		// 	state.comments=res.data;
		// })
		axios.post(hai+'find',qs.stringify({database:'comment'})).then((res)=>{
			state.comments=res.data;
		})
	}
}
const mutations = {

};
export default {
	state,
	actions,
	mutations

}
// 'src/component/comment/hot.json'