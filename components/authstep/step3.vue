<template>
  <div class="w-full flex flex-col items-center">
    <Separator class="sm:my-10 my-5" />
    <div class="w-full lg:w-[640px]">
      <div class="title">上传资质</div>
      <div class="flex flex-col gap-1.5 mt-5 mb-7">
        <div><span class="apply-text">企业类型</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
        <RadioGroup default-value="comfortable" :orientation="'vertical'" class="flex gap-6">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" value="default" />
            <Label for="r1" class="apply-text">企业法人</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" value="comfortable" />
            <Label for="r2" class="apply-text">个体工商户</Label>
          </div>
        </RadioGroup>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">营业执照</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="flex gap-3 items-center">
            <div class="w-[100px] h-[100px] input-border flex justify-center items-center relative">
              <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />
              <div class="w-6 h-6  dashed-border flex justify-center items-center">
                <div class="w-[14px] h-[14px]  dashed-border">
                  <img src="/public/add.png" alt="" class="w-full h-full">
                </div>
              </div>
            </div>
            <div class="table-text">需图片、文字清晰、边框完整真实性</div>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">公司名称</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">统一信用代码</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">住所/经营场所</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">经营范围</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">其他资质（卫生许可证等）</span></div>
          <div class="flex gap-3 items-center">
            <div class="w-[100px] h-[100px] input-border flex justify-center items-center relative">
              <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />

              <div class="w-6 h-6  dashed-border flex justify-center items-center">
                <div class="w-[14px] h-[14px]  dashed-border">
                  <img src="/public/add.png" alt="" class="w-full h-full">
                </div>
              </div>
            </div>
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
            <img src="/public/img/auth/sfz-2.png" alt="" class="w-full h-full absolute top-0">
            <div
              class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 items-center">
              <div class="bg-[#2277FF] w-10 h-10 rounded-full flex justify-center items-center"><img
                  src="/public/img/auth/input.png" alt=""></div>
              <div class="input-text">请上传身份证正面</div>
            </div>
            <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />
          </div>
          <div class=" dashed-border relative pt-[60%]">
            <img src="/public/img/auth/sfz-1.png" alt="" class="w-full h-full absolute top-0">
            <div
              class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 items-center">
              <div class="bg-[#2277FF] w-10 h-10 rounded-full flex justify-center items-center"><img
                  src="/public/img/auth/input.png" alt=""></div>
              <div class="input-text">请上传身份证反面</div>
            </div>
            <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0" />
          </div>

        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-x-10 gap-x-5 gap-y-4">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">姓名</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">身份证号</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">办证机关</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">有效期限</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">法人手机</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div class="w-full flex gap-3">
            <Input class="w-full  rounded-[4px]" id="phone" type="phone" placeholder="请输入验证码" required />
            <Button class="h-full px-3 text-[#2277ff]" variant="outline">获取验证码</Button>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">验证码</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
    <Separator class="mt-10 mb-3" />
    <div class="mb-4">
      <Button class="w-[80px] rounded-[4px] bg-[#ffffff] text-muted-foreground mr-3 hover:bg-white">上一步</Button>
      <Button class="w-[80px] rounded-[4px] bg-[#2277ff] text-white">下一步</Button>
    </div>
  </div>
</template>
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
