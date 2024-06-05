<template>
  <NuxtLayout>
    <MyBreadcrumb :list="BreadcrumbList" />
    <div class="flex flex-col gap-4 mt-3">
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <h1 class="title">订单信息</h1>
        <MyTable :hasCheck="false" :tabItems="TabItems"></MyTable>
        <div class="flex justify-end mt-4 items-center">
          <div class="title !text-[14px] !leading-[20px]">订单合计：</div>
          <div class="total-number ml-2 pl-3">￥270.00</div>
        </div>
      </div>
      <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
        <div class="grid md:grid-cols-2 relative gap-10 md:gap-20">
          <Separator class="absolute left-[50%] hidden md:block" orientation="vertical" />

          <div>
            <h1 class="title">申请信息</h1>
            <div class="mt-5 mb-8 gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text">申请类型：</div>
                <div class="text">{{ AfterSale.orderType }}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">申请理由：</div>
                <div class="text">{{ AfterSale.reason }}</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">申请凭证：</div>
                <div class="text flex gap-2">
                  <div class="w-[100px] h-[100px]"><img :src="AfterSale.applyScrip" class="w-full h-full object-cover"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 class="title">处理结果</h1>
            <div class="mt-5  gap-3 flex flex-col">
              <div class="flex gap-3">
                <div class="muted-text">处理结果：</div>
                <div class="text">{{ AfterSale.auditResult }}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">退款金额：</div>
                <div class="text">{{ AfterSale.returnAmount}}元</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">处理说明：</div>
                <div class="text">{{ AfterSale.returnDesc }}</div>
              </div>

              <div class="flex gap-3">
                <div class="muted-text">处理凭证：</div>
                <div class="text flex gap-2">
                  <div class="w-[100px] h-[100px]"><img :src="AfterSale.auditScrip" class="w-full h-full object-cover"></div>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text mr-3">处理人：</div>
                <div class="text">{{ AfterSale.auditName }}</div>
              </div>
              <div class="flex gap-3">
                <div class="muted-text">处理时间：</div>
                <div class="text">{{AfterSale.auditTime?$dayjs(AfterSale.auditTime*1000).format('YYYY-MM-DD HH:mm:ss'):'' }}</div>
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
import { getAfterSaleDetail, deleteAfterSale } from '@/server/apis/aftersale/index.js';
definePageMeta({
  layout: 'center',
});
const route = useRoute();
const router = useRouter();
const AfterSale = ref({});
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
},]);
const init = async () => {
  AfterSale.value = await getAfterSaleDetail({ id: Number(route.query.id) })
};
onBeforeMount(init);
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

.total-number {
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

.table-title {
  font-size: 16px;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 24px;
}

.table-text {
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 20px;
}</style>
