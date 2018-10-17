import {login} from '../../server/allServer'

function checkLogin(obj){
    //判断本地是否存在token
    if(!localStorage.getItem('test_token')){
        let url = window.location.href;
        if(url.indexOf('code')>=0){
            var a = url.split("?")[1];
            var b = a.split('&')[0];
            var aCode = b.split('=')[1];
        }else{
            var aCode = 0;
        }
        if(aCode){
            //获取token
            login({
                code:aCode
            }).then(res=>{
                localStorage.setItem('test_token',res.data.token)//本地缓存token
            })
        }else{
            document.location.href= `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${obj.appId}&redirect_uri=${obj.redirectUrl}&response_type=code&scope=${obj.loginStyle}&state=${obj.param}#wechat_redirect`;
        }                                                                                                                                                                  
    }
}
export default checkLogin