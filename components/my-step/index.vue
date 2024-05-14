<template>
  <div class="w-full flex">
    <div v-for="(item,index) in tab" class="flex-1 flex flex-col gap-y-2">
      <div class="flex justify-center items-center">
         <div class="left flex-1" :class="{'ishidden':index===0,'isactive':index<activeNumber+1}"></div>
         <div v-if="index<activeNumber" class="step-finish mx-2"><Lucide :icon="props.finishicon" color="#2277FF"></Lucide></div>
         <div v-if="index===activeNumber" class="step-active mx-2">{{index+1}}</div>
         <div v-if="index>activeNumber" class="step mx-2">{{ index+1 }}</div>
         <div class="right flex-1" :class="{'ishidden':index===tab.length-1,'isactive':index<activeNumber}"></div>
        </div>
      <div class="flex justify-center"><span class="text max-w-[84px]" :class="{'istextactive':index===activeNumber,'!text-[#666666]':index>activeNumber}">{{ item }}</span></div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  tab:{
    typeof:Array,
    default:['step1','step2','step3']
  },
  finishicon:{
    typeof:String,
    default:'Check'
  },
  straticon:{
    typeof:String,
    default:'icon-shouye'
  },
  activeNumber:{
    typeof:Number,
    default:0
  }
});
// const activeNumber=ref(3);
</script>
<style scoped>
.step-finish{
display: flex;
align-items: center;
justify-content: center;
width: 28px;
height: 28px;
background:rgba(34,119,255,0.15);
border-radius: 50%;
}
.step-active{
display: flex;
align-items: center;
justify-content: center;
width: 28px;
height: 28px;
background: #2277ff;
border-radius: 50%;
color: #ffffff;
font-size: 14px;
font-family: PingFang SC, PingFang SC-Semibold;
font-weight:600;
text-align: center;
line-height: 20px;
}
.step{
display: flex;
align-items: center;
justify-content: center;
width: 28px;
height: 28px;
background: #ffffff;
border: 1px solid #dddddd;
border-radius: 50%;
font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
font-weight: 400;
text-align: center;
color: #666666;
line-height: 20px;
}
.step-line{
height: 2px;
background: #dddddd;
border-radius: 1px;
}
.step-line-active{
height: 244px;
background: #ffffff;
border-radius: 8px;
}
.left{
height: 2px;
background: #dddddd;
border-radius: 1px;
}
.right{
  height: 2px;
background: #dddddd;
border-radius: 1px;
}
.ishidden{
  opacity: 0;
}
.isactive{
background: #2277ff;
}
.istextactive{
  font-weight: 500 !important;
  color: #27f !important;
}
.text{
  font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
font-weight: 400;
text-align: center;
color: #333333;
line-height: 20px;
}
</style>
