<template>
  <Table class=" ">
    <TableHeader>
      <TableRow class="!bg-[#f9fafb]">
        <TableHead v-if="hasCheck" class="w-6">
          <Checkbox v-model:checked="allCheck" @update:checked="allCheckChange" />
        </TableHead>
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
            <div class="flex items-center"><img class="w-12 h-12" :src="item.cover"/>
            </div>
            <div class="ml-2">
              <div class=" table-title">{{ item.name }}</div>
              <div class="text-sm !text-[12px]  text-[#999999]">{{ item.specification }}</div>
              <div class="text-sm !text-[12px] text-[#999999]">制作方:{{ item.name }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell class="text">{{$dayjs(item.createdTime*1000).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell>{{$dayjs(item.updatedTime*1000).format('YYYY-MM-DD HH:mm:ss') }}</TableCell>
        <TableCell class="text sm:!w-[240px]">
          <div class="flex gap-4 w-[fit-content]">
            <nuxt-link :to="`/modelcenter/material/order?id=${item.id}&templateId=${item.templateId}`">
            <div class="text-[#2277FF] cursor-pointer">立即下单</div></nuxt-link>
            <nuxt-link :to="`/modelcenter/material/edit?id=${item.templateId}`">
            <div class="text-[#2277FF] cursor-pointer">继续创作</div>
            </nuxt-link>
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
        isShelves: 0, selected: false, productType: '名片'
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      },

      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      },
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false, productType: '鼠标垫'
      },
    ]
  },
  hasCheck: {
    typeof: Boolean,
    default: true
  }
});
const emit = defineEmits(['delete', 'checkchange']);
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
