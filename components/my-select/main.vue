
<template>
  <Select v-model="search" class="w-[240px]" >
      <SelectTrigger class="w-[120px] px-3 py-2 !rounded-none !rounded-l-[4px]" v-bind="$attrs">
        <SelectValue placeholder="产品名称"/>
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem v-for="item in selectType" :value="item.value" :key="id">{{ item.key }} </SelectItem>
      </SelectContent>
    </Select>
</template>
<script setup>
// 传入选项列表
//绑定搜索参数对象
const props=defineProps({
  modelValue:{
    type:String,
  },
  selectType:{
    type:Array,
    default:[{
      value:'name',
      key:'产品名称'
    },{
      value:'content',
      key:'产品描述'
    }]
  }
});
const emit=defineEmits(['update:modelValue','Search']);
const search=useVModel(props,'modelValue',emit);
</script>
