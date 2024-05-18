import { getAxios, postAxios } from '@/utils/request/Request';
// 获取物料作品列表
export const getMaterialWorks = (params) => {
  return getAxios('/api/app-api/ffd/v1/user/works_material/list', params);
};
// 获取物料作品详情
export const getMaterialWorkDetail = (params) => {
  return getAxios('/api/app-api/ffd/v1/user/works_material/detail',params);
};
// 编辑物料作品
export const editMaterialWork = (params) => {
  return postAxios('/api/app-api/ffd/v1/user/works_material/edit', params);
};
// 删除物料作品
export const deleteMaterialWork = (params) => {
  return postAxios('/api/app-api/ffd/v1/user/works_material/del' , params);
};
// 发布物料作品
export const addMaterialWork = (params) => {
  return postAxios('/api/app-api/ffd/v1/user/works_material/add' , params);
};
