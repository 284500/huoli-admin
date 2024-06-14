<template>
  <Table class=" ">
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead v-for="(item, index) in tableTitle" class="title text-nowrap">
          {{ item }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in tableData" :key="index">
        <TableCell v-for="(value,key) in item" :key="key" class=" text !p-3 !pr-0">
          {{ value }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

</template>
<script setup>
const props = defineProps({
  tableTitle: {
    typeof: Array,
    default: ['作品信息', '创作时间', '最后修改时间', '状态']
  },
  tableData: {
    typeof: Array,
    default: [
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false
      }]
  }
});
</script>
<style scoped>
.title {
  font-size: 12px;
font-family: PingFang SC, PingFang SC-Medium;
font-weight: 600;
color: #333333;
line-height: 20px;
}

.text {
font-size: 12px;
font-family: PingFang SC, PingFang SC-Regular;
text-align: left;
color: #333333;
line-height: 16px;
}
.table-title {
  font-size: 16px;
  font-family: PingFang SC, PingFang SC-Medium;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
</style>
