import { getAxios, postAxios } from '@/utils/request/Request';

//获取业务基础配置列表
export function getBusinessConfigList(params) {
  return getAxios('/api/admin-api/ffd/v1/business/config/list', params);
}
//新增业务基础配置
export function addBusinessConfig(params) {
  return postAxios('/api/admin-api/ffd/v1/business/config/add', params);
}
//编辑业务基础配置
export function editBusinessConfig(params) {
  return postAxios('/api/admin-api/ffd/v1/business/config/edit', params);
}
//删除业务基础配置
export function delBusinessConfig(data) {
  return postAxios('/api/admin-api/ffd/v1/business/config/del', data);
}
//获取业务基础配置详情
export function getBusinessConfigDetail(data) {
  return getAxios('/api/admin-api/ffd/v1/business/config/detail', data);
}
