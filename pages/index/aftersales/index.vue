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
        <MyListButton :lists="list"></MyListButton>
        <Separator class="my-5" />
        <div class="header flex mt-1 flex-wrap">
          <Button variant="outline" class="h-9 text-[#666666] mr-8" @click="delH5Array"
            >批量删除</Button
          >
          <MySelect v-model="H5params" :selectType="SearchList"></MySelect>
          <MySelectDate v-model="H5params" class="ml-10"></MySelectDate>
        </div>
        <div>
          ada
        </div>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
const list = ref([
  { name: '待处理', status: 0 },
  { name: '部分退款', status: 1 },
  { name: '已退款', status: 2},
  { name: '已关闭', status: 3 },
]);
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
.label {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
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
