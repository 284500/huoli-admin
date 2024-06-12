<template>
  <ScrollArea class="h-full w-[1200px]  main  max-w-full relative">
    <div class="flex flex-wrap gap-8 justify-center w-[100vw] md:w-full p-5 sm:p-10">
      <div class="flex flex-col gap-4 w-full md:w-auto">
        <div class="md:w-[720px] bg-[#F0F1F5] h-[800px] w-full flex justify-center">
          <img :src="props.data.templateCover" class="w-full h-full object-cover">

        </div>
      </div>
      <div class="flex flex-col flex-1 min-w-[300px] max-w-[720px]">
        <h1 class="main-title">{{ props.data.name }} </h1>
        <div class="flex  justify-between mt-3">
          <div class="px-2 py-1 bg-[rgba(255,160,36,0.10)] rounded-full flex items-center">
            <span class="text-[12px] text-[#FFA024] leading-4  font-[500]">线下免费印刷</span>
          </div>
          <div class="flex items-center">
            <span class="input-text !text-[#666666]">11122</span>
            <span class="table-text"> 人使用</span>

          </div>

        </div>
        <div class="flex">
        <div class="more-text" :class="{'!line-clamp-[999]':toggletext}">
          <span v-if="!toggletext" class="btn" @click="toggletext=true">更多</span>
            <span v-else class="btn" @click="toggletext=false">收起</span>

          日常用品杯/桶/碗/盒/管频道提供《几何花纹纸杯包装设计》在线包装设计创作，点击“编辑模板”按钮，可对《几何花纹纸杯包装设计》进行在线编辑，模板、尺寸和材质可自定义修改，可自主添加修改文字图片及背景颜色，可自由选择素材，可自由添加图片、文字、图案等元素，可自由设置边框、阴影、透明度等属性。
        </div></div>
        <div class="mt-4 flex flex-col gap-3 text">
          <div class="flex gap-3">
            <div class="!text-[#666666]">类型：</div>
            <div>{{ props.data.templateType }}</div>
          </div>
          <div class="flex gap-3">
            <div class="!text-[#666666]">行业：</div>
            <div>{{ props.data.industryTypeList }}</div>
          </div>
          <div class="flex gap-3">
            <div class="!text-[#666666]">用途：</div>
            <div>{{ props.data.applicablePurposeList }}</div>
          </div>
          <div class="flex gap-3">
            <div class="!text-[#666666]">颜色：</div>
            <div>
              <div class="w-5 h-5 rounded-full bg-[#BCE6D1]"></div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="!text-[#666666]">节日：</div>
            <div>{{ props.data.applicableHolidays }}</div>
          </div>
        </div>
        <Button class="mt-5 w-full cursor-pointer" @click="jumpTo">应用模板</Button>

        <div class="sm:flex flex-col items-center mt-10 gap-3 hidden">
          <div class=" code-border"><img /></div>
          <div class="apply-text !text-[#666666]">请使用手机扫码预览</div>
        </div>

      </div>

    </div>
    <div class=" absolute right-4 top-4 "><Lucide icon="X" color="#666666" @click="emits('close')"></Lucide></div>

  </ScrollArea>
</template>
<script setup>
import { useLoginStore } from '~/composables/store';
const Token = useCookie('huoli-token', { maxAge: 60 * 60 * 24 * 30 });
const store = useLoginStore();
const props = defineProps({
  data: {
    type: Object,
  }
})
const emits = defineEmits(['close']);
const toggletext = ref(false);

const jumpTo = () => {
  if (Token.value) {
    navigateTo({
      path: '/modelcenter/h5/edit',
      query: {
        id: props.data.id,
      }
    });
  } else {
    store.isShow = true;
  }
};
</script>
<style scoped>
.code-border {
  width: 140px;
  height: 140px;
  background: #f9fafb;
  border: 1px solid #eeeeee;
  border-radius: 8px;
}

.main {
  background: #ffffff;
  /* border-radius: 8px 0px 0px 8px; */
}
.btn {
  color: #2277ff;
  float: right;
  clear: both;
  margin-left: 30px;
  /*其他装饰样式*/
}
.more-text::before{
  content:'';
  float: right;
  height: calc(100% - 24px);
  background-color: red;
}
.main-title {
  font-size: 24px;
  font-family: PingFang SC, PingFang SC-Semibold;
  font-weight: 600;
  text-align: left;
  color: #333333;
  line-height: 32px;
}

.sep-shadow {
  background: #ffffff;
  box-shadow: 0px -1px 0px 0px #eeeeee inset;
}

.more-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

.sm-muted {
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #666666;
  line-height: 16px;
}

.descripe {
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 18px;
}</style>
