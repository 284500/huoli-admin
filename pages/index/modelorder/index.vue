<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">物料订单</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div>
        <MyListButton :lists="list"></MyListButton>
        <Separator class="my-5 !bg-[#EEEEEE]" />
        <div class="flex">
          <MyInputSearch class="sm:w-1/2 lg:w-1/3"></MyInputSearch>
        <MySelectDate  class="ml-10"></MySelectDate>
        </div>

        <MyTable :hasCheck="false"></MyTable>
        <MyPagination></MyPagination>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import MyTable from '@/components/my-table/table.vue';
import MyPagination from '@/components/my-pagination/index.vue';

import { onMounted } from 'vue';
const tabactive = ref(0);
const list=ref([
  {name:'待付款'},
  {name:'投放待接单'},
  {name:'已寄样'},
  {name:'待发货'},
  {name:'部分发货'},
  {name:'待收货'},

]);
</script>
<style scoped>
.header-left {
  font-size: 18px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
</style>
