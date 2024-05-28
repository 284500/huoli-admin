import { getAxios, postAxios } from '@/utils/request/Request';
// 售后单列表
export const getAfterSaleList = (data) => {
  return getAxios('/api/app-api/ffd/v1/order/aftersale/list', data);
};
// 售后单详情
export const getAfterSaleDetail = (data) => {
  return getAxios('/api/app-api/ffd/v1/order/aftersale/detail', data);
};
//添加售后单
export const addAfterSale = (data) => {
  return postAxios('/api/app-api/ffd/v1/order/aftersale/add', data);
};
//删除售后单
export const deleteAfterSale = (data) => {
  return postAxios('/api/app-api/ffd/v1/order/aftersale/del', data);
};
