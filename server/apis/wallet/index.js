import { getAxios, postAxios } from '@/utils/request/Request';
//交易流水列表
export const getWalletList = (data) => {
  return getAxios('/api/app-api/ffd/v1/trade/record/list', data);
};
//交易流水详情
export const getWalletDetail = (data) => {
  return getAxios('/api/app-api/ffd/v1/trade/record/detail', data);
};
//新增交易流水
export const addWallet = (data) => {
  return postAxios('/api/app-api/ffd/v1/trade/record/add', data);
};
//编辑交易流水
export const editWallet = (data) => {
  return postAxios('/api/app-api/ffd/v1/trade/record/edit', data);
};
//删除交易流水
export const deleteWallet = (data) => {
  return postAxios('/api/app-api/ffd/v1/trade/record/del', data);
};
