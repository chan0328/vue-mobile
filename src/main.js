// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store/store.js'
import router from './router'
import './jslib/controlSize'
import './filter/all.js'


import allServer from './server/allServer.js'
import utils from './jslib/utils.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

require('./assets/style/reset.css')
require('./assets/style/animate.css')
require('swiper/dist/css/swiper.css')
require('./jslib/jquery.min.js')
require('./jslib/router-intercept')

require('./assets/font/iconfont.css')   //标签内容填例如：&#xe61d;

Vue.prototype.$utils = utils;
  
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


import { XButton } from 'vux'
Vue.component('x-button', XButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
