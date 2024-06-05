<template>
  <Myheader>
    <template #left>
      <MyInputSearch v-model="Materialparams.name" @search="Material.resetPage()" class="sm:w-1/2 lg:w-1/3"></MyInputSearch>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div class="w-full">
        <div class="w-full h-[40px] flex items-center relative">
          <div
            class="model-list mr-10 cursor-pointer"
            @click="changeTemplate(0)"
            :class="{ '!text-[#333333] font-semibold': templateactive === 0 }"
          >
            物料模板
          </div>
          <div
            class="model-list cursor-pointer"
            @click="changeTemplate(1)"
            :class="{ '!text-[#333333] font-semibold': templateactive === 1 }"
          >
            H5模板
          </div>
          <img
            src="/public/img/tab/tabtips.png"
            alt=""
            class="absolute bottom-0 left-4 transition-all"
            :style="`left:${templateactive * 100 + 16}px`"
          />
        </div>

        <div v-if="templateactive === 0">
          <div
            class="bottom-shadow py-3 md:py-5 w-full border-b-[#ffffff] border-b-2 flex flex-col gap-3"
          >
          <MyList :lists="Product.types.data" title="类型" v-model="Materialparams.productType"  @change="Material.resetPage()"></MyList>
            <MyList :lists="Industry.types.data" title="行业" v-model="Materialparams.industryTypeList"  @change="Material.resetPage()"></MyList>

          </div>
          <div class="flex justify-between py-3 items-center">
            <div>
              <span
                class="label mr-4 cursor-pointer"
                @click="sortactive = 0"
                :class="{ '!text-[#333333] font-semibold': sortactive === 0 }"
                >综合排序</span
              >
              <span
                class="label cursor-pointer"
                @click="sortactive = 1"
                :class="{ '!text-[#333333] font-semibold': sortactive === 1 }"
                >最新上传</span
              >
            </div>
            <div class="flex">
              <div class="flex w-[82px] h-[32px] justify-center items-center gap-1">
                <img src="/public/img/wuliao/color.png" alt="" class="w-4 h-4" /> <span>颜色</span>
              </div>
              <div class="flex w-[82px] h-[32px] justify-center items-center gap-1">
                <img src="/public/img/wuliao/date.png" alt="" class="w-4 h-4" /><span>节日</span>
              </div>
            </div>
          </div>
          <div v-if="Material.pager.loading" class="flex flex-col items-center py-20">
              <!-- <div>加载中</div> -->
              <div><Lucide icon="Loader2" class="w-10 h-10 mt-2 animate-spin" color="blue"></Lucide></div>
            </div>
            <div v-else-if="Material.pager.lists.length" class="w-full">
                <div
            class="w-full grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-4 grid-cols-2"
          >
            <div  v-for="(item, index) in Material.pager.lists" :key="index">
              <div class="relative card bg-muted pt-[66%]">
                <div class="absolute top-0 left-0 bottom-0 right-0 object-cover">
                   <img
                  :src="item.templateCover"
                  alt=""
                  class="w-full h-full object-cover"
                />
                </div>

                <div class="more absolute hidden bottom-3 right-1">
                  <Button class="rounded-[4px]" @click="popup(MaterialDetail,item.id)"
                    ><Lucide icon="Eye" class="mr-1"></Lucide>详情</Button
                  >
                </div>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="title">{{ item.name }}</span>
                <div
                  class="rounded-full bg-blue-600 w-[20px] h-[20px]"
                  :class="`bg-[${item.themeColor}]`"
                ></div>
              </div>
            </div>

             </div>
            <MyPagination  v-model="Material.pager" @change="Material.getLists"></MyPagination>
            </div>

          <div v-else class="flex flex-col items-center py-20">
              <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(24 31.67)"><ellipse fill-opacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse><path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2"></path><path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" fill="url(#linearGradient-1)" transform="translate(13.56)"></path><path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#F5F5F7"></path><path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" fill="#DCE0E6"></path></g><path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" fill="#DCE0E6"></path><g transform="translate(149.65 15.383)" fill="#FFF"><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path></g></g></svg>
              <div>暂无数据</div>
            </div>


        </div>
        <div v-if="templateactive === 1">
          <div
            class="bottom-shadow py-3 md:py-5 w-full border-b-[#ffffff] border-b-2 flex flex-col gap-3"
          >
          <MyList :lists="Product.types.data" title="类型"  v-model="H5params.productType"  @change="H5.resetPage()"></MyList>
            <MyList :lists="Industry.types.data" title="行业" v-model="H5params.industryTypeList"  @change="H5.resetPage()"></MyList>
            <MyList :lists=" Purposes.types.data" title="用途" v-model="H5params.applicablePurposeList"  @change="H5.resetPage()"></MyList>

          </div>
          <div class="flex justify-between py-3 items-center">
            <div>
              <span
                class="label mr-4 cursor-pointer"
                @click="sortactive = 0"
                :class="{ '!text-[#333333] font-semibold': sortactive === 0 }"
                >综合排序</span
              >
              <span
                class="label cursor-pointer"
                @click="sortactive = 1"
                :class="{ '!text-[#333333] font-semibold': sortactive === 1 }"
                >最新上传</span
              >
            </div>
            <div class="flex">
              <div class="flex w-[82px] h-[32px] justify-center items-center gap-1">
                <img src="/public/img/wuliao/color.png" alt="" class="w-4 h-4" /> <span>颜色</span>
              </div>
              <div class="flex w-[82px] h-[32px] justify-center items-center gap-1">
                <img src="/public/img/wuliao/date.png" alt="" class="w-4 h-4" /><span>节日</span>
              </div>
            </div>
          </div>
          <div
            class="w-full grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-4 grid-cols-2"
          >
            <div v-for="(item, index) in H5.pager.lists" :key="item">
              <div class="relative card bg-muted pt-[66%]">
                <div class="absolute top-0 left-0 bottom-0 right-0 object-cover">
                   <img
                  :src="item.templateCover"
                  alt=""
                  class="w-full h-full object-cover"
                />
                </div>
                <div class="more absolute hidden bottom-3 right-1">
                  <Button class="rounded-[4px]" @click="popup(H5Detail,item.id)"
                    ><Lucide icon="Eye" class="mr-1"></Lucide>详情</Button
                  >
                </div>
              </div>
              <div class="flex justify-between items-center py-2 gap-3">
                <span class="title">{{ item.name }} </span>
                <div class="rounded-full bg-[#FFA65E] w-[20px] h-[20px]"></div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center my-10">
          <MyPagination v-model="H5.pager" @change="H5.getLists"></MyPagination>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
  <!-- <input type="text" v-model="store.keyword"> -->
  <MyDrawer v-model="isShow" color="bg-[rgba(249,250,251,0.95)]">
  <MaterialDetail v-if="!popname" @close="closepop" :data="Materialdetail.detail.data"></MaterialDetail>
  <H5Detail v-else @close="closepop" :data="H5detail.detail.data"></H5Detail>
  </MyDrawer>
</template>
<script setup>

import Myheader from '@/components/navbar/header.vue';
import MyDrawer from '@/components/drawer/index.vue';
import MaterialDetail from '@/components/model-center/Material/detail.vue';
import H5Detail from '@/components/model-center/H5/detail.vue';
import MyPagination from '@/components/my-pagination/index.vue';
import { getMaterialTemplateList,getMaterialTemplateDetail } from '@/server/apis/template/material.js';
import { getH5TemplateList,getH5TemplateDetail} from '@/server/apis/template/h5.js';
import {getProductType,getIndustryType, getPurposesType} from '@/server/apis/type/index.js';

import { usePaging } from '@/hooks/usePaging';
import { useType } from '@/hooks/useType';
import { useDetail } from '@/hooks/useDetail';


import { ref ,reactive} from 'vue';
import { useMealsStore } from '~/composables/store';
const store=useMealsStore()
const isShow = ref(false);
const H5params=reactive({});
const Materialparams=reactive({});
const MaterialDetailparams=reactive({});
const H5Detailparams=reactive({});
const Material = usePaging({ fetchFun: getMaterialTemplateList,params:Materialparams });
const H5 = usePaging({ fetchFun: getH5TemplateList ,params:H5params});
const H5detail = useDetail(getH5TemplateDetail,H5Detailparams);
const Materialdetail = useDetail(getMaterialTemplateDetail,MaterialDetailparams);
const Product=useType(getProductType);
const Industry=useType(getIndustryType);
const Purposes=useType(getPurposesType);

//初始化
const init = async () => {
  Material.getLists();
  H5.getLists();
  Product.getTypes();
  Industry.getTypes();
  await Purposes.getTypes();
};
onBeforeMount(() => {
  init();
});
const changeTemplate = (index) => {
  templateactive.value = index;
  if(index===0){
    Material.resetPage();
  }else{
    H5.resetPage();
  }
};
const popup = (name,id) => {
  if(name==MaterialDetail){
    popname.value=0;
    MaterialDetailparams["id"]=id;
    Materialdetail.getDetail();
  }else if(name=H5Detail){
    popname.value=1;
    H5Detailparams["id"]=id;
    H5detail.getDetail();
  }
  isShow.value = true;
};
const closepop = () => {
  isShow.value = false;
};
const templateactive = ref(0);
const sortactive = ref(0);
const popname = ref(MaterialDetail);
</script>
<style scoped lang="scss">
.isActive {
  @apply bg-[rgba(34,119,255,0.08)];
  color: #27f !important;
}
.popup {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.card:hover .more {
  display: block;
}
.label {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 20px;
}
.model-list {
  height: 24px;
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 24px;
}
.title {
  height: 24px;
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
.bottom-shadow {
  box-shadow: 0px -1px 0px 0px #eeeeee inset;
}
</style>
