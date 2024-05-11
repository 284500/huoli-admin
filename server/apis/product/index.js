import { getAxios, postAxios } from '@/utils/request/Request';
//获取产品类型列表
export function getProductTypeList(params) {
  return getAxios('/api/admin-api/ffd/v1/product/type/list', params);
}
//修改产品类型
export function ProductTypeEdit(data) {
  return postAxios('/api/admin-api/ffd/v1/product/type/edit', data);
}
//获取单个产类型详情
export function getProductTypeDetail(params) {
  return getAxios('/api/admin-api/ffd/v1/product/type/detail', params);
}
//删除产品类型
export function ProductTypeDel(data) {
  return postAxios('/api/admin-api/ffd/v1/product/type/del', data);
}
//添加产品类型
export function ProductTypeAdd(data) {
  return postAxios('/api/admin-api/ffd/v1/product/type/add', data);
}
//获取产品列表
export function getProductList(params) {
  return getAxios('/api/admin-api/ffd/v1/product/list', params);
}
//修改产品
export function ProductEdit(data) {
  return postAxios('/api/admin-api/ffd/v1/product/edit', data);
}
//获取单个产品详情
export function getProductDetail(params) {
  return getAxios('/api/admin-api/ffd/v1/product/detail', params);
}
//删除产品
export function ProductDel(data) {
  return postAxios('/api/admin-api/ffd/v1/product/del', data);
}
//添加产品
export function ProductAdd(data) {
  return postAxios('/api/admin-api/ffd/v1/product/add', data);
}
//切换上下架状态
export function ProductIsShelves(data) {
  //data为json格式，包含ids和isShelves
  return postAxios('/api/admin-api/ffd/v1/product/isShelves', data);
}
//获取产品配置信息列表
export function getProductConfig(params) {
  return getAxios('/api/admin-api/ffd/v1/product/config/list', params);
}
//获取产品配置详情
export function getProductConfigDetail(params) {
  return getAxios('/api/admin-api/ffd/v1/product/config/detail', params);
}
//修改产品配置信息
export function ProductConfigEdit(data) {
  return postAxios('/api/admin-api/ffd/v1/product/config/edit', data);
}
//添加产品配置信息
export function ProductConfigAdd(data) {
  return postAxios('/api/admin-api/ffd/v1/product/config/add', data);
}
//删除产品配置信息
export function ProductConfigDel(data) {
  return postAxios('/api/admin-api/ffd/v1/product/config/del', data);
}
