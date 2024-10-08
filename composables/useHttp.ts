//定义ts变量类型接口
interface HttpParms {
  url: string; //请求api接口地址
  method?: any; //请求方法
  query?: any; //添加查询搜索参数到URL
  body?: any; //请求体
  isToken: boolean; //是否需要携带token
}

/**
 * 网络请求方法
 * @param obj 请求参数
 * @returns 响应结果
 */
export const http = (obj: HttpParms) => {
  const res = new Promise<void>((resolve, reject) => {
    useFetch(obj.url, {
      method: obj.method ?? 'GET',
      query: obj?.query ?? null,
      body: obj?.body ?? null,
      onRequest({ request, options }) {
        // 设置请求报头
        options.headers = options.headers || {};
        if (obj.isToken) {
          const token = useCookie('token');
          //@ts-ignore
          options.headers.Authorization = token.value || null;
        }
      },
      onRequestError({ request, options, error }) {
        // 处理请求错误
        console.log('服务器链接失败!');
        reject(error);
      },
      onResponse({ request, response, options }) {
        // 处理响应数据
        resolve(response._data.data);
      },
      onResponseError({ request, response, options }) {
        // 处理响应错误
      },
    });
  });
  return res;
};

export function getAxios(params:any) {
 return http({url:'/api/login',...params});
}
//post请求
export function postAxios(params:any) {
  return http({url:'/api/sign',...params});
}

// await getAxios();
// postAxios().then(res)=>{
//   console.log(res);
// }
