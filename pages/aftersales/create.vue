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
        <div class="mt-5 mb-8 gap-3 flex flex-col">
          <div class="flex gap-3">
            <div class="table-title flex items-center">申请类型：</div>
            <MySelectMain :selectType="selectType" class="!w-[240px]"></MySelectMain>
          </div>
          <div class="flex gap-3">
            <div class="table-title flex items-center">申请理由：</div>
            <Input type="email" placeholder="Email" class="w-[240px]" />
          </div>

          <div class="flex gap-3">
            <div class="table-title flex items-center">申请凭证：</div>

              <div class="flex gap-3 items-center">
                <div
                  class="w-[100px] h-[100px] input-border flex justify-center items-center relative"
                >
                  <input type="file" class="absolute top-0 left-0 right-0 bottom-0 opacity-0" />

                  <div class="w-6 h-6 dashed-border flex justify-center items-center">
                    <div class="w-[14px] h-[14px] dashed-border">
                      <img src="/public/add.png" alt="" class="w-full h-full" />
                    </div>
                  </div>
                </div>
                <div class="table-text">需图片、文字清晰、边框完整真实性</div>
            </div>
          </div>
        </div>
        <div class="mb-4">
      <Button class="w-[80px] rounded-[4px] bg-[#ffffff] text-muted-foreground mr-12 hover:bg-white" @click="router.back">取消申请</Button>
      <Button class="w-[80px] rounded-[4px] bg-[#2277ff] text-white" @click="nextStep">确认申请</Button>
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
const selectType = ref([
  {
    value: 'name',
    key: '申请退款',
  },
  {
    value: 'content',
    key: '申请换货',
  },
]);
const BreadcrumbList = ref([
  {
    name: '售后服务',
    url: '/aftersales',
  },
  {
    name: '申请售后',
    url: '/aftersales/create',
  },
]);
const TabItems = ref([
  {
    id: 1,
    remarks: 'Alice',
    isShelves: 1,
    selected: false,
    productType: '名片',
  },
]);
const init = async () => {
  AfterSale.value = await getAfterSaleDetail({ id: Number(route.query.id) });
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
.input-border {
  border: 1px solid #DDDDDD;
  border-radius: 4px;
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
</style>
