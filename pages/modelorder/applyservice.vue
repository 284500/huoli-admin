<template>
  <NuxtLayout>
    <MyBreadcrumb :list="BreadcrumbList" />
    <div class="flex flex-col gap-4 mt-3">
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <h1 class="title">订单信息</h1>
        <MyTable :hasCheck="false" :tabItems="TabItems"></MyTable>

        <div class="flex justify-end py-4 items-center">
          <div class="title !text-[14px] !leading-[20px]">订单合计：</div>
          <div class="total-number ml-2 pl-3">￥270.00</div>
        </div>
        <Separator class="mt-4 mb-5" />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">申请类型</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>

            <div>
              <Select>
                <SelectTrigger id="framework" class="w-[240px] px-3 py-2 rounded-[4px]">
                  <SelectValue placeholder="申请退款" class="apply-text" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="车上"> 车上 </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">申请理由</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>

            <div>
              <Input
                id="search"
                type="text"
                placeholder="请输入"
                class=" w-full rounded-[4px]"
              />
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">申请凭证</span></div>
            <div class="flex gap-2">
              <div class="w-[100px] h-[100px]"></div>
              <div  class="w-[100px] h-[100px] input-border flex justify-center items-center">
                <div class="w-6 h-6  dashed-border flex justify-center items-center">
                  <div class="w-[14px] h-[14px]  dashed-border">
                    <img src="/public/add.png" alt="" class="w-full h-full" >
                  </div>
                </div>
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
    name: '物料订单',
    url: '/modelorder',
  },
  {
    name: '订单详情',
    url: '/modelorder/detail',
  },
  {
    name: '申请售后',
    url: '/modelorder/applyservice',
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
const stepNumber = ref(0);
const TabItems = ref([
  {
    id: 1,
    remarks: 'Alice',
    isShelves: 1,
    selected: false,
    productType: '名片',
  },
]);
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
.input-border {
  border: 1px solid #DDDDDD;
  border-radius: 4px;
}
.dashed-border{
  border: 1px dashed #DDDDDD;
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
input::placeholder {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #aaaaaa;
  line-height: 20px;
}
.apply-text{
  height: 24px;
font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
font-weight: 400;
color: #333333;
line-height: 24px;
}
</style>
