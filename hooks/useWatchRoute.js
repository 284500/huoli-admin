export function useWatchRoute(callback) {
  const route = useRoute()
  watch(
      route,
      () => {
          callback(route)
      },
      {
          immediate: true
      }
  )
  return {
      route
  }
}
