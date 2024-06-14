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
      <TableRow>
        <TableCell class="flex items-center">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12" :src="tableItem.cover"/>
            </div>
            <div class="ml-2">
              <div class=" table-title">{{ tableItem.id }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ tableItem.specification||'规格' }}</div>
              <div class="text-sm !text-[12px] text-[#999999]">制作方:{{ tableItem.manufacturer }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text"></TableCell>
        <TableCell class="text"></TableCell>
        <TableCell class="text sm:!w-[240px]">

        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

</template>
<script setup>
const props = defineProps({
  tableTitle: {
    typeof: Array,
    default: ['印刷厂订单', '规格参数', '数量', '价格']
  },
  tableItem: {
    typeof: Object,
    default:
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      }
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
