export const useTestStore = defineStore("test", () => {
  const name = ref("");
  function setName(val) {
    name.value = val;
  }

  return {
    name,
    setName
  }
},
{
  persist: true
}
)
