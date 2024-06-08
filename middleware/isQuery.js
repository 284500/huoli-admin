export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.query.id) {
    return navigateTo('/modelcenter')
  }
});
