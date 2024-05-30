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
        <TableCell v-if="hasCheck" class="w-6">
          <Checkbox v-model:checked="item.selected" @update:checked="CheckboxChange" />
        </TableCell>
        <TableCell class="text">{{ item.seqNo }}
        </TableCell>
        <TableCell class="text">{{ item.orderId }}</TableCell>
        <TableCell class="text">{{ item.orderType }}</TableCell>

        <TableCell>{{$dayjs(item.createdTime*1000).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#12D137]"></span><span>{{ item.status }}</span>
          </div>
        </TableCell>
        <TableCell class="text sm:!w-[240px]">
          <div class="flex gap-4 w-[fit-content]">
            <div class="text-[#FF5030]">{{ item.amount }}</div>
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
    default: ['流水号', '关联订单', '类型', '交易时间','状态','金额']
  },
  tabItems: {
    typeof: Array,
    default: [
    {
                id: 22,
                seqNo: "202405281751",
                orderType: "充值账单",
                orderId: "FFD2024052515000007",
                buyerId: 1,
                buyerName: "用户",
                sellerId: 1,
                sellerName: "厦门或黎科技有限公司",
                tradeType: "充值流水",
                payType: "投放充值",
                payMethod: "微信支付",
                amount: 1000.0,
                status: "已充值",
                createdTime: 1716889862,
                updatedTime: 1716889862
            },
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
