<template>
  <Myheader>
    <template #left>
      <Wuliao v-model="tabactive" :tab="tabList"></Wuliao>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between">
      <div v-if="tabactive===0">
        <div class="header flex mt-1 flex-wrap">
          <Button  variant="outline" class="h-9 text-[#666666] mr-8" @click="delMaterialArray">批量删除</Button>
          <MySelect v-model="Materialparams" :selectType="SearchList"></MySelect>
         <MySelectDate v-model="Materialparams" class="ml-10"></MySelectDate>
        </div>
      <MyTable :tabItems="Material.pager.lists" @delete="delMaterialWork" @checkchange="getMaterialSelect"></MyTable>
      <MyPagination v-model="Material.pager" @change="Material.getLists"></MyPagination>
     </div>
     <div v-else>
      <div class="header flex mt-1 flex-wrap">
          <Button  variant="outline" class="h-9 text-[#666666] mr-8" @click="delH5Array">批量删除</Button>
          <MySelect v-model="H5params" :selectType="SearchList"></MySelect>
         <MySelectDate v-model="H5params" class="ml-10"></MySelectDate>
        </div>
      <MyTable :tabItems="H5.pager.lists" @delete="delH5Work" @checkchange="getH5Select"></MyTable>
      <MyPagination v-model="H5.pager" @change="H5.getLists"></MyPagination>
     </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Wuliao from '@/components/my-tab/wuliao.vue';
import Myheader from '@/components/navbar/header.vue';
import MyTable from '@/components/my-table/table.vue';
import MyPagination from '@/components/my-pagination/index.vue';
import { usePaging } from '@/hooks/usePaging';
import { useDetail } from '@/hooks/useDetail';

import {getMaterialWorks,getMaterialWorkDetail,deleteMaterialWork} from '@/server/apis/works/material.js'
import {getH5Works,getH5WorkDetail,deleteH5Work} from '@/server/apis/works/h5.js'

const H5params=reactive({});
const Materialparams=reactive({
});
const MaterialDetailparams=reactive({});
const H5Detailparams=reactive({});
const Material = usePaging({ fetchFun: getMaterialWorks,params:Materialparams });
const H5 = usePaging({ fetchFun: getH5Works ,params:H5params});
const H5detail = useDetail(getH5WorkDetail,H5Detailparams);
const Materialdetail = useDetail(getMaterialWorkDetail,MaterialDetailparams);
const tabactive = ref(0);
const tabList = ref(['我的物料', '我的H5']);
const SearchList=ref([
  {
      value:'name',
      key:'产品名称'
    },{
      value:'content',
      key:'内容'
    },]
)
const selectedMaterialArray = ref([]);
const selectedH5Array = ref([]);
const init = async () => {
  Material.getLists();
  H5.getLists();
};
onBeforeMount(init);
const delMaterialWork=async (e)=>{
 await deleteMaterialWork({ids:[e]});
 Material.getLists();
};
const delH5Work=async (e)=>{
 await deleteH5Work({ids:[e]});
 H5.getLists();
};
const getMaterialSelect= (e)=>{
  selectedMaterialArray.value=e;
}
const getH5Select= (e)=>{
  selectedH5Array.value=e;
}
const delMaterialArray=async ()=>{
  let data=[]
  selectedMaterialArray.value.forEach((item)=>{
    const {id}=item;
    data.push(id)
  });
  console.log(data)
 await deleteMaterialWork({ids:data});
 selectedMaterialArray.value=[];
 Material.getLists();
};
const delH5Array=async ()=>{
  let data=[]
  selectedH5Array.value.forEach((item)=>{
    const {id}=item;
    data.push(id)
  });
  console.log(data)
  await deleteH5Work({ids:data});
  selectedH5Array.value=[];
 H5.getLists();
};
</script>
<style scoped>
.header-left {
  font-size: 18px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  text-align: left;
  color: #333333;
  line-height: 24px;
};
input::placeholder {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #aaaaaa;
  line-height: 20px;
}
</style>
