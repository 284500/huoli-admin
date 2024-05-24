import { getAxios, postAxios } from '@/utils/request/Request';

// 获取订单列表
export function getReleaseOrderList(data) {
  return getAxios('/api/app-api/ffd/v1/order/release/list', data);
}
// 获取订单详情
export function getReleaseOrderDetail(data) {
  return getAxios('/api/app-api/ffd/v1/order/release/detail', data);
}
