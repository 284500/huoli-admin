import { getToken } from '@/utils/cookie';
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/modelcenter') {
    let data = getToken();
    if(!data){
    return navigateTo('/modelcenter')
    }else{
      
    }
  }
});
