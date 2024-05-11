<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">地址管理</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            v-for="item in 3"
            class="border-[1px] border-[#eeeeee] rounder-[4px] flex lg:p-6 justify-between items-center p-4"
          >
            <div class="flex items-center">
              <div
                class="w-[48px] h-[48px] overflow-hidden flex justify-center items-center mr-4 rounded-full"
              >
                <img src="/public/img/wallet/wallet.png" alt="" />
              </div>
              <div>
                <div><span class="user">卢杰荣</span> <span class="user">17679984282</span></div>
                <div>
                  <div class="text">福建省 厦门市 湖里区 金山街道后坑社区149号</div>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <Lucide icon="PencilLine" color="#999999" class="h-4 w-4"></Lucide>

              <Lucide icon="Trash2" color="#999999" class="h-4 w-4"></Lucide>
            </div>
          </div>
          <div
            class="border-[1px] border-[#eeeeee] rounder-[4px] flex lg:p-6 justify-between items-center p-4"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 overflow-hidden flex justify-center items-center mr-4 rounded-full bg-[rgba(34,119,255,0.08)]"
              >
            <Lucide icon="Plus" class="h-6 w-6" color="#2277FF" stroke-width="2"></Lucide>
            </div>
              <div>
                <div>
                  <div class="add-address">添加地址</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import { onMounted } from 'vue';
const tabactive = ref(0);
const tabList = ref(['收支明细', '锁定明细']);
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
</style>
