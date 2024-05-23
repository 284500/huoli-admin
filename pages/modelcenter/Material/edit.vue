<template>
  <NuxtLayout title="收银台">
    <template #center>
      <MyStep :tab="stepTab" :activeNumber="stepNumber" class="!w-[600px] lg:flex hidden"></MyStep>
    </template>
    <!-- <Step1></Step1> -->
    <!-- <Step2></Step2> -->
    <Step3></Step3>

  </NuxtLayout>
</template>
<script setup>
import Step1 from '@/components/model-center/Material/step1.vue';
import Step2 from '@/components/model-center/Material/step2.vue';
import Step3 from '@/components/model-center/Material/step3.vue';


definePageMeta({
  layout: 'center',
});
const stepTab = ref(['定制设计', '确认订单', '支付订单', '完成']);
const stepNumber = ref(1);
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
</style>
