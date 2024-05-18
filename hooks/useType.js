//@ts-ignore
import {reactive} from 'vue';

export function useType(fetchFun) {
  const types=reactive({
    data:[]
  });
  // 请求分页接口
  const getTypes = () => {
    return fetchFun()
      .then((res) => {
        types.data = res;
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  };
  return {
    types,
    getTypes,
  };
}
