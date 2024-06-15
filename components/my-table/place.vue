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
        <TableCell class="flex items-center lg:!w-[300px] ">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12" :src="item.ffdOrderDetailVo?.cover" />
            </div>
            <div class="ml-2">
              <div class=" table-title text-nowrap">{{ item.ffdOrderDetailVo?.orderType }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.ffdOrderDetailVo?.quantity }}{{ item.ffdOrderDetailVo?.unit }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">{{ item.releaseArea }}</TableCell>
        <TableCell class="text">{{ $dayjs(item.deadline * 1000).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell class="text">￥{{ item.regularPrice }}</TableCell>
        <TableCell class="text">{{item.targetedPrice}}</TableCell>
        <TableCell class="text">{{ item.prepaidAmount }}</TableCell>
        <TableCell>
          <div class="flex items-center gap-1.5">
            <!-- <span class="w-2 h-2 rounded-full bg-[#FFA024]"></span><span>{{statusList[item.status]}}</span> -->
            <span class="w-2 h-2 rounded-full " :class="StatusColor(item.status)"></span><span>{{ item.status }}</span>
          </div>
        </TableCell>
        <TableCell class="text sm:!w-[200px]">
          <div class="flex flex-col gap-2" v-if="item.status!=='已停止'">
            <div class="flex justify-between">
              <div class="text flex !text-[12px]"><span>{{ item.releaseCount}}</span><span class="text-[#999999]">/</span><span
                  class="text-[#999999]">{{ item.quantity }}</span></div>
              <div class="text-[#2277FF]" :class="{'text-[#12D137]':item.releaseCount==item.quantity}">{{ item.releaseCount/item.quantity*100 }}%</div>
            </div>
            <Progress :model-value="item.releaseCount/item.quantity" class="!bg-[#F6F7F9]" />
          </div>
          <div v-else>-</div>
        </TableCell>
        <TableCell class="text sm:!w-[200px]">
          <div class="flex gap-4 w-[fit-content]">
            <NuxtLink :to="`/placedorder/detail?id=${item.id}`">
              <div class="text-[#2277FF] cursor-pointer">查看详情</div>
            </NuxtLink>
            <div v-if="statusList.indexOf(item.status)<4" class="text-[#FF5030] cursor-pointer" @click="del(item.id)">停止投放</div>
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
    default: ['投放订单', '投放地区', '截止时间', '普通投放价', '定向加价', '投放总预付金额', '投放单状态', '投放进度', '状态']
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
const statusList = ref([
  '待接单',
  '部分接单',
  '待投放',
  '投放中',
  '已完成',
  '已停止',
]);
const StatusColor = (id) => {
  let status=statusList.value.indexOf(id)
  if(status<3){
    return '!bg-[#FFA024]'
  }else if(status==3){
    return '!bg-[#2277FF]'
  }else if(status==4){
    return '!bg-[#12D137]'
  }else{
    return '!bg-[#CCCCCC]'
  }
}
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
