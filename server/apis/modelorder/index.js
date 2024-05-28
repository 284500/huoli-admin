import { getAxios, postAxios } from '@/utils/request/Request';
// 获取订单列表
export function getOrderList(data) {
    return getAxios('/api/app-api/ffd/v1/order/list', data);
}
// 获取订单详情
export function getOrderDetail(data) {
    return getAxios('/api/app-api/ffd/v1/order/detail', data);
}
//新增订单
export function addOrder(data) {
    return postAxios('/api/app-api/ffd/v1/order/add', data);
}
//获取创建信息列表
export function getCreateInfoList(data) {
    return getAxios('/api/app-api/ffd/v1/order/design/list', data);
}
// 删除订单
