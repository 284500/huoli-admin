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
          <div class="flex gap-x-4 items-center">
            <div class="flex items-center"><img class="w-12 h-12" :src="item.ffdOrderDetailVo?.cover" />
            </div>

            <div class=" text">{{ name}}</div>

          </div>
        </TableCell>
        <TableCell class="text">{{item.releaseArea}}</TableCell>
        <TableCell class="text">{{ item.ffdOrderDetailVo?.vendorId}}</TableCell>
        <TableCell>
          <div >
            <div>每份：100</div><span>最低接：100，最高接：300</span>
          </div>
        </TableCell>
        <TableCell class="text">{{ item.quantity }}</TableCell>
        <TableCell class="text">{{item.deadline?$dayjs(item.deadline*1000).format('YYYY-MM-DD HH:mm:ss'):'-' }}</TableCell>
        <TableCell class="text">{{item.regularPrice}}</TableCell>
        <TableCell class="text">{{item.targetedPrice}}</TableCell>
        <TableCell class="text !font-[600]">￥{{item.prepaidAmount}}</TableCell>
      </TableRow>
    </TableBody>
  </Table>

</template>
<script setup>
const props = defineProps({
  tableTitle: {
    typeof: Array,
    default: ['订单信息', '投放地区', '分发商数', '接单数及限制','分发总数','截止时间','普通投放价','定向加价','投放总预付金额']
  },
  name:{
    type:String,
    default:"卡片"
  },
  item: {
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
