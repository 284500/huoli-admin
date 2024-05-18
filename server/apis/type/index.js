//获取产品类型
import { getAxios } from '@/utils/request/Request';

export function getProductType() {
  return getAxios('/api/app-api/ffd/v1/product/type/getAll');
}
//获取行业类型
export function getIndustryType() {
  return getAxios('/api/app-api/ffd/v1/template/industry/getAll');
}
//获取用途类型
export function getPurposesType() {
  return getAxios('/api/app-api/ffd/v1/template/purposes/getAll');
}
