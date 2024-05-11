<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">我的钱包</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full ">
      <div class="flex  md:p-5 p-3 justify-between border-[1px] border-[#EEEEEE] rounded-[4px] items-center overflow-hidden">
        <div class="flex items-center">
          <div class="w-[120px] h-[120px] overflow-hidden flex justify-center items-center mr-4">
            <img src="/public/img/wallet/wallet.png" alt="" />
          </div>
          <div>
            <div class="title !text-left mb-2">我的可用余额</div>
            <div class="flex">
              <div class="number !text-[40px] leading-[48px]">1000.03</div>
             <Button class="ml-6 h-10 text-[#2277FF] border-[#2277FF] rounded-[4px]" variant="outline">提现</Button>
              <Button class="h-10 ml-3 rounded-[4px]">充值</Button>
            </div>
          </div>
        </div>
        <div class="flex px-5 border-l-2 border-[#EEEEEE]">
          <div v-for="num in 4" class="flex flex-col gap-2 flex-1 w-[160px]">
            <div class="number">num</div>
            <div class="title">title</div>
          </div>
        </div>
      </div>
      <Wuliao class="mt-8 mb-5" v-model="tabactive" :tab="tabList"></Wuliao>
      <MyTable :hasCheck="false"></MyTable>
      <MyPagination></MyPagination>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Wuliao from '@/components/my-tab/wuliao.vue';
import Myheader from '@/components/navbar/header.vue';
import MyTable from '@/components/my-table/table.vue';
import MyPagination from '@/components/my-pagination/index.vue';

import { onMounted } from 'vue';
const tabactive = ref(0);
const tabList = ref(['收支明细', '锁定明细']);
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
.title {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  @apply font-normal;
  text-align: center;
  color: #333333;
  line-height: 20px;
}
.number {
  font-size: 24px;
  font-family: Arial, Arial-Regular;
  @apply font-normal;

  text-align: center;
  color: #333333;
  line-height: 32px;
}
</style>
