<template>
  <div class="flex flex-col items-center h-full">
    <h1 class="title font-semibold">账号注册</h1>

    <div class="mt-10 w-full h-10">
      <Input
        class="w-full h-10 rounded-[4px]"
        id="phone"
        type="phone"
        placeholder="请输入账号"
        required
      />
    </div>
    <div class="mt-3 w-full h-10 flex gap-3">
      <Input
        class="w-full h-10 rounded-[4px]"
        id="phone"
        type="phone"
        placeholder="请输入验证码"
        required
      />
      <Button class="h-full px-3 text-[#333333]" variant="outline">获取验证码</Button>
    </div>
    <div class="mt-3 w-full h-10">
      <Input
        class="w-full h-10 rounded-[4px]"
        id="phone"
        type="phone"
        placeholder="请输入密码"
        required
      />
    </div>
    <div class="mt-3 w-full h-10">
      <Input
        class="w-full h-10 rounded-[4px]"
        id="phone"
        type="phone"
        placeholder="请再次输入密码"
        required
      />
    </div>
    <div class="w-full mt-5">
      <Button class="w-full rounded-[4px] bg-[#2277FF]">登录</Button>
    </div>
    <div class="mt-auto flex justify-center items-center">
      <span class="descripe">已有账号，</span
      ><span class="descripe font-semibold !text-[#2277FF]">直接登录</span>
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
