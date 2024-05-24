import { getAxios, postAxios } from '@/utils/request/Request';
// 获取分销商列表
export function getDistributorList(data) {
    return getAxios('/api/app-api/ffd/v1/order/distributor/list', data);
}
// 获取分销商详情
export function getDistributorDetail(data) {
    return getAxios('/api/app-api/ffd/v1/order/distributor/detail', data);
}
