<template>
  <NuxtLayout>
    <MyBreadcrumb :list="BreadcrumbList" />
    <div class="flex flex-col gap-4 mt-3">
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <div class="flex items-center gap-3 mb-5">
          <div class="title">投放统计</div>
          <div>|</div>
          <div class="text">全部商户</div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="text">300/1000</div>
            <div>30%</div>
          </div>
          <Progress  class="!bg-[#F6F7F9]" />
        </div>
        <Separator class="my-3" />
        <div class="grid gap-3 lg:grid-cols-7 grid-cols-4">
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">总分发数</div>
          </div>
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">预算金额</div>
          </div>
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">预算金额</div>
          </div>
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">有效用户</div>
          </div>
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">条件用户</div>
          </div>
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">有效条件用户</div>
          </div>
          <div  class="bg-[#F6F7F9] rounded-[4px] sm:px-3 sm:py-5 p-2 flex flex-col sm:gap-2 gap-1">
            <div class="number text-center !font-[600]">1000</div>
            <div class="text text-center">完成投放率</div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <div class="grid md:grid-cols-2 relative gap-10">
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
                <div class="text flex items-center"><div class="w-2 h-2 bg-[#FFA024] rounded-full mr-1"></div><div>{{ Orderdetail.status}}</div></div>
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
            <div>
              <h1 class="title">商品信息</h1>
              <div class="flex mt-5 table-border p-4 justify-between items-center">
                <div class="flex items-center">
                  <div
                    class="w-[48px] h-[48px] overflow-hidden flex justify-center items-center mr-4 rounded-full"
                  >
                    <img :src="material.cover" alt="" />
                  </div>
                  <div>
                    <div class="table-title">
                      {{ material.orderType }}
                    </div>
                    <div class="table-text">
                     订单信息:{{ material.remarks }}
                    </div>
                  </div>
                </div>
                <div class="text-[#2277FF]" @click="JumpToDetail(material.id)">
                  详情
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 class="title">投放信息</h1>
            <div class="mt-5  gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">投放地区：</div>
                <div class="text">{{Orderdetail.releaseArea}}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">分发总数：</div>
                <div class="text">{{ Orderdetail.quantity }}{{Orderdetail.unit }}</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text w-[98px]">每一份：</div>
                <div class="text">{{Orderdetail.quantity/Orderdetail.merchantsNumber  }}{{Orderdetail.unit }}</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text w-[98px]">截止时间：</div>
                <div class="text">{{$dayjs(Orderdetail.deadline*1000).format('YYYY-MM-DD HH:mm:ss') }}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">分发商户数：</div>
                <div class="text">{{Orderdetail.merchantsNumber}}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">接单分数限定：</div>
                <div class="text">1份</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">订单预定金额：</div>
                <div class="text">{{ Orderdetail.prepaidAmount }}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">定向条件：</div>
                <div class="text flex" v-if="Orderdetail.targetedCondition?.length">
                  <div v-for="item in Orderdetail.targetedCondition">{{ item }}</div>
                </div>
                <div class="text" v-else>无</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text w-[98px]">定向加价：</div>
                <div class="text">{{ Orderdetail.targetedPrice }}元</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <h1 class="title">分发商户</h1>
        <MyTable :tab-items="distributorList.lists" @detail="getList"></MyTable>
      </div>
    </div>
    <MyDrawer v-model="isShow">
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <h1 class="title">投放明细</h1>
        <ReleaseTable :tab-items="ReleaseList.lists"></ReleaseTable>
      </div></MyDrawer>
  </NuxtLayout>
</template>
<script setup>
import MyDrawer from '@/components/drawer/index.vue';

import MyTable from '@/components/my-table/distributor.vue';
import ReleaseTable from '@/components/my-table/releaseDetail.vue';

import {  getReleaseOrderDetail } from '@/server/apis/placeorder/index.js';
import {  getOrderDetail } from '@/server/apis/modelorder/index.js';
import {getDistributorList,getDistributorDetail} from '@/server/apis/order/distributor.js';
import { getReleaseList} from '@/server/apis/order/release.js';
definePageMeta({
  layout: 'center',
});
const route=useRoute();
const router=useRouter();
const isShow=ref(false);
const BreadcrumbList = ref([
  {
    name: '投放订单',
    url: '/placedorder',
  },
  {
    name: '订单详情',
    url: '/placedorder/detail',
  },
]);
const Orderdetail=ref({});
const material=ref({});
const distributorList=ref([]);
const ReleaseList=ref([]);
const init=async ()=>{
  Orderdetail.value=await getReleaseOrderDetail({id:Number(route.query.id)})
  material.value=await  getOrderDetail({id:Orderdetail.value.orderId})
  distributorList.value=await getDistributorList({orderId:Orderdetail.value.id})
}
onMounted(init);
const getList=async (e)=>{
  isShow.value=true;
  ReleaseList.value= await getReleaseList({vendorId:e,releaseOrderId:Orderdetail.value.orderId})
};
const JumpToDetail = (id) => {
router.push({ path: '/modelorder/detail', query: { id } });
};
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
