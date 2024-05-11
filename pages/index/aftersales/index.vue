<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">售后服务</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div>
          <ul class="flex whitespace-nowrap overflow-auto h-8">
            <li
              class="px-4 py-1.5 hover:!text-[#2277ff] rounded-[4px] label cursor-pointer title"
              v-for="(item, index) in list1"
              :key="index"
              :class="ActiveList === index ? 'isActive' : ''"
              @click="ActiveList = index"
            >
              {{ item }}
            </li>
          </ul>
          <Separator class="my-5" />
          <MyTable></MyTable>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import { onMounted } from 'vue';
const tabactive = ref(0);
const ActiveList = ref(0);
const tabList = ref(['收支明细', '锁定明细']);
const list1 = ref(['全部', '待接单', '部门接单', '待投放', '投放中','已完成','已停止']);

</script>
<style scoped>
.header-left {
  font-size: 18px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
.label{
  font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
@apply font-normal;
text-align: center;
color: #333333;
line-height: 20px;
}
.text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  @apply font-normal;
  text-align: left;
  color: #999999;
  line-height: 20px;
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
.add-address {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  @apply font-normal;
  text-align: left;
  color: #666666;
  line-height: 24px;
}
.isActive {
  @apply bg-[rgba(34,119,255,0.08)];
  color: #27f !important;
}
</style>
