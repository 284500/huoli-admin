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
        <MyListButton
          :lists="list"
          v-model="Orderparams.status"
          @change="Order.resetPage"
        ></MyListButton>
        <Separator class="my-5 !bg-[#EEEEEE]" />
        <div class="flex gap-y-4">
          <MyInputSearch
            class="mr-10 sm:w-[240px] md:w-[200px] lg:w-[240px]"
            @search="Order.resetPage"
            v-model="Orderparams.orderType"
          ></MyInputSearch>
          <MySelectDate class=""></MySelectDate>
        </div>
        <div v-if="Order.pager.lists.length">
        <MyTable :tab-items="Order.pager.lists" > </MyTable>
         <MyPagination v-model="Order.pager" @change="Order.getLists"></MyPagination></div>
        <div v-else class="flex flex-col items-center py-20">
          <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(24 31.67)">
                <ellipse
                  fill-opacity=".8"
                  fill="#F5F5F7"
                  cx="67.797"
                  cy="106.89"
                  rx="67.797"
                  ry="12.668"
                ></ellipse>
                <path
                  d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                  fill="#AEB8C2"
                ></path>
                <path
                  d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                  fill="url(#linearGradient-1)"
                  transform="translate(13.56)"
                ></path>
                <path
                  d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                  fill="#F5F5F7"
                ></path>
                <path
                  d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                  fill="#DCE0E6"
                ></path>
              </g>
              <path
                d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                fill="#DCE0E6"
              ></path>
              <g transform="translate(149.65 15.383)" fill="#FFF">
                <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
              </g>
            </g>
          </svg>
          <div>暂无数据</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import MyTable from '@/components/my-table/material.vue';
import MyPagination from '@/components/my-pagination/index.vue';
import { usePaging } from '@/hooks/usePaging';
import { getOrderList, getCreateInfoList } from '@/server/apis/modelorder/index.js';
const list = ref([
  { name: '待付款', status: 0 },
  { name: '投放待接单', status: 1 },
  { name: '待寄样', status: 2 },
  { name: '已寄样', status: 3 },
  { name: '待发货', status: 4 },
  { name: '部分发货', status: 5 },
  { name: '待收货', status: 6 },
  { name: '已完成', status: 7 },
  { name: '部分退款', status: 8 },
  { name: '已退款 ', status: 9 },
  { name: '已取消 ', status: 10 },
]);
const Orderparams = reactive({});
const Order = usePaging({ fetchFun: getOrderList, params: Orderparams });
// const CreateInfo=usePaging({ fetchFun:getCreateInfoList});
// const tabData=computed(()=>{
//   return Order.pager.lists.map((item,index)=>{
//     return {...item,...CreateInfo.pager.lists[index]}
//   })
// })
const init = () => {
  Order.getLists();
};
onMounted(() => {
  init();
});
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
