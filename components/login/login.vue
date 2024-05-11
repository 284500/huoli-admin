<template>
  <div class="flex flex-col items-center h-full">
    <h1 class="title font-semibold">账号登录</h1>
    <div class="mt-3">
      <span class="descripe">没有账号？</span
      ><span class="descripe font-semibold !text-[#2277FF]">立即注册</span>
    </div>
    <div class="mt-10 w-full h-10">
      <Input
        class="w-full h-10 rounded-[4px]"
        id="phone"
        type="phone"
        placeholder="请输入账号"
        v-model="userinfo.phone"
        required
      />
    </div>
    <div class="mt-3 w-full h-10">
      <Input
        class="w-full h-10 rounded-[4px]"
        id="phone"
        type="phone"
        placeholder="请输入密码"
        v-model="userinfo.phone"
        required
      />
    </div>
    <div class="w-full flex justify-between items-center mt-4">
      <div class="flex gap-2 items-center">
        <Checkbox id="terms1" /><span class="descripe !text-[#666666]">记住密码</span>
      </div>
      <div class="descripe">忘记密码</div>
    </div>
    <div class="w-full mt-5">
      <Button class="w-full rounded-[4px] bg-[#2277FF]">登录</Button>
    </div>
    <div class="mt-auto flex justify-center items-center">
      <div class="flex gap-1.5">
        <img src="/public/img/login/weixing.png" alt="" class="w-5 h-5" /><span class="text"
          >微信登录</span
        >
      </div>
      <div class="w-[1px] h-4 bg-[#DDDDDD] mx-4"></div>
      <div class="flex gap-1.5">
        <img src="/public/img/login/phone.png" alt="" class="w-5 h-5" /><span class="text"
          >手机登录</span
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.title {
  font-size: 24px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  color: #333333;
  line-height: 32px;
}
.descripe {
  color: #999999;
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  line-height: 20px;
}
.text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 24px;
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
</style>
