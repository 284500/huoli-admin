<template>
  <div class="w-full flex flex-col items-center">
    <Separator class="sm:my-10 my-5" />
    <div class="w-full lg:w-[640px]">
      <div class="title">结算银行卡照片</div>
      <div class="flex flex-col gap-1.5 my-5">
        <div class="apply-text">请上传银行卡正面、银行卡背面，需图片、文字清晰、边框完整真实性</div>
        <div class="grid sm:grid-cols-2 md:gap-10 gap-5">
          <div class=" dashed-border relative pt-[60%]">
            <MyUploadSfz v-model="FromData.bankcardFront" title="请上传银行卡正面" icon-Url="/img/auth/yhk-1.png"></MyUploadSfz>
          </div>
          <div class=" dashed-border relative pt-[60%]">
            <MyUploadSfz v-model="FromData.bankcardBack" title="请上传银行卡反面" icon-Url="/img/auth/yhk-2.png"></MyUploadSfz>
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
import { ref } from "vue"
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast();
const FromData=ref({
    accountName: null,
    accountNumber:null,
    accountType: 1,
    adId: 11,
    adType: 0,
    bankBranch: null,
    bankcardBack: null,
    bankcardFront: null
})
const emit=defineEmits(['change']);
const nextStep=async ()=>{
  try{
  const data=await FourAuth(FromData.value)
  await  SubmitAuth({adId:11,adType:0});
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
