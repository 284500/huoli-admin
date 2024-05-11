<template>
  <NuxtLayout >
    <MyBreadcrumb :list="BreadcrumbList" />
    <div class="flex flex-col gap-4 mt-3">
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <h1 class="title">订单信息</h1>
        <MyTable :hasCheck="false" :tabItems="TabItems"></MyTable>
        <div class="flex justify-end mt-4 items-center"><div class="title !text-[14px] !leading-[20px]">订单合计：</div><div class="total-number ml-2 pl-3">￥270.00</div></div>
      </div>
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <div class="grid md:grid-cols-2 relative gap-10 md:gap-20">
          <Separator class="absolute left-[50%] hidden md:block" orientation="vertical" />

          <div>
            <h1 class="title">投放订单信息</h1>
            <div class="mt-5 mb-8 gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text">收货信息：</div>
                <div class="text">投放订单类型收货地址请查看分发商户地址</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">订单状态：</div>
                <div class="text">待接单</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">付款信息：</div>
                <div class="text">微信支付</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">订单信息：</div>
                <div class="text">392794546085685-654</div>
              </div>
            </div>
          </div>
          <div>
            <h1 class="title">投放信息</h1>
            <div class="mt-5  gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text">收货信息：</div>
                <div class="text">投放订单类型收货地址请查看分发商户地址</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">订单状态：</div>
                <div class="text">待接单</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">付款信息：</div>
                <div class="text">微信支付</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">订单信息：</div>
                <div class="text">392794546085685-654</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import MyTable from '@/components/my-table/table.vue';
definePageMeta({
  layout: 'center',
});
const BreadcrumbList = ref([
  {
    name: '售后服务',
    url: '/aftersales',
  },
  {
    name: '售后详情',
    url: '/aftersales/detail',
  },
]);
const TabItems = ref([{
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '名片'
  },])
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
.total-number{
font-size: 20px;
font-family: Arial, Arial-Regular;
font-weight: 400;
text-align: right;
color: #ff5030;
line-height: 20px;
}
.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.table-title{
font-size: 16px;
font-family: PingFang SC, PingFang SC-Medium;
font-weight: 500;
text-align: left;
color: #333333;
line-height: 24px;
}
.table-text{
font-size: 12px;
font-family: PingFang SC, PingFang SC-Regular;
font-weight: 400;
text-align: left;
color: #999999;
line-height: 20px;
}
</style>
