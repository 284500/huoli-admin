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
        <TableCell class="flex items-center">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12" />
            </div>
            <div class="ml-2">
              <div class=" table-title">{{ item.name }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.content }}</div>
              <div class="text-sm !text-[12px] text-[#999999]">{{ item.name }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">{{$dayjs(item.createdTime).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell>{{$dayjs(item.updatedTime).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell class="text sm:!w-[240px]">
          <div class="flex gap-4 w-[fit-content]">
            <div class="text-[#FF5030] cursor-pointer" @click="del(item.id)">删除</div>
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
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '名片',
        createdTime: '',
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 0, selected: false, productType: '名片'
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
