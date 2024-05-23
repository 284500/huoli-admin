import { getAxios, postAxios } from '@/utils/request/Request';
// 发起支付
export const prePay = (data) => {
  return postAxios('/api/app-api/ffd/v1/pay/prepay', data);
};
// 查询支付状态
export const queryPayStatus = (data) => {
  return getAxios('/api/app-api/ffd/v1/pay/payStatus', data);
};
//查询订单

export const queryOrder = (data) => {
  return getAxios('/api/app-api/ffd/v1/pay/queryOrder', data);
};
//关闭订单
export const closeOrder = (data) => {
  return postAxios('/api/app-api/ffd/v1/pay/closeOrder', data);
};
//支付方式
export const payType = (data) => {
  return getAxios('/api/app-api/ffd/v1/pay/payWay', data);
};
//微信支付回调
export const wxPayNotify = (data) => {
  return postAxios('/api/app-api/ffd/v1/pay/notifyMnp', data);
};
