<template>
  <div class="flex flex-col gap-4 mt-3">
    <div class="bg-white rounded-[8px] md:p-10 p-4 header-bg">
      <div class="flex sm:justify-between flex-wrap justify-end gap-4">
        <div class="flex gap-4"><div class="w-12 h-12"><img src="/public/img/auth/status-true.png" class="w-full h-full object-cover"/></div>
        <div>
          <h1 class="title">订单提交成功，请尽快付款！</h1>

         <div ><span class="text">请您在</span><span  class="text">2天内</span><span  class="text">2天内</span><span  class="text">支付完成，否则订单会被自动取消。</span></div>
         <div><span class="text">剩余时间：</span><span  class="text">1</span><span  class="text">天</span><span  class="text">23</span><span  class="text">小时</span><span  class="text">53</span><span  class="text">分</span><span  class="text">05</span><span  class="text">秒</span></div>
          <div><span  class="text">秒订单编号：2021120210261193</span></div>
        </div>
          </div>
        <div class="flex flex-col items-end gap-2">
          <div class="text">订单支付金额</div>
          <div class="number !text-[#FF5030]">￥270.00</div>

        </div>

      </div>
      <Separator class="mt-10 mb-5" />
      <h1 class="table-title">订单支付</h1>

      <div class="grid gap-4 grid-cols-2 mt-4">
        <div class="table-border sm:p-4 p-2" :class="{'!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]':payActive===0}">
          <div class="flex gap-3 items-center" @click="payActive=0"><div class="w-8 h-8 "><img src="/public/img/pay/zfb.png"/></div><div class="text">支付宝支付</div></div>
        </div>
        <div class="table-border sm:p-4 p-2" :class="{'!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]':payActive===1}">
          <div class="flex gap-3 items-center" @click="payActive=1" ><div class="w-8 h-8"><img src="/public/img/pay/wx.png"/></div><div class="text">微信支付</div></div>
        </div>

      </div>
    </div>
    <div class="bg-white rounded-[8px]  p-4">
      <div class=" bg-white flex justify-center items-center">
       <div class="w-full lg:w-[980px] xl:w-[1280px] flex justify-end items-center">
        <div class="apply-text">合计(含运费,投放费)：</div>
        <div class="number !text-[18px]">￥270.00</div>
        <Button class="ml-6" @click="payorder">提交订单</Button>
      </div>
     </div>
    </div>
  </div>
  <Drawer v-model="isshow"><div class="bg-white w-[560px] md:h-[608px] max-w-[100vw] max-h-[100vh] rounded-[8px] h-[420px] relative  px-6 pb-3 pt-3.5">
    <div class="w-full h-full flex flex-col justify-between items-center">
      <div class="flex justify-between w-full"><div class="table-title">扫码支付</div><div><img src="/public/img/login/close.png" class="w-6 h-6 "
        @click="isshow=false" /></div></div>
      <div class="flex flex-col items-center">
        <div class="table-title !font-[400]">订单支付金额</div>
        <div class="pop-number my-1">￥270.00</div>
        <div class="pop-code my-4"><img :src="qr_code" class="w-full h-full"/></div>

        <div class="apply-text !text-[#666666] ">请使用支付宝扫一扫，扫描二维码支付</div>
      </div>
      <div class="flex justify-end items-center w-full">
        <span>支付成功请点击</span>
        <Button class="ml-4" @click="isshow=false">已完成支付</Button>
      </div>
    </div>
  </div></Drawer>
</template>
<script setup>
import Drawer from '@/components/drawer/index.vue';
import QRCode from 'qrcode'
import {prePay,payType,closeOrder} from '@/server/apis/pay/index.js';
const qr_data=ref('weixin://wxpay/bizpayurl?pr=gHQRprNz3')
const qr_code=ref('')
const payActive=ref(0);
const isshow=ref(false);
const payconfig=reactive({
  attach: "支付订单",
  description: "测试下单用例3",
  orderAmount: 0.01,
  orderId: 1,
  outTradeNo: "ffd2024051617000012",
  payWay: 2,
  scene: "order",
  userId: 1
});
const payorder=async ()=>{
  // const data=await prePay(payconfig);
  qr_code.value=await QRCode.toDataURL(qr_data.value);
  isshow.value=true;
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
