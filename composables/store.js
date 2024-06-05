import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useMealsStore = defineStore('meals', {
  state: () => ({
   data:[{
     name:"<NAME>",
     price:10,
     desc:"This is a test",
     category:{name:"test"},
     rating:5
   }],
   keyword:"as"
  }),
  getters: {
    getMeals: (state) => state.data,
    filterMeals:(state)=>{
      return state.data.filter(item=>{
        if(!state.keyword){
          return true;
        }else if(item.name.includes(state.keyword)){
          return true;
        }else {
          return false;
        }
      })
    }
  },
  actions: {
    setMeals(data) {
      this.data = data;
    },
    setKeyword(keyword){
      this.keyword=keyword
    }
  },
  persist: process.client && {
    storage: sessionStorage,
  },
});
export const useNavStore = defineStore('nav', {
  state: () => ({
   ActiveNumber:0,
   keyword:"as"
  }),
  getters: {

  },
  actions: {

  },
  persist: process.client && {
    storage: sessionStorage,
  },
});
export const useUserStore = defineStore('users', () => {
  const count = ref(12);
  return {
    count,
  };
});
