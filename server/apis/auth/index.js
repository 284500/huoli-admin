import { getAxios, postAxios } from '@/utils/request/Request';
import axios from 'axios';

//第一步认证
export const FristAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/first/save', data);
};
//第二步认证
export const SecondAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/second/save', data);
};
//第二步认证详情
export const SecondAuthDetail = (data) => {
  return getAxios('/api/admin-api/ffd/v1/authentication/second/detail', data);
};
//第三步认证
export const ThirdAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/third/save', data);
};
//第三步认证详情
export const ThirdAuthDetail = (data) => {
  return getAxios('/api/admin-api/ffd/v1/authentication/third/detail', data);
};
//第四步认证
export const FourAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/fourth/save', data);
};
//第四步认证详情
export const FourAuthDetail = (data) => {
  return getAxios('/api/admin-api/ffd/v1/authentication/fourth/detail', data);
};
//确认认证
export const ConfirmAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/confirm', data);
};
//提交认证
export const SubmitAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/submit/review', data);
};
//查看认证状态
export const AuthStatus = (data) => {
  return getAxios('/api/admin-api/ffd/v1/authentication/status', data);
};
//查看认证进度
export const AuthProgress = (data) => {
  return getAxios('/api/admin-api/ffd/v1/confirm/process', data);
};
//查看认证详情
export const AuthDetail = (data) => {
  return getAxios('/api/admin-api/ffd/v1/authentication/detail', data);
};
//获取认证列表
export const AuthList = (data) => {
  return getAxios('/api/admin-api/ffd/v1/authentication/list', data);
};
//撤回认证
export const RevokewAuth = (data) => {
  return postAxios('/api/admin-api/ffd/v1/authentication/revoke', data);
};
//获取法人验证码
export function getStep3Code(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:107,
      mobile:data
    }
  })
}
//获取运营验证码
export function getStep2Code(data){
  return axios({
    method: 'post',
    url: '/api/app-api/ffd/v1/index/sendSms',
    data:{
      scene:106,
      mobile:data
    }
  })
}
