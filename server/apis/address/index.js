import { getAxios, postAxios } from '@/utils/request/Request';
// 获取地址列表
export const getAddressList = (params) => {
  return getAxios('/api/app-api/ffd/v1/ffd/vendor_address/list', params);
};
// 获取地址详情
export const getAddressDetail = (params) => {
  return getAxios('/api/app-api/ffd/v1/ffd/vendor_address/detail', params);
};
// 添加地址
export const addAddress = (params) => {
  return postAxios('/api/app-api/ffd/v1/ffd/vendor_address/add', params);
};
// 修改地址
export const editAddress = (params) => {
  return postAxios('/api/app-api/ffd/v1/ffd/vendor_address/edit', params);
};
// 删除地址
export const deleteAddress = (params) => {
  return postAxios('/api/app-api/ffd/v1/ffd/vendor_address/del', params);
};

