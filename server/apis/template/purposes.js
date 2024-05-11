import { getAxios, postAxios } from '@/utils/request/Request';
//获取用途模板列表
export function getPurposesTemplateList(params) {
  return getAxios('/api/admin-api/ffd/v1/template/purposes/list', params);
}
//获取用途模板详情
export function getPurposesTemplateDetail(params) {
  return getAxios('/api/admin-api/ffd/v1/template/purposes/detail', params);
}
//添加用途模板
export function addPurposesTemplate(data) {
  return postAxios('/api/admin-api/ffd/v1/template/purposes/add', data);
}
//编辑用途模板
export function editPurposesTemplate(data) {
  return postAxios('/api/admin-api/ffd/v1/template/purposes/edit', data);
}
//删除用途模板
export function deletePurposesTemplate(data) {
  return postAxios('/api/admin-api/ffd/v1/template/purposes/del', data);
}
