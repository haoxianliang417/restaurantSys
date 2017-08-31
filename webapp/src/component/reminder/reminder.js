import {hai} from '../food/common.js'
import axios from 'axios'
import qs from 'qs'
const state = {
      reminde:[]
};

const actions = {
    reminder(event){
    	console.log(123)
       event.commit('reminde');
    }
};
const mutations = {
    reminde(){
    	axios.post(hai + 'find',qs.stringify({database:'bill'})).then((res)=>{
    		
            state.reminde = res.data.data[0];
            console.log(state.reminde);
    	})
    }
};

export default {
	state,
	actions,
	mutations
}