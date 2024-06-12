import { getAxios } from '@/utils/request/Request';
import Cookies from 'js-cookie';
const user=Cookies.get('userInfo');

//获取用户基础信息
export function getUserBasisInfo(data) {
  return getAxios('/api/app-api/ffd/v1/user/info');
}
