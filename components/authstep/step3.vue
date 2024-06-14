<template>
  <div class="w-full flex flex-col items-center">
    <Separator class="sm:my-10 my-5" />
    <div class="w-full lg:w-[640px]">
      <div class="title">上传资质</div>
      <div class="flex flex-col gap-1.5 mt-5 mb-7">
        <div><span class="apply-text">企业类型</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
        <RadioGroup v-model="FromData.vendorType" :orientation="'vertical'" class="flex gap-6">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" :value="0" />
            <Label for="r1" class="apply-text">企业法人</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" :value="1" />
            <Label for="r2" class="apply-text">个体工商户</Label>
          </div>
        </RadioGroup>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">营业执照</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="flex gap-3 items-center">
            <MyUploadImg v-model="FromData.businessLicense"></MyUploadImg>
            <div class="table-text">需图片、文字清晰、边框完整真实性</div>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">公司名称</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.companyName" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">统一信用代码</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.creditCode" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">住所/经营场所</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]"  v-model="FromData.businessAddress" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">经营范围</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]"  v-model="FromData.businessField"/>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">其他资质（卫生许可证等）</span></div>
          <div class="flex gap-3 items-center">
            <MyUploadImg v-model="other.otherQualifications"></MyUploadImg>
            <div class="table-text">需图片、文字清晰、边框完整真实性</div>
          </div>
        </div>
      </div>
      <Separator class="my-8" />
      <div class="title">法人身份证</div>
      <div class="flex flex-col gap-1.5 my-5">
        <div class="apply-text">请上传身份证正面、身份证背面、需图片、文字清晰、边框完整真实性</div>
        <div class="grid sm:grid-cols-2 md:gap-10 gap-5">
          <div class=" dashed-border relative pt-[60%]">
            <MyUploadSfz v-model="FromData.corporateIdcardFront" title="请上传身份证正面" icon-Url="/img/auth/sfz-2.png"></MyUploadSfz>
          </div>
          <div class=" dashed-border relative pt-[60%]">
           <MyUploadSfz v-model="FromData.corporateIdcardBack" title="请上传身份证反面" icon-Url="/img/auth/sfz-1.png"></MyUploadSfz>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-x-10 gap-x-5 gap-y-4">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">姓名</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="FromData.name" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">身份证号</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]"  v-model="FromData.idCard" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">办证机关</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]"  v-model="FromData.establishment" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">有效期限</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <MyDateRadio @check="(e) =>FromData.effectiveTime=e" class="!w-full rounded-[4px]"></MyDateRadio>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">法人手机</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="w-full flex gap-3">
            <Input class="w-full  rounded-[4px]" id="phone" type="phone" placeholder="请输入手机号"  v-model="FromData.phone" />
            <MyButtonSms ref='ButtonSms' type="ButtonSms"  class="h-full px-3 text-[#2277ff]" @click="getSms" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">验证码</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]"  v-model="FromData.phoneCode"  />
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
import {ThirdAuth,getStep3Code} from '@/server/apis/auth/index.js'
import {ref} from "vue"
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast();
const ButtonSms=ref();
const FromData=ref({
    adId: 12,
    adType: 0,
    businessAddress: "ex",
    businessField: "dolore",
    businessLicense:'http://cdn.fafadan.cn/image/20240605/b05a65a9-fd91-4559-97ec-dc4dfc41cb5b.jpg',
    companyName: "sit amet nostrud dolor",
    corporateIdcardBack:null,
    corporateIdcardFront:null,
    creditCode: "consequat nulla nisi cupidatat reprehenderit",
    effectiveTime: "1956-08-16T22:25:50.0Z",
    establishment: "exercitation eu magna",
    idCard: "fugiat cillum",
    name: "fugiat ut incididunt deserunt et",
    phone: "ex",
    phoneCode: "nostrud qui ut Ut",
    vendorType: 0
});
const other=ref({
  otherQualifications:null
});
const emit=defineEmits(['change']);
const nextStep=async ()=>{
  try{
  const data=await ThirdAuth({...FromData.value,...other}).catch(e=>{console.log(e)});
  emit('change',3)
  }catch(e){alert(e)}
};
const prevStep=()=>{
  emit('change',1)
};
//获取验证
const getSms=async ()=>{
let {data:data}= await getStep3Code(FromData.value.phone)
if(data.code!==200){
  toast({
      title: '获取验证码出错',
      description:data.msg,
      variant: 'destructive',
      duration: '2000',
    });
}else{
  ButtonSms.value.countDown();
}
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
