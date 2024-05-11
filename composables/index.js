import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useTestStore = defineStore('nuxtStore', {
  state: () => ({
    count: 0,
    activeProductName: 'dadad',
  }),
  actions: {
    setActiveProductName(name) {
      this.activeProductName = name;
    },
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
