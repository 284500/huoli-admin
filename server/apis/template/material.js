import { getAxios, postAxios } from '@/utils/request/Request';
//获取物料模板列表
export function getMaterialTemplateList(params) {
  return getAxios('/api/app-api/ffd/v1/template/material/list', params);
}
//获取物料模板详情
export function getMaterialTemplateDetail(params) {
  return getAxios('/api/app-api/ffd/v1/template/material/detail', params);
}
//新增物料模板
export function addMaterialTemplate(data) {
  return postAxios('/api/app-api/ffd/v1/template/material/add', data);
}
//编辑物料模板
export function editMaterialTemplate(data) {
  return postAxios('/api/app-api/ffd/v1/template/material/edit', data);
}
//删除物料模板
export function deleteMaterialTemplate(data) {
  return postAxios('/api/app-api/ffd/v1/template/material/del', data);
}
