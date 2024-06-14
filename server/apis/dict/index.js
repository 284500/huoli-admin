import { getAxios, postAxios } from '@/utils/request/Request';

// 获取字典列表
export const getDictList = (data) => {
  return getAxios('/api/app-api/ffd/v1/dict/data/list', data);
};
// 获取字典详情

export const getDictDetail = (data) => {
  return getAxios('/api/app-api/ffd/v1/dict/data/detail', data);
};
// 获取字典所有
export const getDictAll = (data) => {
  return getAxios('/api/app-api/ffd/v1/dict/data/all', data);
};
//获取颜色字典
export const getColorDict = () => {
  return getAxios('/api/app-api/ffd/v1/dict/data/all', {
    dictType: 'color',
  });
};
//获取节日字典
export const getFestivalDict = () => {
  return getAxios('/api/app-api/ffd/v1/dict/data/all', {
    dictType: 'festival',
  });
};
//获取分类领域字典
export const getCategoryDict = () => {
  return getAxios('/api/app-api/ffd/v1/dict/data/all', {
    dictType: 'distributio_type',
  });
};
