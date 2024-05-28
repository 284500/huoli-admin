<template>
  <div class="w-full flex flex-col items-center">
    <Separator class="sm:my-10 my-5" />
    <div class="w-full lg:w-[640px]">
      <div class="title">基本信息</div>
      <div class="flex flex-col gap-4 mt-5">
        <div class="flex flex-col gap-1.5">
        <div><span class="apply-text">商户简称</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
        <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.name" />
          </div>
       </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">企业图标</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="flex gap-3 items-center">
            <div class="w-[100px] h-[100px] input-border flex justify-center items-center relative">
              <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />
              <div class="w-6 h-6  dashed-border flex justify-center items-center">
                <div class="w-[14px] h-[14px]  dashed-border">
                  <img src="/public/add.png" alt="" class="w-full h-full">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">经营地址</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="grid grid-cols-3 gap-3">

              <Select v-model="FromData.province">
                <SelectTrigger id="framework" class="w-full px-3 py-2 rounded-[4px]">
                  <SelectValue placeholder="申请退款" class="apply-text" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="福建省"> 福建省 </SelectItem>
                </SelectContent>
              </Select>
              <Select v-model="FromData.city">
                <SelectTrigger id="framework" class="w-full px-3 py-2 rounded-[4px]">
                  <SelectValue placeholder="申请退款" class="apply-text" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="厦门市"> 厦门市 </SelectItem>
                </SelectContent>
              </Select>
              <Select v-model="FromData.county">
                <SelectTrigger id="framework" class="w-full px-3 py-2 rounded-[4px]">
                  <SelectValue placeholder="申请退款" class="apply-text" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="思明区"> 思明区 </SelectItem>
                </SelectContent>
              </Select>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">详细地址</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.address" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">运营者</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.name" />
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-x-10 gap-x-5 gap-y-4">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">运营者手机</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="w-full flex gap-3">
            <Input class="w-full  rounded-[4px]" id="phone" type="phone" placeholder="请输入验证码" v-model="FromData.phone" required />
            <Button class="h-full px-3 text-[#2277ff]" variant="outline">获取验证码</Button>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">验证码</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.phoneCode" />
          </div>
        </div>
        </div>
      </div>

    </div>
    <Separator class="mt-10 mb-3" />
    <div class="mb-4">
      <Button class="w-[80px] rounded-[4px] bg-[#ffffff] text-muted-foreground mr-3 hover:bg-white" @click="prevStep">上一步</Button>
      <Button class="w-[80px] rounded-[4px] bg-[#2277ff] text-white" @click="nextStep">下一步</Button>
    </div>
  </div>
</template>
<script setup>
import {SecondAuth} from '@/server/apis/auth/index.js'
import{ every,values,isEmpty} from 'lodash'
const FromData=ref({
  adId:13,
  adType:0,
  address:'adad',
  county:'思明区',
  city:'厦门市',
  province:'福建省',
  enterpriseIcon:'a',
  industryId:-15710457,
  name:'ada',
  phone:'ada',
  phoneCode:'ada',
});
const emit=defineEmits(['change']);
const nextStep=async ()=>{
  if(!values(FromData.value).every(isEmpty)){
    const data=await SecondAuth(FromData.value).catch(e=>{console.log(e)});
    emit('change',2);
  }else{
    alert('请填写完整');
    console.log(FromData.value);
  }
};
const prevStep=()=>{
  emit('change',0);
};
</script>
<style scoped>
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

.input-border {
  border: 1px solid #DDDDDD;
  border-radius: 4px;
}

.dashed-border {
  border: 1px dashed #DDDDDD;
}

.table-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 24px;
}

.input-text {
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #2277ff;
  line-height: 20px;
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
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
</style>
