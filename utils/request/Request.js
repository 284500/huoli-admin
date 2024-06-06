import axios from 'axios';
import { useRouter } from 'vue-router';
import { getToken, removeToken } from '@/utils/cookie';
import configs from '@/config'
import { useToast } from '@/components/ui/toast/use-toast';
const {toast} = useToast();
let router = useRouter();
const request = axios.create({
  timeout: configs.timeout,
  baseURL: configs.baseUrl,
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
    } else if (response.data.code !== 200) {
      toast({
        title: '请求错误',
        description: response.data.msg,
        variant: 'destructive',
        duration: '2000',
      });
      return Promise.reject(response.data.msg);
    }
    return response.data.data;
    // return response
  },
  (error) => {
    toast({
      title: '请求错误',
      description: error.message,
      variant: 'destructive',
      duration: '2000',
    });
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
export function uploadFile(Url, data) {
  return request({
    url: Url,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
export default request;
