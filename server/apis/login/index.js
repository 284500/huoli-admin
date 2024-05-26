import axios from 'axios';
import { getAxios, postAxios } from '@/utils/request/Request';
//账号登录
export function accountLogin(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/login/accountLogin',
    data
  })
}
//后台登陆
// export function accountLogin(data){
//   return axios({
//     method: 'post',
//     url: '/admin/admin-api/ffd/v1/system/login',
//     data:{
//       ...data,
//       uuid:'8049c45b9661493c9983bf4a8a588c5e',
//       code:'a6n3'
//     }
//   })
// }
//微信登录
export function wechatLogin(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/login/mnpLogin',
    data
  })
}
//手机号登录
export function  mobileLogin(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/login/mobileLogin',
    data
  })
}
//获取注册验证码
export function getSignupCode(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:105,
      mobile:data
    }
  })
}
//获取登录验证码
export function getLoginCode(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:101,
      mobile:data
    }
  })
}
//注册账号
export function register(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/login/register',
    data
  })}
//获取微信二维码
export function getWechatCode(){
  return axios({
    method: 'get',
    url: '/api/app-api/ffd/v1/login/scanCodeUrl',
    params:{
      url:'https://fafadan.cn'
    }
  })
}
//是否注册
export function isRegister(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/login/isRegister',
    data
  })
}
//忘记密码
export function forgetPassword(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/user/forgotPwd',
    data
  })
}
//获取修改密码验证码
export function getResetCode(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:104,
      mobile:data
    }})}
