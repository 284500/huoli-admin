<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">我的钱包</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col"
    >
      <div class="flex flex-col flex-1">
        <div
          class="flex  xl:gap-x-[160px]  gap-y-6 md:p-5 p-3  border-[1px] border-[#EEEEEE] rounded-[4px] items-center overflow-hidden flex-wrap lg:flex-nowrap"
        >
          <div class="flex items-center w-full sm:px-10 lg:w-auto px-4 lg:px-0">
            <div
              class="sm:w-[120px] sm:h-[120px] w-16 h-16 overflow-hidden flex justify-center items-center sm:p-6 mr-4"
            >
              <img src="/public/img/wallet/wallet.png" alt="" class="w-full h-full" />
            </div>
            <div class="flex-1">
              <div class="title !text-left mb-2">我的可用余额</div>
              <div class="flex justify-between">
                <div class="number sm:!text-[40px] sm:leading-[48px] sm:mr-15 lg:mr-20 flex items-center ">
                  {{ accountInfo?.balance }}
                </div>
                <div class="sm:mr-10">
                  <!-- <Button
                  class="sm:ml-6 ml-3 sm:h-10 text-[#2277FF] border-[#2277FF] rounded-[4px]"
                  variant="outline" @click="isExtract = true"
                  >提现</Button
                > -->
                <Button class="sm:h-10 ml-3 rounded-[4px]" @click="isPay = true">充值</Button>
                </div>

              </div>
            </div>
          </div>
          <div class="flex sm:px-5 border-[#EEEEEE] flex-1 ">
            <div  class="flex flex-col gap-2 flex-1 w-[80px]">
              <div class="number">{{ accountInfo?.pendingAmount }}</div>
              <div class="title">待结算金币</div>
            </div>
            <div  class="flex flex-col gap-2 flex-1 w-[80px]">
              <div class="number">{{ accountInfo?.settledAmount }}</div>
              <div class="title">已结算金币</div>
            </div>
            <div  class="flex flex-col gap-2 flex-1 w-[80px]">
              <div class="number">{{ accountInfo?.lockedAmount }}</div>
              <div class="title">锁定余额</div>
            </div>
            <div  class="flex flex-col gap-2 flex-1 w-[80px]">
              <div class="user-status">{{ accountInfo?.status }}</div>
              <div class="title">账户状态</div>
            </div>
          </div>
        </div>
        <Wuliao class="mt-8 mb-5" v-model="tabactive" :tab="tabList"></Wuliao>
        <div v-if="tabactive == 0" class="flex-1 flex flex-col">
          <div v-if="Wallet.pager.lists.length" class="flex flex-col flex-1">
            <WalletTable :tab-items="Wallet.pager.lists"></WalletTable>
            <MyPagination v-model="Wallet.pager" @change="Wallet.getLists"></MyPagination>
          </div>
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
        <div v-else>
          <div v-if="Lock.pager.lists.length" class="flex flex-col flex-1">
            <WalletTable2 :tab-items="Lock.pager.lists"></WalletTable2>
            <MyPagination v-model="Lock.pager" @change="Lock.getLists"></MyPagination>
          </div>
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
import { getWalletList,getAccountInfo,getLockList } from '@/server/apis/wallet/index.js';
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
const WalletParams=ref(null)
const LockParams=ref(null);
const Wallet = usePaging({ fetchFun: getWalletList,params: WalletParams.value });
const Lock = usePaging({ fetchFun: getLockList,params: LockParams.value });
const paychange = ref(false);
const accountInfo=ref(null);
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
   Wallet.getLists();
   Lock.getLists();
  accountInfo.value= await getAccountInfo();
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
  @apply font-semibold;

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
.user-status{
font-size: 20px;
font-family: PingFang SC, PingFang SC-Semibold;
font-weight: 600;
text-align: center;
color: #12d137;
line-height: 32px;
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
