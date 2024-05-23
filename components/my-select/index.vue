
<template>
  <div class="flex">
  <Select v-model="searchkey" @update:modelValue="clear" >
      <SelectTrigger class="w-[120px] px-3 py-2 !rounded-none !rounded-l-[4px]">
        <SelectValue placeholder="产品名称"/>
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem v-for="item in selectType" :value="item.value" :key="id">{{ item.key }} </SelectItem>
      </SelectContent>
    </Select>
    <MyInputSearch v-model="search[searchkey]" class="!rounded-none !rounded-r-[4px]" /></div>
</template>
<script setup>
import {unset,each} from 'lodash';
// 传入选项列表
//绑定搜索参数对象
const props=defineProps({
  modelValue:{
    type:Object,
    default:{
      name:'',
    }
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
const emit=defineEmits(['update:modelValue']);
const search=useVModel(props,'modelValue',emit);
const searchkey=ref('name');
const clear=(e)=>{
  props.selectType.forEach(item=>{
    if(item.value!==e){
      unset(search.value,item.value)
    }
  })
};
</script>
