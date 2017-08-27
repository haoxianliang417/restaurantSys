import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import login from '../components/login/login'
import home from '../components/home/home.js'
import apphead from '../app/apphead.js'
=======
//添加控件的js文件，在控件下的vue可以
import login from '../component/login/login'
>>>>>>> 93ad95ee7b56fef5cfc527ff3664b165196e56f4

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        apphead
    }
})