import {instance as axios} from '../jslib/HttpRequest'

//登录
function login(obj){
	return new Promise((resolve,reject)=>{
		axios({
			url:`user/login/${obj.code}`,
			method: 'GET',
		})
		.then((response)=>{
            resolve(response)
		})
		.catch((error)=>{
			console.log(error,'xxxxx')
		})
	})
}
//分享
function getShare(obj){
	return new Promise((resolve,reject)=>{
		axios({
			url:`wechat/getConfig`,
			method: 'GET',
		})
		.then((response)=>{
            resolve(response)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
export  {
	login,
	getShare
}