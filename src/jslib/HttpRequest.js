import axios from 'axios'
import wx from './wechat/wechat-param'
import router from '../router'
import {ToastPlugin } from 'vux'
import Vue from 'vue'

Vue.prototype.$vux = ToastPlugin;

const upBaseUrl = '';//线上api
const instance = axios.create({
    baseURL: upBaseUrl,
    timeout: 20000,
    headers:{
      // "Content-Type":'application/x-www-form-urlencoded; charset=utf-8',
      "Content-Type":'application/json',
    },
})

instance.interceptors.request.use(
    config => {
        //统一在headers加上token
        if (localStorage.getItem('test_token')) {
            instance.defaults.headers.authorization = localStorage.getItem('test_token');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(function (response) {
	return response
}, function (error) {
    //token失效重新登录
    if(error.response.status==401){
        localStorage.clear();
        document.location.href= `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx.appId}&redirect_uri=${wx.redirectUrl}&response_type=code&scope=${wx.loginStyle}&state=${wx.param}#wechat_redirect`;
    }
    //提示未知错误
    if(error.response.status==404){
        Vue.$vux.toast.show({
            text: error.response.data.error,
            type:'text'
        })
        return Promise.reject(error.response.data.error)
    }
	return Promise.reject(error)
})

export  {
    instance,
    upBaseUrl
}