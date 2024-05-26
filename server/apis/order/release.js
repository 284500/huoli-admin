import { getAxios, postAxios } from '@/utils/request/Request';

// 获取投放明细列表
export function getReleaseList(data) {
  return getAxios('/api/app-api/ffd/v1/order/release_detail/list', data);
}
