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
        <TableCell class="flex items-center lg:!w-[200px] ">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12" />
            </div>
            <div class="ml-2">
              <div class=" table-title">{{ item.name }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.content }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">1000张</TableCell>
          <TableCell class="text">是</TableCell>
          <TableCell class="text">￥1200.00</TableCell>
          <TableCell class="text">￥1200.00</TableCell>
        <TableCell class="text">{{$dayjs(item.createdTime).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#FFA024]"></span><span>投放中</span>
          </div>
        </TableCell>
        <TableCell class="text sm:!w-[200px]">
          <div class="flex flex-col gap-2">
          <div class="flex justify-between">
            <div class="text flex !text-[12px]"><span >300</span><span  class="text-[#999999]">/</span><span class="text-[#999999]">1000</span></div>
            <div class="text-[#2277FF]">30%</div>
          </div>
          <Progress  :model-value="33" class="!bg-[#F6F7F9]"/>
        </div>
        </TableCell>
        <TableCell class="text sm:!w-[200px]">
          <div class="flex gap-4 w-[fit-content]">
            <div class="text-[#2277FF] cursor-pointer">查看详情</div>
            <div class="text-[#FF5030] cursor-pointer" @click="del(item.id)">停止投放</div>
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
    default: ['投放订单', '投放地区', '截止时间', '普通投放价','定向加价','投放总预付金额','投放单状态', '投放进度','状态']
  },
  tabItems: {
    typeof: Array,
    default: [
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, productType: '名片',
        createdTime: '',
        updatedTime: ''
      }
    ]
  },
});
const emit = defineEmits(['delete', 'checkchange']);

const del = (e) => {
  emit('delete', e)
};
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
