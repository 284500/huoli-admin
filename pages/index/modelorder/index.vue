<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">物料订单</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div>
        <TableHeader :hasCheck="false"></TableHeader>
        <MyTable :hasCheck="false"></MyTable>
        <MyPagination></MyPagination>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Wuliao from '@/components/my-tab/wuliao.vue';
import Myheader from '@/components/navbar/header.vue';
import TableHeader from '@/components/my-table/index.vue';
import MyTable from '@/components/my-table/table.vue';
import MyPagination from '@/components/my-pagination/index.vue';

import { onMounted } from 'vue';
const tabactive = ref(0);
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
</style>
