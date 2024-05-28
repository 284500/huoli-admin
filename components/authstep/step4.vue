<template>
  <div class="w-full flex flex-col items-center">
    <Separator class="sm:my-10 my-5" />
    <div class="w-full lg:w-[640px]">
      <div class="title">绑定账户</div>
      <div class="flex flex-col gap-1.5 mt-5 mb-7">
        <div><span class="apply-text">账户类型</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
        <RadioGroup default-value="comfortable" :orientation="'vertical'" class="flex gap-6" v-model="FromData.accountType">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" :value="0" />
            <Label for="r1" class="apply-text">企业对公账户</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" :value="1" />
            <Label for="r2" class="apply-text">法人个人银行卡</Label>
          </div>
        </RadioGroup>
      </div>
      <Separator class="my-8" />
      <div class="title">结算银行卡照片</div>
      <div class="flex flex-col gap-1.5 my-5">
        <div class="apply-text">请上传银行卡正面、银行卡背面，需图片、文字清晰、边框完整真实性</div>
        <div class="grid sm:grid-cols-2 md:gap-10 gap-5">
          <div class=" dashed-border relative pt-[60%]">
            <img src="/public/img/auth/yhk-1.png" alt="" class="w-full h-full absolute top-0">
            <div
              class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 items-center">
              <div class="bg-[#2277FF] w-10 h-10 rounded-full flex justify-center items-center"><img
                  src="/public/img/auth/input.png" alt=""></div>
              <div class="input-text">请上传银行卡正面</div>
            </div>
            <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />
          </div>
          <div class=" dashed-border relative pt-[60%]">
            <img src="/public/img/auth/yhk-2.png" alt="" class="w-full h-full absolute top-0">
            <div
              class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 items-center">
              <div class="bg-[#2277FF] w-10 h-10 rounded-full flex justify-center items-center"><img
                  src="/public/img/auth/input.png" alt=""></div>
              <div class="input-text">请上传银行卡背面</div>
            </div>
            <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-x-10 gap-x-5 gap-y-4">

        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">法人姓名</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.accountName" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">银行账号</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.accountNumber" />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-1.5 mt-4">
          <div><span class="apply-text">开户支行</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.bankBranch" />
          </div>
        </div>
    </div>
    <Separator class="mt-10 mb-3" />
    <div class="mb-4">
      <Button class="w-[80px] rounded-[4px] bg-[#ffffff] text-muted-foreground mr-3 hover:bg-white" @click="prevStep">上一步</Button>
      <Button class="w-[80px] rounded-[4px] bg-[#2277ff] text-white" @click="nextStep">提交凭证</Button>
    </div>
  </div>
</template>
<script setup>
import {FourAuth,SubmitAuth} from '@/server/apis/auth/index.js'

const FromData=ref({
    accountName: "in labore reprehenderit",
    accountNumber: "deserunt consequat consectetur",
    accountType: 0,
    adId: 13,
    adType: 0,
    bankBranch: "amet",
    bankcardBack: "cillum commodo sint",
    bankcardFront: "Duis"
})
const emit=defineEmits(['change']);
const nextStep=async ()=>{
  try{
  const data=await FourAuth(FromData.value).catch(e=>{console.log(e)});
  await  SubmitAuth({adId:12,adType:0});
  emit('change',4);
  }catch(e){alert(e)}
};
const prevStep=()=>{
  emit('change',2);
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
