<template>
  <Table class="">
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead v-for="(item, index) in tableTitle" class="title">
          {{ item }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in tabItems" :key="index" :class="item.selected ? 'bg-muted' : ''">
        <TableCell class="flex items-center">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12" :src="item.cover" />
            </div>
            <div class="ml-2">
              <div class=" table-title">{{ item.vendorName}}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.content }}</div>
              <div class="text-sm !text-[12px] text-[#999999]">{{ item.name }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">{{item.createdTime}}</TableCell>
        <TableCell class="text">{{ item.releaseScrip}}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#FFA024]"></span><span>{{ item.logisticsStatus}}</span>
          </div>
        </TableCell>
        <TableCell class="text">{{ item.isTargeted?'是':'否' }}</TableCell>
        <TableCell class="text">{{ item.payAmount }}</TableCell>
        <TableCell class="text">{{ item.isEffective?'是':'否' }}</TableCell>
        <TableCell class="text">{{ item.fee }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
<script setup>
const props = defineProps({
  tableTitle: {
    typeof: Array,
    default: ['分发商户', '分发时间', '凭证', '提取数据', '是否条件用户', '用户访问时间', '是否有效用户', '获得佣金']
  },
  tabItems: {
    typeof: Array,
    default: [
      {
        id: 1,
        fee:'',
        createdTime: '',
        isEffective:'',
        updatedTime: '',
        payMethod: '',
        quantity:'',
        unit:"",
        payTime:'',
        unitPrice: '',
        payAmount: '',
      }
    ]
  },
});
</script>
<style scoped>
.title {
  font-size: 14px;
  font-family: PingFang SC, PingFang SC-Regular;
  @apply font-normal;
  text-align: left;
  color: #666666;
  line-height: 20px;
}

.text {
  font-size: 14px;
  font-family: PingFang SC, PingFang SC-Regular;
  @apply font-normal;
  text-align: left;
  color: #333333;
  line-height: 20px;
}

.table-title {
  font-size: 16px;
  font-family: PingFang SC, PingFang SC-Medium;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
</style>
