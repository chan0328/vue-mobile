import Vue from 'vue'
import Vuex from 'vuex'
import common from './common.js'
Vue.use(Vuex)

var store = new Vuex.Store({
	modules:{
		commonModel:common
	}
})

export default store