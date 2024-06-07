<template>
  <div class="flex flex-col gap-4 mt-3">
    <div class="bg-white rounded-[8px] md:p-10 p-4 header-bg" v-if="!material.status">
      <div class="flex sm:justify-between flex-wrap justify-end gap-4">
        <div class="flex gap-4"><div class="w-12 h-12"><img src="/public/img/auth/status-true.png" class="w-full h-full object-cover"/></div>
        <div>
          <h1 class="title">订单提交成功，请尽快付款！</h1>
         <div ><span class="text">请您在</span><span  class="text">2天内</span><span  class="text">支付完成，否则订单会被自动取消。</span></div>
         <div><span class="text">剩余时间：{{payTime}}</span><span  class="text">{{}}</span></div>
          <div><span  class="text">秒订单编号：{{ material.orderNo}}</span></div>
        </div>
          </div>
        <div class="flex flex-col items-end gap-2">
          <div class="text">订单支付金额</div>
          <div class="number !text-[#FF5030]">￥{{ material.amount }}</div>

        </div>

      </div>
      <Separator class="mt-10 mb-5" />
      <h1 class="table-title">订单支付</h1>

      <div class="grid gap-4 grid-cols-2 mt-4">
        <div class="table-border sm:p-4 p-2" :class="{'!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]':payconfig.payWay===3}">
          <div class="flex gap-3 items-center" @click="payconfig.payWay=3"><div class="w-8 h-8 "><img src="/public/img/pay/zfb.png"/></div><div class="text">支付宝支付</div></div>
        </div>
        <div class="table-border sm:p-4 p-2" :class="{'!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]':payconfig.payWay===2}">
          <div class="flex gap-3 items-center" @click="payconfig.payWay=2" ><div class="w-8 h-8"><img src="/public/img/pay/wx.png"/></div><div class="text">微信支付</div></div>
        </div>

      </div>
    </div>
    <div class="bg-white rounded-[8px]  p-4"  v-if="!material.status">
      <div class=" bg-white flex justify-center items-center">
       <div class="w-full lg:w-[980px] xl:w-[1280px] flex justify-end items-center">
        <div class="apply-text">合计(含运费,投放费)：</div>
        <div class="number !text-[18px]">￥270.00</div>
        <Button class="ml-6" @click="payorder">提交订单</Button>
      </div>
     </div>
    </div>
    <div class="bg-white rounded-[8px]  p-20"  v-if="material.status">
      <div class=" bg-white flex justify-center items-center flex-col gap-10">
        <div class="w-[100px] h-[100px]"><img src="/public/img/auth/status-true.png" alt="" class="w-full h-full "></div>
      <div class="title !text-center">支付成功</div>
     </div>
    </div>
  </div>
  <Drawer v-model="isShow"><div class="bg-white w-[560px] md:h-[608px] max-w-[100vw] max-h-[100vh] rounded-[8px] h-[500px] relative  px-6 pb-3 pt-3.5">
    <div class="w-full h-full flex flex-col justify-between items-center">
      <div class="flex justify-between w-full"><div class="table-title">扫码支付</div><div><img src="/public/img/login/close.png" class="w-6 h-6 "
        @click="isShow=false" /></div></div>
      <div class="flex flex-col items-center">
        <div class="table-title !font-[400]">订单支付金额</div>
        <div class="pop-number my-1">￥270.00</div>
        <div class="pop-code my-4"><img :src="qr_code" class="w-full h-full"/></div>

        <div class="apply-text !text-[#666666] ">请使用{{payconfig.payWay===3?'支付宝':'微信'}}扫一扫，扫描二维码支付</div>
      </div>
      <div class="flex justify-end items-center w-full">
        <span>支付成功请点击</span>
        <Button class="ml-4" @click="finishPay">已完成支付</Button>
      </div>
    </div>
  </div></Drawer>

</template>
<script setup>
import Drawer from '@/components/drawer/index.vue';
import QRCode from 'qrcode'
import { useDayjs } from '#dayjs'
import {prePay,queryOrder,queryAliOrder} from '@/server/apis/pay/index.js';
import {  getOrderDetail } from '@/server/apis/modelorder/index.js';
const qr_data=ref('weixin://wxpay/bizpayurl?pr=gHQRprNz3')
const qr_code=ref('');
const payActive=ref(0);
const isShow=ref(false);
const material=ref({});
const route=useRoute();
const emit=defineEmits(['changeType']);
//倒计时
const payTime=ref();
const payconfig=reactive({
  amount: 0.01,
  attach: "支付订单",
  description: "测试下单用例3",
  orderAmount: 0.01,
  orderId: 1,
  outTradeNo: "ffd2024051617000012",
  payWay: 3,
  scene: "order",
});
const payorder=async ()=>{
  const data=await prePay(payconfig);
  if(payconfig.payWay ===2){
    qr_data.value=data;
    qr_code.value=await QRCode.toDataURL(qr_data.value);
  }else if(payconfig.payWay ===3){
    //支付宝支付逻辑
    qr_data.value=data.qrCode;
    qr_code.value=await QRCode.toDataURL(qr_data.value);
  };
  isShow.value=true;
};
const finishPay=async ()=>{
  if(payconfig.payWay ===2){
    await queryOrder({outTradeNo:payconfig.outTradeNo,attach:payconfig.attach,transactionId:payconfig.outTradeNo});
  }else if(payconfig.payWay ===3){
    await queryAliOrder({outTradeNo:payconfig.outTradeNo,attach:payconfig.attach,transactionId:payconfig.outTradeNo});
  }

isShow.value=false;
}
const init=async ()=>{
  material.value=await getOrderDetail({id:Number(route.query.id)});
  payconfig.orderId=route.query.id;
  payconfig.outTradeNo=material.value.orderNo;
};
onMounted(()=>{
  init();
  if(!material.value.status) {
  setInterval(()=>{
    let data=material.value.createdTime*1000+24*60*60*1000*2;
    const dayjs = useDayjs();
    payTime.value=dayjs(data).fromNow('HH:mm:ss');
  },1000)
}else{
  emit('changeType',3);
}
});
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
