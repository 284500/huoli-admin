import { getAxios, postAxios } from '@/utils/request/Request';
//获取行业模板列表
export function getIndustryTemplateList(params) {
  return getAxios('/api/app-api/ffd/v1/template/industry/list', params);
}
//获取行业模板详情
export function getIndustryTemplateDetail(params) {
  return getAxios('/api/app-api/ffd/v1/template/industry/detail', params);
}
//添加行业模板
export function addIndustryTemplate(data) {
  return postAxios('/api/app-api/ffd/v1/template/industry/add', data);
}
//编辑行业模板
export function editIndustryTemplate(data) {
  return postAxios('/api/app-api/ffd/v1/template/industry/edit', data);
}
//删除行业模板
export function deleteIndustryTemplate(data) {
  return postAxios('/api/app-api/ffd/v1/template/industry/del', data);
}
