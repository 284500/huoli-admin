<template>
  <Myheader>
    <template #left>
      <div class="flex header-left w-[fit-content]">
        <div class="header-title" :class="{ isActive: tabactive === 0 }" @click="tabactive = 0">
          企业
        </div>
        <div class="header-title" :class="{ isActive: tabactive === 1 }" @click="tabactive = 1">
          个人
        </div>
      </div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-4 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col items-center"
    >
      <div class="w-full xl:w-[1000px]">
        <MyStep :tab="stepTab" :activeNumber="stepNumber"></MyStep>
      </div>
      <!-- <Step1></Step1> -->
      <!-- <Step2></Step2> -->
      <!-- <Step3></Step3> -->
      <!-- <Step4></Step4> -->
      <Step5></Step5>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import Step1 from '@/components/authstep/step1.vue';
import Step2 from '@/components/authstep/step2.vue';
import Step3 from '@/components/authstep/step3.vue';
import Step4 from '@/components/authstep/step4.vue';
import Step5 from '@/components/authstep/step5.vue';
import Step6 from '@/components/authstep/step6.vue';




import { onMounted } from 'vue';
const tabactive = ref(0);
const stepTab = ref([
  '广告制作和投放协议',
  '填写企业基本信息',
  '企业资质',
  '绑定银行账户',
  '平台审核',
  '完成',
]);
const stepNumber = ref(0);
</script>
<style scoped>
.header-left {
  border-radius: 4px;
  overflow: hidden;
}
.header-title {
  @apply px-4 py-2 bg-[#F6F7F9] text-[#666666];
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  line-height: 20px;
}
.isActive {
  @apply !bg-[#2277FF] !text-white;
}
.title {
  font-size: 24px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  color: #333333;
  line-height: 32px;
}
.text {
  text-align: left;
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
.user {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  @apply font-medium;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
</style>
