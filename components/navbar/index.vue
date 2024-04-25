<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px] justify-between">
        <div class="relative md:flex !h-[40px] input hidden">
          <Input
            type="text"
            placeholder="请输入内容"
            class="w-full h-full rounded-full bg-background pl-4 pr-8 md:w-[300px] lg:w-[420px]"
          />
          <button class="search-bt">搜索</button>
        </div>
        <div>{{ LoginType }}</div>
        <Popup v-model:open="open">
          <div class="flex">
            <Button
              class="rounded-full bg-[#f0f0f0] text-muted-foreground mr-3 hover:bg-white"
              @click="LoginType = 'signup'"
              >注册</Button
            >
            <Button class="rounded-full text-white" @click="LoginType = 'login'">登录</Button>
          </div>

          <template #content>
            <div><Login :logintype="LoginType" @showpop="changepop"></Login></div>
          </template>
        </Popup>
      </div>
    </div>
    <div class="h-[80px]"></div>
  </div>
</template>
<style scoped>
.input {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.navbar {
  z-index: 1000;
  position: relative;
  @apply bg-white fixed top-0 left-0 right-0 z-[10] shadow-sm;
}
.search-bt {
  @apply absolute w-8 text-center right-0 top-0 rounded-r-full bg-[#F5F7FA];
  color: #909399;
  width: 76px;
  /* height: 40px; */
  height: 100%;
  box-shadow: 0;
  border: 1px solid #e6e9ed;
  box-sizing: border-box;
}
.login-bt {
  width: 80px;
  height: 40px;
  border-radius: 26px;
}
</style>
<script setup>
import { ref } from 'vue';
let LoginType = ref('log');
const open = ref(false);
// const user=useUserStore();
const changepop = (type) => {
  console.log(type);
  open.value = false;
};
</script>
