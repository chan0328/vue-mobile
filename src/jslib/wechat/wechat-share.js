import {instance as axios} from '../HttpRequest'

function wxShare(wxData,str){
    var aNewPort = window.location.port;
    var aNewStr = ':' + aNewPort+'/';
    setTimeout(() => {
        console.log(window.location.href.match(/#(\S*)\?/))
        if(window.location.href.match(/#(\S*)\?/)[1]){
            var theHref = window.location.href.match(/#(\S*)\?/)[1];
        }
        var redirectUrl = `http://${location.hostname}/#${theHref}?str=`+str;
        console.log(redirectUrl)
        let aUrl = window.location.href.split('#')[0];
        var url2 = redirectUrl ;//分享的地址
        window.scrollTo(0, 0);
        axios({
            url: 'wechat/getConfig',
            method: 'post',
            data:{'url':aUrl}
        })
        .then((res) => {
            //验证配置
            wx.config({
                debug: false,
                appId: res.data.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                signature: res.data.signature,// 必填，签名，见附录1
                //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
                jsApiList: [
                    'onMenuShareAppMessage', 'onMenuShareTimeline'
                ]
            });
            //处理验证失败的信息
            wx.error(function (res) {
                console.log('验证失败返回的信息:', res);
            });
            //处理验证成功的信息
            wx.ready(function () {
                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: wxData.title, // 分享标题
                    link: url2, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: wxData.aImg, // 分享图标
                    success: function (res) {
                        // 用户确认分享后执行的回调函数
                        console.log("分享到朋友圈成功返回的信息为:", res);
                    },
                    cancel: function (res) {
                        // 用户取消分享后执行的回调函数
                        console.log("取消分享到朋友圈返回的信息为:", res);
                    }
                });
                //分享给朋友
                wx.onMenuShareAppMessage({
                    title: wxData.title, // 分享标题
                    desc: wxData.des, // 分享描述
                    link: url2, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: wxData.aImg, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function (res) {
                        // 用户确认分享后执行的回调函数
                        console.log("分享给朋友成功返回的信息为:", res);
                    },
                    cancel: function (res) {
                        // 用户取消分享后执行的回调函数
                        console.log("取消分享给朋友返回的信息为:", res);
                    }
                });
            })
        })
    },500)
}
export default wxShare