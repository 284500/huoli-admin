import axios from 'axios';
import { useRouter } from 'vue-router';
import { getToken, removeToken } from '@/utils/cookie';
let router = useRouter();
const request = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

//请求响应
request.interceptors.request.use(
  (config) => {
    config.headers['token'] =
      getToken() ;
    return config;
    //return Promise.resolve(config)
  },
  (error) => {
    return Promise.reject(error);
  },
);

// //拦截响应
request.interceptors.response.use(
  (response) => {
    if (response.data && response.data.code === 401) {
      removeToken();
      router.push({
        name: '/login',
      });
    } else if (response.data.code == 503) {
      
    }
    return response.data;
    // return response
  },
  (error) => {
    return Promise.reject(error);
  },
);
//get请求
export function getAxios(Url, data) {
  return request({
    url: Url,
    method: 'get',
    params: data,
  });
}
//post请求
export function postAxios(Url, data) {
  return request({
    url: Url,
    method: 'post',
    data: data,
  });
}
export default request;
