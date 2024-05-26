import { getAxios, postAxios } from '@/utils/request/Request';
//第一步认证
export const FristAuth = (data) => {
  return postAxios('/admin/admin-api/ffd/v1/authentication/first/save', data);
};
//第二步认证
export const SecondAuth = (data) => {
  return postAxios('/admin/admin-api/ffd/v1/authentication/second/save', data);
};
//第二步认证详情
export const SecondAuthDetail = (data) => {
  return getAxios('/admin/admin-api/ffd/v1/authentication/second/detail', data);
};
//第三步认证
export const ThirdAuth = (data) => {
  return postAxios('/admin/admin-api/ffd/v1/authentication/third/save', data);
};
//第三步认证详情
export const ThirdAuthDetail = (data) => {
  return getAxios('/admin/admin-api/ffd/v1/authentication/third/detail', data);
};
//第四步认证
export const FourAuth = (data) => {
  return postAxios('/admin/admin-api/ffd/v1/authentication/fourth/save', data);
};
//第四步认证详情
export const FourAuthDetail = (data) => {
  return getAxios('/admin/admin-api/ffd/v1/authentication/fourth/detail', data);
};
//确认认证
export const ConfirmAuth = (data) => {
  return postAxios('/admin/admin-api/ffd/v1/authentication/confirm', data);
};
//查看认证状态
export const AuthStatus = (data) => {
  return getAxios('/admin/admin-api/ffd/v1/authentication/status', data);
};
//查看认证详情
export const AuthDetail = (data) => {
  return getAxios('/admin/admin-api/ffd/v1/authentication/detail', data);
};
