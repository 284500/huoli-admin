//@ts-ignore
import {reactive} from 'vue';

export function useDetail(fetchFun,params) {
  const detail=reactive({
    data:{

    }
  });
  // 请求分页接口
  const getDetail = () => {
    return fetchFun(params)
      .then((res) => {
       detail.data=res;
       return res;
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  };
  return {
    detail,
    getDetail,
  };
}
