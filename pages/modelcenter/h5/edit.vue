<template>
  <NuxtLayout >
<div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
  <Button @click="createOrder">立即下单</Button>
  <Button @click="createWorks">保存</Button>
</div>
  </NuxtLayout>
</template>
<script setup>
import {addH5Work} from '@/server/apis/works/h5.js'
const route=useRoute();
definePageMeta({
  layout: 'center',
});
const createWorks=async ()=>{
await addH5Work({templateId:Number(route.query.id),content:{name:'国庆长假'},name:'国庆'});
};
const createOrder=async ()=>{
  let data=await addH5Work({templateId:Number(route.query.id),content:{name:'国庆长假'},name:'国庆'});
  navigateTo({
    path: '/modelcenter',
  })
};
</script>
<style scoped>
.header-bg{
  background-image: url('/public/img/pay/header.png');
  background-position: top;
  background-repeat: no-repeat;
}
.address-text {
font-size: 16px;
font-family:
  PingFang SC,
  PingFang SC-Semibold;
font-weight: 600;
color: #ffffff;
line-height: 22px;
}
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
.danger-text {
font-size: 12px;
font-family:
  PingFang SC,
  PingFang SC-Regular;
font-weight: 400;
text-align: left;
color: #ff5030;
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
font-weight: 600;
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
.input-text {
font-size: 12px;
font-family:
  PingFang SC,
  PingFang SC-Medium;
font-weight: 500;
text-align: left;
color: #2277ff;
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
.apply-text {
font-size: 14px;
font-family:
  PingFang SC,
  PingFang SC-Regular;
font-weight: 400;
color: #333333;
line-height: 24px;
}
.pop-number{
font-size: 32px;
font-family: PingFang SC, PingFang SC-Semibold;
font-weight: 400;
text-align: center;
color: #ff5030;
line-height: 48px;
}
.pop-code{
  width: 280px;
height: 280px;
background: #f9fafb;
border: 1px solid #eeeeee;
border-radius: 8px;
padding:1rem;
}
</style>
