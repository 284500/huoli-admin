<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">我的钱包</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-bWallet md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div>
        <div
          class="flex gap-x-[160px] gap-y-4 md:p-5 p-3 justify-between bWallet-[1px] bWallet-[#EEEEEE] rounded-[4px] items-center overflow-hidden flex-wrap"
        >
          <div class="flex items-center w-full sm:w-auto">
            <div
              class="sm:w-[120px] sm:h-[120px] w-16 h-16 overflow-hidden flex justify-center items-center sm:p-6 mr-4"
            >
              <img src="/public/img/wallet/wallet.png" alt="" class="w-full h-full" />
            </div>
            <div>
              <div class="title !text-left mb-2">我的可用余额</div>
              <div class="flex">
                <div class="number sm:!text-[40px] sm:leading-[48px] mr-auto flex items-center">
                  1000.03
                </div>
                <!-- <Button
                  class="sm:ml-6 ml-3 sm:h-10 text-[#2277FF] bWallet-[#2277FF] rounded-[4px]"
                  variant="outline" @click="isExtract = true"
                  >提现</Button
                > -->
                <Button class="sm:h-10 ml-3 rounded-[4px]" @click="isPay = true">充值</Button>
              </div>
            </div>
          </div>
          <div class="flex sm:px-5 bWallet-[#EEEEEE] flex-1">
            <div v-for="num in 4" class="flex flex-col gap-2 flex-1 w-[80px]">
              <div class="number">num</div>
              <div class="title">title</div>
            </div>
          </div>
        </div>
        <Wuliao class="mt-8 mb-5" v-model="tabactive" :tab="tabList"></Wuliao>
        <div v-if="tabactive == 0">
          <WalletTable :tab-items="Wallet.pager.lists"></WalletTable>
          <MyPagination v-model="Wallet.pager" @change="Wallet.getLists"></MyPagination>
        </div>
        <div v-else>
          <WalletTable2></WalletTable2>
          <MyPagination></MyPagination>
        </div>
      </div>
      <Footer></Footer>
      <!-- 充值弹窗 -->
      <Drawer v-model="isPay" @close="initDrawer">
        <div
          class="bg-white w-[560px]  max-w-[100vw] max-h-[100vh] rounded-[8px]  relative px-6 pb-3 pt-3.5"
        >
          <div class="w-full h-full flex flex-col justify-between items-center gap-10">
            <div class="flex justify-between w-full">
              <div class="table-title !text-[18px]">扫码支付</div>
              <div>
                <img src="/public/img/login/close.png" class="w-6 h-6" @click="isPay = false" />
              </div>
            </div>
            <div v-if="!paychange" class="w-full flex flex-col justify-between items-center gap-5 flex-1">
              <div class="w-full">
                <h1 class="mb-5">请输入充值金额</h1>
                <div class="flex gap-4 items-center">
                  <Input type="number" placeholder="请输入金额" class="w-1/3" v-model="payconfig.orderAmount" />
                  <div>元</div>
                </div>
              </div>
              <div class="grid gap-4 grid-cols-2 mt-4 w-full">
                <div
                  class="table-border p-2"
                  :class="{ '!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]' :payconfig.payWay === 3 }"
                >
                  <div class="flex gap-3 items-center" @click="payconfig.payWay = 3">
                    <div class="w-8 h-8"><img src="/public/img/pay/zfb.png" /></div>
                    <div class="text">支付宝支付</div>
                  </div>
                </div>
                <div
                  class="table-border p-2"
                  :class="{ '!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]' :payconfig.payWay === 2 }"
                >
                  <div class="flex gap-3 items-center" @click="payconfig.payWay = 2">
                    <div class="w-8 h-8"><img src="/public/img/pay/wx.png" /></div>
                    <div class="text">微信支付</div>
                  </div>
                </div>
              </div>
              <Button class="mb-6 w-1/2 text-lg h-10" @click="payorder">确认充值</Button>
            </div>
            <div v-else class="w-full flex flex-col items-center gap-5 flex-1">
              <div class="flex flex-col items-center">
                <div class="table-title !font-[400]">订单支付金额</div>
                <div class="pop-number my-1">￥{{ payconfig.orderAmount }}</div>
                <div class="pop-code my-4"><img :src="qr_code" class="w-full h-full" /></div>

                <div class="apply-text !text-[#666666]">请使用支付宝扫一扫，扫描二维码支付</div>
              </div>
              <div class="flex justify-end items-center w-full">
                <span>支付成功请点击</span>
                <Button class="ml-4" @click="payfinish">已完成支付</Button>
              </div>
            </div>
          </div>
        </div></Drawer>
        <!-- 提现弹窗 -->
      <Drawer v-model="isExtract">
        <div
          class="bg-white w-[560px]  max-w-[100vw] max-h-[100vh] rounded-[8px]  relative px-6 pb-3 pt-3.5"
        >
          <div class="w-full h-full flex flex-col justify-between items-center gap-10">
            <div class="flex justify-between w-full">
              <div class="table-title !text-[18px]">提现</div>
              <div>
                <img src="/public/img/login/close.png" class="w-6 h-6" @click="isExtract = false" />
              </div>
            </div>
            <div class="w-full">
                <h1 class="mb-5">请输入充值金额</h1>
                <div class="flex gap-4 items-center">
                  <Input type="number" placeholder="请输入金额" class="w-1/3"/>
                  <div>元</div>
                </div>
              </div>
              <div class="grid gap-4 grid-cols-2 mt-4 w-full">
                <div
                  class="table-border p-2"
                  :class="{ '!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]': payconfig.payWay === 3 }"
                >
                  <div class="flex gap-3 items-center" @click="payconfig.payWay = 3">
                    <div class="w-8 h-8"><img src="/public/img/pay/zfb.png" /></div>
                    <div class="text">支付宝支付</div>
                  </div>
                </div>
                <div
                  class="table-border p-2"
                  :class="{ '!border-[#2277FF] !bg-[rgba(34,119,255,0.06)]': payconfig.payWay === 2 }"
                >
                  <div class="flex gap-3 items-center" @click="payconfig.payWay = 2">
                    <div class="w-8 h-8"><img src="/public/img/pay/wx.png" /></div>
                    <div class="text">微信支付</div>
                  </div>
                </div>
              </div>
              <Button class="mb-6 w-1/2 text-lg h-10" @click="payorder">确认充值</Button>
          </div>
        </div></Drawer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Wuliao from '@/components/my-tab/wuliao.vue';
import Myheader from '@/components/navbar/header.vue';
import WalletTable from '@/components/my-table/wallet.vue';
import WalletTable2 from '@/components/my-table/wallet2.vue';
import MyPagination from '@/components/my-pagination/index.vue';
import { usePaging } from '@/hooks/usePaging';
import { getWalletList } from '@/server/apis/wallet/index.js';
import { getWalletOrder } from '@/server/apis/wallet/recharge.js';
import {prePay,payType,closeOrder} from '@/server/apis/pay/index.js';
import { onMounted } from 'vue';
import Drawer from '@/components/drawer/index.vue';
import QRCode from 'qrcode'

const qr_data=ref('')
const qr_code=ref('')
//提现
const isExtract = ref(false);
const isPay = ref(false);
const tabactive = ref(0);
const tabList = ref(['收支明细', '锁定明细']);
const WalletParams=ref({
})
const Wallet = usePaging({ fetchFun: getWalletList,params: WalletParams });
const paychange = ref(false);
//充值数据
const payconfig=reactive({
  attach: "支付订单",
  description: "测试下单用例3",
  orderAmount: 0,
  orderId: null,
  redirectUrl: "http://localhost:8084/app-api/ffd/v1/pay/notifyMnp",
  payWay:3,
  scene: "recharge",
});

const init = async () => {
  await Wallet.getLists();
};
const initDrawer=()=>{
  paychange.value=false;
}
onMounted(() => {
  init();
});
const payorder=async ()=>{
  let {orderId}=await getWalletOrder({orderAmount:payconfig.orderAmount});
  payconfig.orderId=orderId;
  const data=await prePay(payconfig);
  //微信支付逻辑
  if(payconfig.payWay ===2){
  qr_data.value=data;
  qr_code.value=await QRCode.toDataURL(qr_data.value);
  }else{
    //支付宝支付逻辑
    qr_data.value=data.qrCode;
    qr_code.value=await QRCode.toDataURL(qr_data.value);
  }

  paychange.value=true;
};
const payfinish=()=>{
  paychange.value=false;
};
</script>
<style scoped>
.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
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
