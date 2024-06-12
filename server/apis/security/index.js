import { getAxios,postAxios } from '@/utils/request/Request';
//获取用户中心信息
export function getUserCenterInfo() {
  return getAxios('/api/app-api/ffd/v1/user/center');
}
// 编辑用户信息
export function editUserInfo(data) {
  return postAxios('/api/app-api/ffd/v1/user/edit', data);
}
// 修改头像
export function updateUserAvatar(data) {
  return getAxios('/api/app-api/ffd/v1/user/update_avatar', data);
}
// 修改密码
export function updateUserPassword(data) {
  return postAxios('/api/app-api/ffd/v1/user/changePwd', data);
}
//绑定手机
export function bindMobile(data) {
  return postAxios('/api/app-api/ffd/v1/user/bindMobile', data);
}
//绑定微信

