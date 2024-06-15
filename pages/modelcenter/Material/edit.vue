<template>
  <NuxtLayout>
    <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
      <Button @click="createOrder">立即下单</Button>
      <Button @click="createWorks">保存</Button>
    </div>
    <MyDrawer v-model="isShow">
      <div class="bg-white rounded-[8px]">
        <div class="flex justify-between  px-6 py-3.5 w-full xl:w-[1200px]">
          <div class="table-title   !leading-7">选择规格下单</div>
          <div>
            <img src="/public/img/login/close.png" class="w-6 h-6" @click="isShow = false" />
          </div>
        </div>
        <Separator class=" !bg-[#EEEEEE]" />
        <div class="flex sm:h-[664px] h-[400px] overflow-auto flex-wrap">
          <div class="flex-1 bg-[#F6F7F9]"></div>
          <div class="w-[280px] flex flex-col">
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 ">
              <span class="text !leading-6">地区</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 ">
              <span class="text !leading-6">制作商</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 ">
              <span class="text !leading-6">材料</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 ">
              <span class="text !leading-6">尺寸</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 ">
              <span class="text !leading-6">数量</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 ">
              <span class="text !leading-6">工序</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
            <div class="flex flex-col gap-1.5 sm:mt-4 mt-2 px-5 flex-1">
              <span class="text !leading-6">版面</span>
              <MySelectMain v-model="popData.area" class="w-full"></MySelectMain>
            </div>
          <Separator class="mt-2 !bg-[#EEEEEE]" />
          <div class="px-5 py-2.5">
           <Button class="w-full" @click="createOrder">立即下单</Button></div>
          </div>
        </div>
      </div>
    </MyDrawer>
  </NuxtLayout>
</template>
<script setup>
import { addMaterialWork } from '@/server/apis/works/material.js'
import {
  getMaterialTemplateDetail,
} from '@/server/apis/template/material.js';
import MyDrawer from '@/components/drawer/index.vue';
const route = useRoute();
const isShow = ref(false);
//模板信息
const templateInfo = ref({});
const popData = ref({
  area: null,
});
//作品信息
const worksInfo = ref({ templateId: Number(route.query.id), content: { name: '鼠标垫' }, name: '鼠标垫' });
definePageMeta({
  layout: 'center',
});
const createWorks = () => {
  isShow.value = true;
};
const createOrder = async () => {
  //content 后期添加: { name: '鼠标垫' },
  let data = await addMaterialWork({...worksInfo.value, name:templateInfo.value.name,manufacturer:1});
  navigateTo({
    path: '/modelcenter/material/order',
    query: {
      id: data.id,
      templateId: route.query.id
    }
  })
};
const init=async ()=>{
  templateInfo.value = await getMaterialTemplateDetail({id:Number(route.query.id)});
  //设置作品信息
  worksInfo.value = templateInfo.value.materialDesign;
  worksInfo.value.specification = {"数量": "500张", "材料": "铜版纸300g-不覆膜", "规格": "900X54mm", "价格/元": "10"};
  worksInfo.value.content = { name: '鼠标垫' };
  worksInfo.value.manufacturer = 1;
};
onMounted(()=>{
  init();
});
</script>
<style scoped>
.header-bg {
  background-image: url('/public/img/pay/header.png');
  background-position: top;
  background-repeat: no-repeat;
}

.address-text {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
}

.title {
  font-size: 20px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  text-align: left;
  color: #333333;
  line-height: 28px;
}

.text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}

.muted-text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #666666;
  line-height: 20px;
}

.danger-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #ff5030;
  line-height: 20px;
}

.number {
  font-size: 24px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 32px;
}

.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
}

.table-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 600;
  color: #333333;
  line-height: 24px;
}

.table-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 20px;
}

.input-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #2277ff;
  line-height: 20px;
}

.total-number {
  font-size: 20px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  text-align: right;
  color: #ff5030;
  line-height: 20px;
}

input::placeholder {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #aaaaaa;
  line-height: 20px;
}

.apply-text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}

.pop-number {
  font-size: 32px;
  font-family: PingFang SC, PingFang SC-Semibold;
  font-weight: 400;
  text-align: center;
  color: #ff5030;
  line-height: 48px;
}

.pop-code {
  width: 280px;
  height: 280px;
  background: #f9fafb;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 1rem;
}</style>
