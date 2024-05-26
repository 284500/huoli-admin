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
        <TableCell class="text">{{item.quantity}}</TableCell>
        <TableCell class="text">{{ item.logisticsAddress}}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#FFA024]"></span><span>{{ item.logisticsStatus}}</span>
          </div>
        </TableCell>
        <TableCell class="text">{{ item.unitPrice }}</TableCell>
        <TableCell class="text">{{ item.payAmount }}</TableCell>
        <TableCell class="text">{{  }}</TableCell>

        <TableCell class="text">
          <div class="flex gap-4 w-[fit-content]">
            <div class="text-[#2277FF] cursor-pointer" @click="getdetail(item.id)">投放明细</div>
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
    default: ['商户信息', '接单数', '收货地址', '接单状态', '商户接单设置', '分发数', '消耗金额', '操作']
  },
  tabItems: {
    typeof: Array,
    default: [
      {
        id: 1, remarks: 'Alice',
        orderType: '名片',
        isShelves: 1, selected: false, productType: '名片',
        createdTime: '',
        updatedTime: '',
        payMethod: '已支付',
        quantity:'',
        unit:"",
        payTime:'',
        unitPrice: '',
        payAmount: '',
      }
    ]
  },
});
const emit = defineEmits(['delete', 'checkchange','detail']);

const del = (e) => {
  emit('delete', e)
};
const getdetail = (e) => {
  emit('detail', e)
}
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
