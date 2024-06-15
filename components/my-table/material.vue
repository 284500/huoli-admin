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
        <TableCell class="flex items-center lg:!w-[270px] ">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12" :src="item.cover" />
            </div>
            <div class="ml-2">
              <div class=" table-title">{{ item.orderType }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.config['材料'] }}</div>
              <div class="text-sm !text-[12px] text-[#999999]">制作方:{{ item.vendorName }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">{{ item.quantity + item.unit }}</TableCell>
        <TableCell class="text">{{ item.isRelease }}</TableCell>
        <TableCell class="text">￥{{ item.amount }}</TableCell>
        <TableCell class="text">￥{{ item.payAmount }}</TableCell>
        <TableCell class="text">{{item.payTime?$dayjs(item.payTime*1000).format('YYYY-MM-DD HH:mm:ss'):'-' }}</TableCell>
        <TableCell>

          <div v-if="item.status===7" class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#12D137]"></span><span>{{ statusList[item.status] }}</span>
          </div>
          <div v-if="item.status>7" class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#CCCCCC]"></span><span>{{ statusList[item.status]}}</span>
          </div>
          <div class="flex items-center gap-1.5" v-if="item.status<7&&item.status>2">
            <span class="w-2 h-2 rounded-full bg-[#2277ff]"></span><span>{{ statusList[item.status] }}</span>
          </div>
          <div v-if="item.status<=2" class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#FFA024]"></span><span>{{ statusList[item.status] }}</span>
          </div>
        </TableCell>
        <TableCell class="text sm:!w-[240px]">
          <div class="flex gap-4 w-[fit-content]">
            <NuxtLink :to="`/modelorder/detail?id=${item.id}`">
              <div class="text-[#2277FF] cursor-pointer">查看详情</div>
            </NuxtLink>
            <nuxt-link :to="`/aftersales/create?id=${item.id}`" v-if="item.status===7">
              <div class="text-[#2277FF] cursor-pointer">申请售后</div>
            </nuxt-link>
            <nuxt-link :to="`/modelcenter/material/pay?id=${item.id}`" v-if="item.status < 1">
              <div class="text-[#2277FF] cursor-pointer" >立即付款</div>
            </nuxt-link>
            <div class="text-[#FF5030] cursor-pointer" @click="del(item.id)" v-if="item.status < 2">取消订单</div>
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
    default: ['订单信息', '总数量', '是否投放', '订单总价格', '实际付款', '付款时间', '状态', '操作']
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
        quantity: '',
        unit: "",
        payTime: '',
        unitPrice: '',
        payAmount: '',
      }
    ]
  },
});
// const statusColor=computed(()=>{

// })
const emit = defineEmits(['delete', 'checkchange']);
const statusList = ref([
  '待付款',
  '投放待接单',
  '待寄样',
  '已寄样',
  '待发货',
  '部分发货',
  '待收货',
  '已完成',
  '部分退款',
  '已退款 ',
  '已取消 ',
]);

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
}</style>
