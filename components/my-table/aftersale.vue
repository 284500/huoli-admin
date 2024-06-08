<template>
  <Table>
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead class="w-6">
          <Checkbox v-model:checked="allCheck" @update:checked="allCheckChange" />
        </TableHead>
        <TableHead v-for="title in totalTile" class="title !w-[200px]">
          {{ title }}
        </TableHead>
      </TableRow>
    </TableHeader>
  </Table>
  <Table v-for="(item, index) in tabItems" :key="index" >
    <TableHeader class="relative">
      <TableRow class="!bg-[#f9fafb">
        <TableHead class="w-6">
          <Checkbox v-model:checked="allCheck" @update:checked="allCheckChange" />
        </TableHead>
        <TableHead v-for="title in totalTile" class="title !w-[200px]">
          {{ title }}
        </TableHead>
      </TableRow>
      <div class=" absolute top-0 left-0 right-0 bottom-0 bg-[#F9FAFB] flex items-center px-4 gap-6">
        <div class="flex items-center gap-2 text-nowrap bg-[#FFA024] rounded-full px-2 pt-1 text-[white] text-[12px]">售后单</div>
        <div class="flex gap-1"><div class="title">申请单号：</div><div class="text">{{ item.ffdOrderDetailVo.orderNo}}</div></div>
        <div class="flex gap-1"><div class="title">关联单号：</div><div class="text">{{ item.orderId }}</div></div>
        <div class="flex gap-1"><div class="title">状态：</div><div class="text">{{ item.orderType }}</div></div>
        <div class="flex"><div class="title !text-[#2277FF]">制作订单</div><Lucide class="h-5 w-5" icon="ChevronRight" color="#2277FF"></Lucide></div>
      </div>

    </TableHeader>
    <TableBody>
      <TableRow class="" :class="item.selected ? 'bg-muted' : ''">
        <TableCell v-if="hasCheck" class="w-6">
          <Checkbox v-model:checked="item.selected" @update:checked="CheckboxChange" />
        </TableCell>
        <TableCell class="flex items-center h-full">
          <div class="flex">
            <div class="flex items-center"><img class="w-12 h-12 object-cover" :src="item.ffdOrderDetailVo.cover" />
            </div>
            <div class="ml-2 hidden 2xl:block">
              <div class=" table-title">{{ item.ffdOrderDetailVo.orderType }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.ffdOrderDetailVo.config }}</div>
              <div class="text-sm !text-[12px] text-[#999999]">{{ item.name }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">{{ item.ffdOrderDetailVo.amount }}</TableCell>
        <TableCell class="text">{{ item.applyReason }}</TableCell>
        <TableCell class="text">{{ item.auditName?item.auditName:'-' }}</TableCell>
        <TableCell class="text">￥{{ item.returnAmount }}</TableCell>
        <TableCell class="text">{{ item.returnDesc?item.returnDesc:'-' }}</TableCell>
        <TableCell>{{item.auditTime?$dayjs(item.auditTime*1000).format('YYYY-MM-DD HH:mm:ss'):'-' }}</TableCell>
        <TableCell>
          <div class="text flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#FFA024]"></span><span>{{ item.status}}</span>
          </div>
        </TableCell>
        <TableCell class="text">
          <div class="flex gap-4 w-[fit-content]">
            <NuxtLink :to="`/aftersales/detail?id=${item.id}`">
            <div class="text-[#2277FF] cursor-pointer">查看详情</div></NuxtLink>
            <div class="text-[#FF5030] cursor-pointer" @click="del(item.id)">取消申请</div>
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
    default: ['作品信息', '创作时间', '最后修改时间', '状态']
  },
  tabItems: {
    typeof: Array,
    default: [
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '名片',
        createdTime: '',
        updatedTime: '',
        orderId: '123456789',
        orderType: '退款',
      }
    ]
  },
  hasCheck: {
    typeof: Boolean,
    default: true
  }
});
const emit = defineEmits(['delete', 'checkchange']);
const totalTile=ref(['退款订单','订单金额','退货原因','审核方','退款金额','退款说明','退款时间','售后状态','状态'])
const allCheck = ref(false);
const checkItem = computed(() => {
  return props.tabItems.filter(item => {
    console.log(item)
   return item.selected === true;
  })
})
const allCheckChange = (val) => {
  console.log(val)
  props.tabItems.forEach(item => {
    item.selected = val;
  })
  emit('checkchange', checkItem.value)
  console.log(checkItem.value)

}
const CheckboxChange = () => {
  let flag = true;
  props.tabItems.forEach(item => {
    if (item.selected === true) {
    } else {
      flag = false;
    }
  });
  allCheck.value = flag;
  emit('checkchange', checkItem.value)
  console.log(checkItem.value)
};
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
  @apply font-medium;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
</style>

