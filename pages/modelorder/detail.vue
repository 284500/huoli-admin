<template>
  <NuxtLayout>
    <MyBreadcrumb :list="BreadcrumbList" />
    <div class="flex flex-col gap-4 mt-3">
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <div class="flex items-center gap-3 mb-3 justify-between">
          <div class="flex items-center">
            <div class="title mr-2">订单状态</div>
            <div
             v-if="material.status!==10"
              :class="{'!bg-[#2277FF]':material.status>2}"
              class="px-2 pt-1 py-0.5 rounded-[12px] bg-[#FFA024] text-center text-white font-medium text-[14px] leading-[16px]"
            >
             {{statusList[material.status]}}
            </div>
            <div
              v-if="material.status===10"
              class="px-2 py-1 rounded-[12px] bg-[#2277FF] text-center text-white font-medium text-[14px] leading-[16px]"
            >
             {{statusList[material.status]}}
            </div>
          </div>
          <nuxt-link :to="`/modelcenter/material/pay?id=${material.id}`">
          <Button v-if="material.status===0">立即付款</Button></nuxt-link>
          <Button v-if="material.status===1" @click="deleteOrder(material.id)">取消订单</Button>
        </div>
        <div v-if="material.status<8">
          <div class="flex">
            <div class="text">该订单会为您保留</div>
            <div class="text !text-[#FF5030]">7天</div>
            <div class="text">（从下单之日算起），7天之后如果还未付款，系统将自动取消该订单。</div>
          </div>
        </div>
        <MyStep v-if="material.status<8" :tab="stepTab" :activeNumber="stepNumber" class="mt-6"></MyStep>
      </div>
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <div class="grid md:grid-cols-2 relative gap-x-10 md:gap-x-20 gap-y-5">
          <Separator class="absolute left-[50%] hidden md:block" orientation="vertical" />
          <div>
            <h1 class="title">订单信息</h1>
            <div class="mt-5 gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text">收费信息：</div>
                <div class="text">投放订单类型收货地址请查看分发商户地址</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">付款信息：</div>
                <div class="text">{{ material.payMethod }}</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">订单信息：</div>
                <div class="text">{{ material.orderNo }}</div>
              </div>
            </div>
          </div>
          <div>
            <h1 class="title">寄样信息</h1>
            <div class="mt-5 mb-8 gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text">是否寄样：</div>
                <div class="text">{{ material.isSendSample }}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">寄样地址：</div>
                <div class="text">{{ material.sampleAddress }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <h1 class="title">购买信息</h1>
        <MyTable :hasCheck="false" :tabItems="TabItems"></MyTable>
        <div class="py-4">
          <div class="gap-3 flex flex-col items-end">
              <div class="flex gap-2">
                <div class="muted-text">产品总价：</div>
                <div class="text w-24  text-right">￥20.00</div>
              </div>
              <div class="flex gap-2">
                <div class="muted-text">样品费：</div>
                <div class="text w-24  text-right">￥20.00</div>
              </div>

              <div class="flex gap-2 items-center">
                <Lucide icon="CircleHelp" color="#AAAAAA" class="w-4 h-4"></Lucide>
                <div class="muted-text">寄样物流费：</div>
                <div class="text w-24  text-right">￥20.00</div>
              </div>

              <div class="flex gap-2">
                <div class="muted-text">广告投放费：</div>
                <div class="text w-24  text-right">￥20.00</div>
              </div>
              <div class="flex gap-2 items-center">
                <Lucide icon="CircleHelp" color="#AAAAAA" class="w-4 h-4"></Lucide>

                <div class="muted-text">钱包原有款：</div>
                <div class="text w-24  text-right !text-[#FF5030]" >-￥20.00</div>
              </div>
              <div class="flex gap-2">
                <div class="muted-text">物流费用：</div>
                <div class="text w-24  text-right">￥20.00</div>
              </div>
            </div>
        </div>
        <Separator/>

        <div class="flex justify-end mt-4 items-center">
          <div class="title !text-[14px] !leading-[20px]">订单合计：</div>
          <div class="total-number ml-2 pl-3">￥270.00</div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import MyTable from '@/components/my-table/table.vue';
import {  getOrderDetail } from '@/server/apis/modelorder/index.js';
import {  getMaterialOrder } from '@/server/apis/placeorder/index.js';
import { cancelOrder } from '@/server/apis/modelorder/index.js';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();

definePageMeta({
  layout: 'center',
});
const route=useRoute();
const material=ref({});
const placeorder=ref({});
const BreadcrumbList = ref([
  {
    name: '物料订单',
    url: '/modelorder',
  },
  {
    name: '订单详情',
    url: '/modelorder/detail',
  },
]);
const stepTab = ref([
  '提交订单',
  '等待付款',
  '分发商接单',
  '全部接单',
  '制作商发样',
  '确认收样',
  '制作商发货',
  '完成',

]);
const statusList = ref([
  '待付款',
  '投放待接单',
  '待寄样',
  '已寄样',
  '待发货',
  '部分发货',
  '待收货',
  '已完成',
  '部分退款',
  '已退款 ',
  '已取消 ',
]);
const stepNumber = ref(1);
const TabItems = ref([
  {
    id: 1,
    remarks: 'Alice',
    isShelves: 1,
    selected: false,
    productType: '名片',
  },
]);
const deleteOrder=async (e)=>{
  await cancelOrder({id:Number(e)});
  toast({
  title: '取消订单',
 })
  init();
};
const init=async ()=>{
  material.value=await getOrderDetail({id:Number(route.query.id)})
  // placeorder.value=await getMaterialOrder({orderId:Number(route.query.id)})
  stepNumber.value=material.value.status+1 || 0;
};
onMounted(init);
</script>
<style scoped>
.title {
  font-size: 20px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  text-align: left;
  color: #333333;
  line-height: 28px;
}
.text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}
.muted-text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #666666;
  line-height: 20px;
}
.number {
  font-size: 24px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 32px;
}
.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.table-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
.table-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 20px;
}
.total-number {
  font-size: 20px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  text-align: right;
  color: #ff5030;
  line-height: 20px;
}
</style>
