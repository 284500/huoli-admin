<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">投放订单</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="bg-[#2277FF] w-[3px] h-[16px] mr-2"></div>
          <div class="!text-[16px]">数据统计</div>
        </div>
        <MyDate></MyDate>
      </div>
      <div class=" mt-3  rounded-md border-[1px] border-[#eeeeee] px-4 py-5 grid lg:grid-cols-8 grid-cols-4
      ">
        <div v-for="num in 8" class="flex flex-col gap-2 border-r-2 border-[#EEEEEE] last:border-none  ">
          <div class="number">number</div>
          <div class="title">title</div>
        </div>
      </div>
      <div class="mt-10">
        <div class="flex items-center">
          <div class="bg-[#2277FF] w-[3px] h-[16px] mr-2 "></div>
          <div class="!text-[16px]">订单列表</div>
        </div>
        <div class="my-4">
          <ul class="flex whitespace-nowrap overflow-auto h-8 gap-2">
            <li
              class="px-4 pt-1 hover:!text-[#2277ff] rounded-[4px] border  cursor-pointer title"
              v-for="(item, index) in list1"
              :key="index"
              :class="ActiveList === index ? 'isActive' : ''"
              @click="ActiveList = index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <MyTable :hasCheck="false"></MyTable>
      <MyPagination></MyPagination>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Wuliao from '@/components/my-tab/wuliao.vue';
import Myheader from '@/components/navbar/header.vue';
import TableHeader from '@/components/my-table/index.vue';
import MyTable from '@/components/my-table/table.vue';
import MyPagination from '@/components/my-pagination/index.vue';

import { onMounted } from 'vue';
const ActiveList = ref(0);

const list1 = ref(['全部', '待接单', '部门接单', '待投放', '投放中','已完成','已停止']);

</script>
<style scoped>
.isActive {
  @apply bg-[rgba(34,119,255,0.08)];
  color: #27f !important;
}
.header-left {
  font-size: 18px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
.title{
  font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
@apply font-normal;
text-align: center;
color: #333333;
line-height: 20px;
}
.number{
  font-size: 24px;
font-family: Arial, Arial-Regular;
@apply font-normal;

text-align: center;
color: #333333;
line-height: 32px;
}
</style>
