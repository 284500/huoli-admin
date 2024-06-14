<template>
  <Table class=" ">
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead v-for="(item, index) in tableTitle" class="title">
          {{ item }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in tabItems" :key="index" :class="item.selected ? 'bg-muted' : ''">
        <TableCell class="text">
          {{ item.orderId }}
        </TableCell>
        <TableCell class="text">{{ item.lockedAmount }}</TableCell>
        <TableCell>{{$dayjs(item.lockTime*1000).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#12D137]" :class="{'!bg-[#FF5030]':item.status!=='已解锁'}"></span><span>{{ item.status }}</span>
          </div>
        </TableCell>
        <TableCell class="text"> <div class="flex gap-4 w-[fit-content]">
            <div  :class="{'text-[#FF5030]':item.status==='已解锁'}">{{item.status==='已解锁'?item.usedAmount:'-'}}</div>
          </div>
        </TableCell>
        <TableCell class="text"> <div class="flex gap-4 w-[fit-content]">
            <div  :class="{'text-[#FF5030]':item.status==='已解锁'}">{{item.status==='已解锁'?item.unlockedAmount:'-'}}</div>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

</template>
<script setup>
const props = defineProps({
  tableTitle: {
    typeof: Array,
    default: ['关联订单','锁定金额', '锁定时间','状态','消耗金额','解锁金额']
  },
  tabItems: {
    typeof: Array,
    default: [{id: 17, vendorId: 3, status: "已解锁", orderId: "FFD2024053017000030", lockTime: 1718332611,
    lockedAmount: 10, unlockTime: 1724398611, unlockedAmount: 10,usedAmount:100,updatedTime: 1724398611,createdTime: 1724398611},
    ]
  }
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
