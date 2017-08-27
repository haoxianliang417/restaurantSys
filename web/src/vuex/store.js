import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/login'
import home from '../components/home/home.js'
import apphead from '../app/apphead.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        apphead
    }
})