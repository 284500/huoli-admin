import { getAxios, postAxios } from '@/utils/request/Request';
// 充值配置
export const getWalletList = (data) => {
  return getAxios('/api/app-api/ffd/v1/recharge/config', data);
};
// 充值下单
export const getWalletOrder = (data) => {
  return postAxios('/api/app-api/ffd/v1/recharge/placeOrder', data);
};
