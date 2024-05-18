
<template>
  <div class="flex">
  <Select v-model="search.timeType">
      <SelectTrigger class="w-[120px] px-3 py-2 ">
        <SelectValue placeholder="时间查询"/>
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem v-for="item in selectType" :value="item.value" :key="id">{{ item.key }} </SelectItem>
      </SelectContent>
    </Select>
    <MyDate v-model="date" @update:modelValue="End" @start="Start"></MyDate></div>
</template>
<script setup>
// 传入选项列表
//绑定搜索参数对象
const props=defineProps({
  modelValue:{
    type:Object,
  },
  selectType:{
    type:Array,
    default:[{
      value:0,
      key:'创建时间'
    },{
      value:1,
      key:'修改时间'
    }]
  }
});
const emit=defineEmits(['update:modelValue']);
const search=useVModel(props,'modelValue',emit);
const date=ref({
  start:null ,
  end:null,
})
function convertToTimestamp(year, month, day) {
    var date = new Date(year, month - 1, day);
    var timestamp = date.getTime();
    return Math.floor(timestamp / 1000);
}
const Start=(e)=>{
  if(e){
  const {year,month,day}=e;
  const date=convertToTimestamp(year, month, day)
  search.value.startTime=date;
  search.value.endTime=null;
  }else{
    search.value.startTime=null;
  }


  console.log(e)
};
const End=(e)=>{
  if(e.end){
    const {year,month,day}=e.end;
    const date=convertToTimestamp(year, month, day)
    search.value.endTime=date;
  }
};
</script>
