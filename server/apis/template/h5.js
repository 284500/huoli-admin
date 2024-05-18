import { getAxios, postAxios } from '@/utils/request/Request';
//获取h5模板列表
export function getH5TemplateList(params) {
  return getAxios('/api/app-api/ffd/v1/template/h5/list', params);
}
//获取h5模板详情
export function getH5TemplateDetail(params) {
  return getAxios('/api/app-api/ffd/v1/template/h5/detail', params);
}
//新增h5模板
export function addH5Template(params) {
  return postAxios('/api/app-api/ffd/v1/template/h5/add', params);
}
//编辑h5模板
export function editH5Template(params) {
  return postAxios('/api/app-api/ffd/v1/template/h5/edit', params);
}
//切换上下架状态
export function H5TemplateIsShelves(data) {
  //data为json格式，包含ids和isShelves
  return postAxios('/api/app-api/ffd/v1/template/h5/isShelves', data);
}
