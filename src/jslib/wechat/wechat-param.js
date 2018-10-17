const appId = 'wxe10ee0351418654f';//公众号appid
const redirectUrl = 'http%3a%2f%2ftest.yipage.cn%2f%23%2f';//授权回调地址
const loginStyle = 'snsapi_userinfo';//snsapi_base 静默授权  snsapi_userinfo 用户手动授权
const param = 'STATE';//携带参数，默认不变
const fileName = '';//项目的回调的项目所在路径
const title = '分享功能';//分享的标题
const des = '实现分享功能';//分享的描述
const aImg = 'http://pecwe0956.bkt.clouddn.com/theShareImg.jpg';//分享的图片

export default {
    appId,
    redirectUrl,
    loginStyle,
    param,
    fileName,
    title,
    des,
    aImg
}