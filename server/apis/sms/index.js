import axios from 'axios';
//绑定手机验证码
export function BindPhoneSms(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:102,
      mobile:data
    }
  })
}
//变更手机验证码
export function ChangePhoneSms(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:103,
      mobile:data
    }
  })
}
//忘记密码验证码
export function ForgetPwdSms(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:108,
      mobile:data
    }
  })
}
