<template>
  <Table>
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead class="w-6">
          <Checkbox v-model:checked="allCheck" @update:checked="allCheckChange" />
        </TableHead>
        <TableHead v-for="title in totalTile" class="title">
          {{ title }}
        </TableHead>
      </TableRow>
    </TableHeader>
  </Table>
  <Table v-for="(item, index) in tabItems" :key="index" >
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead v-if="hasCheck" class="w-6">
          <Checkbox v-model:checked="item.selected" @update:checked="CheckboxChange" />
        </TableHead>
        <TableHead v-for="title in tableTitle" class="title">
          {{ title }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow :class="item.selected ? 'bg-muted' : ''">
        <TableCell v-if="hasCheck" class="w-6">

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
            <div class="text-[#2277FF] cursor-pointer">立即下单</div>
            <div class="text-[#2277FF] cursor-pointer">继续创作</div>
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
    default: ['作品信息', '创作时间', '最后修改时间', '状态']
  },
  tabItems: {
    typeof: Array,
    default: [
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '名片',
        createdTime: '',
        updatedTime: ''
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '名片',
        createdTime: '',
        updatedTime: ''
      },
    ]
  },
  hasCheck: {
    typeof: Boolean,
    default: true
  }
});
const emit = defineEmits(['delete', 'checkchange']);
const totalTile=ref(['退款订单','退款订单','退货原因','审核方','退款金额','退款说明','退款时间','售后状态','状态'])
const allCheck = ref(false);
const checkItem = computed(() => {
  return props.tabItems.filter(item => {
   return item.selected === true;
  })
})
const allCheckChange = (val) => {
  props.tabItems.forEach(item => {
    item.selected = val;
  })
  emit('checkchange', checkItem.value)
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
  text-align: left;
  color: #333333;
  line-height: 24px;
}
</style>

