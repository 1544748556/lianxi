import ajax from "./ajax"
// [1、 根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const repAddress = (geohash) => {
    ajax(
        `/position/${geohash}`
    )
}
// [2、获取食品分类列表](# 2 获取食品分类列表) < br / > 
export const repFoodTypes = () => {
    ajax('/index_category')
}
// [3、 根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const repShops = (longitude, latitude) => {
    ajax('/shops', {
        longitude,
        latitude
    })
}
// [4、根据经纬度和关键字搜索商铺列表](# 4 根据经纬度和关键字搜索商铺列表) < br / > 
export const reqSearchGoods = (geohash, keyword) => ajax('/api/search_shops', {
    geohash,
    keyword
})

// [5、 获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptchas = () => ajax('/api/captcha')

// [6、用户名密码登陆](# 6 用户名密码登陆) < br / > 
export const pwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
    name,
    pwd,
    captcha
}, 'POST')
// [7、 发送短信验证码](#7发送短信验证码)<br/>
export const sendCode = phone => ajax('/api/sendcode', {
    phone
})

// [8、手机号验证码登陆](# 8 手机号验证码登陆) < br / >
export const smsLogin = (phone, code) => ajax('/api/login_sms', {
    phone,
    code
}, 'POST')

//  [9、 根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUser = () => ajax('/api/userinfo')

// [10、用户登出](# 10 用户登出) < br / >
export const reqLogout = () => ajax('/api/logout')
/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/shop_info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/shop_ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/shop_goods')