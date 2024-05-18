import { getAxios, postAxios } from '@/utils/request/Request';
// 获取h5作品列表
export const getH5Works = (params) => {
  return getAxios('/api/app-api/ffd/v1/user/works_h5/list', params);
};
// 获取h5作品详情
export const getH5WorkDetail = (params) => {
  return getAxios('/api/app-api/ffd/v1/user/works_h5/detail', params);
};
// 编辑h5作品
export const editH5Work = (params) => {
  return postAxios('/api/app-api/ffd/v1/user/works_h5/edit', params);
};
// 删除h5作品
export const deleteH5Work = (params) => {
  return postAxios('/api/app-api/ffd/v1/user/works_h5/del', params);
};
// 新增h5作品
export const addH5Work = (params) => {
  return postAxios('/api/app-api/ffd/v1/user/works_h5/add', params);
};
