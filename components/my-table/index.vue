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
      <TableRow v-for="(item, index) in tabItems" :key="index">
        <TableCell v-for="(value,key) in item" :key="key">
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
  tabItems: {
    typeof: Array,
    default: [
      {
        id: 1, remarks: 'Alice',
        isShelves: 1, selected: false
      }]
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
