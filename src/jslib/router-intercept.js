import wxLogin from './wechat/wechat-login'
import router from '../router'
import wxData from './wechat/wechat-param'
import utils from '../jslib/utils'
import wxShare from './wechat/wechat-share'

var ua = navigator.userAgent.toLowerCase();//判断当前浏览器环境

router.beforeEach((to, from, next) => {
    utils.changeTitle(to.meta.title);//修改标题
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //检查是否授权登录
        wxLogin(wxData);
        //从微信分享进入时去除form参数
        function getQueryString(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
            return null;
        }
        //从分享进入时去除form参数
        if (getQueryString("from") == "timeline") {
            var str = window.location.href;
            str = str.replace("from=timeline", "");
            if (getQueryString("isappinstalled") == "0") {
                var str1;
                str1 = str.replace("isappinstalled=0", "");
                if (str1.indexOf("?#")) {
                    var redirectUrl = "http://" + location.hostname + '/';
                    let url2 = redirectUrl + '?#' + to.fullPath ;
                    window.location.href = url2;
                } else {
                    var redirectUrl = "http://" + location.hostname  + '/';
                    let url2 = redirectUrl + '?#' + to.fullPath ;
                    window.location.href = url2;
                }
            } else {
                window.location.href = str;
            }
        } else if (getQueryString("from") == "groupmessage") {
            var str = window.location.href;
            str = str.replace("from=groupmessage", "");
            if (getQueryString("isappinstalled") == "0") {
                var str1;
                str1 = str.replace("isappinstalled=0", "");
                if (str1.indexOf("?#")) {
                    var redirectUrl = "http://" + location.hostname  + '/';
                    let url2 = redirectUrl + '?#' + to.fullPath ;
                    window.location.href = url2;
                } else {
                    var redirectUrl = "http://" + location.hostname  + '/';
                    let url2 = redirectUrl + '?#' + to.fullPath ;
                    window.location.href = url2;
                }
            } else {
                window.location.href = str;
            }
        } else if (getQueryString("from") == "singlemessage") {
            var str = window.location.href;
            str = str.replace("from=singlemessage", "");
            if (getQueryString("isappinstalled") == "0") {
                var str1;
                str1 = str.replace("isappinstalled=0", "");
                if (str1.indexOf("?#")) {
                    var redirectUrl = "http://" + location.hostname  + '/';
                    let url2 = redirectUrl + '?#' + to.fullPath ;
                    window.location.href = url2;
                } else {
                    var redirectUrl = "http://" + location.hostname  + '/';
                    let url2 = redirectUrl + '?#' + to.fullPath ;
                    window.location.href = url2;
                }
            } else {
                window.location.href = str;
            }
        }
        next();
    }else{
        next();
    }
})
router.afterEach((to,from,next)=>{
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        let index=to.meta.theIndex;
        wxShare(wxData,index);
    } else {
        console.log('外置浏览器');
    }
})