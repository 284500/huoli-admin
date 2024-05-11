<template>
  <div class="flex rounded-[12px] overflow-hidden">
    <div class="hidden sm:block">
      <img src="/public/img/login/login-img.png" alt="" class="w-[320px] h-[520px]" />
    </div>
    <div
      class="bg-white w-[480px] md:h-[520px] max-w-[100vw] h-[420px] relative md:py-[60px] md:px-[100px] px-8 py-6"
    >
      <!-- 账号登录 -->
      <div v-if="logintype === 'login'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">账号登录</h1>
        <div class="mt-3">
          <span class="descripe">没有账号？</span
          ><span class="descripe font-medium !text-[#2277FF]">立即注册</span>
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
      <!-- 手机验证码登录 -->
      <div v-if="logintype === 'phone'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">手机验证码登录</h1>
        <div class="mt-3">
          <span class="descripe">没有账号？</span
          ><span class="descripe font-medium !text-[#2277FF]">立即注册</span>
        </div>
        <div class="mt-10 w-full h-10">
          <Input
            class="w-full h-10 rounded-[4px]"
            id="phone"
            type="phone"
            placeholder="请输入手机号码"
            v-model="userinfo.phone"
            required
          />
        </div>
        <div class="mt-3 w-full h-10 flex gap-3">
          <Input
            class="w-full h-10 rounded-[4px]"
            id="phone"
            type="phone"
            placeholder="请输入验证码"
            v-model="userinfo.phone"
            required
          />
          <Button class="h-full px-3 text-[#333333]" variant="outline">获取验证码</Button>
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
      <!-- 微信验证 -->
      <div v-if="logintype === 'weixing'" class="flex flex-col items-center h-full">
        <div class="flex">
          <h1 class="title font-semibold !text-[#2277ff]">微信扫码</h1>
          <h1 class="title font-semibold">一键登录</h1>
        </div>
        <div class="mt-10 w-[240px] h-[240px] p-4 weixing">
          <img src="" alt="" class="w-full h-full rounded-[4px]" />
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
      <!-- 账号注册 -->
      <div v-if="logintype === 'signup'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">账号注册</h1>

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
        <div class="mt-3 w-full h-10 flex gap-3">
          <Input
            class="w-full h-10 rounded-[4px]"
            id="phone"
            type="phone"
            placeholder="请输入验证码"
            v-model="userinfo.phone"
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
            v-model="userinfo.phone"
            required
          />
        </div>
        <div class="mt-3 w-full h-10">
          <Input
            class="w-full h-10 rounded-[4px]"
            id="phone"
            type="phone"
            placeholder="请再次输入密码"
            v-model="userinfo.phone"
            required
          />
        </div>
        <div class="w-full mt-5">
          <Button class="w-full rounded-[4px] bg-[#2277FF]">登录</Button>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <span class="descripe">已有账号，</span
          ><span class="descripe font-medium !text-[#2277FF]">直接登录</span>
        </div>
      </div>
      <!-- 忘记密码 -->
      <div v-if="logintype === 'forget'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">忘记密码</h1>

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
        <div class="mt-3 w-full h-10 flex gap-3">
          <Input
            class="w-full h-10 rounded-[4px]"
            id="phone"
            type="phone"
            placeholder="请输入验证码"
            v-model="userinfo.phone"
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
            v-model="userinfo.phone"
            required
          />
        </div>
        <div class="mt-3 w-full h-10">
          <Input
            class="w-full h-10 rounded-[4px]"
            id="phone"
            type="phone"
            placeholder="请再次输入密码"
            v-model="userinfo.phone"
            required
          />
        </div>
        <div class="w-full mt-5">
          <Button class="w-full rounded-[4px] bg-[#2277FF]">确认修改</Button>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <span class="descripe">想起密码？</span
          ><span class="descripe font-medium !text-[#2277FF]">去登录</span>
        </div>
      </div>
      <img src="/public/img/login/close.png" alt="" class="w-6 h-6 absolute right-5 top-5" />
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<script setup>
import { useToast } from '@/components/ui/toast/use-toast';
import { reactive, ref } from 'vue';
const props = defineProps({
  logintype: {
    type: String,
    default: 'weixing',
  },
});
const emits = defineEmits(['showpop']);
//用户信息
const userinfo = reactive({
  username: 'ada',
  password: '',
  phone: '',
  vercode: '',
});
//禁用按钮
// const disabled = reactive({
//   login: true,
//   signup: true,
//   vercode: true,
// });

//登录方式
const Type = ref(props.logintype);
//通知弹窗
const { toast } = useToast();
//登录函数
const login = async () => {
  //发送登录请求
  const { data: data } = await useFetch('/api/users/login', {
    query: {
      username: userinfo.username,
      password: userinfo.password,
    },
  });
  toast({
    title: data,
    duration: '2000',
  });
  // 将token存入本地
  localStorage.setItem('token', data.value.token);
  // console.log(data.value);
  // const token = localStorage.getItem('token');
  // console.log(token);

  setTimeout(() => {
    emits('showpop');
  }, 2000);
};
const yzm = async () => {
  const { data: data } = await useFetch('/test/app-api/ffd/v1/index/sendSms', {
    method: 'POST',
    body: {
      mobile: '18396519878',
      scene: 101,
    },
  });
  toast({
    title: data.value,
  });
  // console.log(data);
};
//注册函数
const signup = async () => {
  const { data: data } = await useFetch('/api/users/reg', {
    method: 'POST',
    body: {
      phone: userinfo.phone,
      username: userinfo.username,
      password: userinfo.password,
    },
  });
  toast({
    title: '注册成功',
    duration: '2000',
  });
  setTimeout(() => {
    console.log(data);
    emits('showpop');
  }, 2000);
};
//改变方式
const changeType = (type) => {
  Type.value = type;
};
//正则验证
// const valid = (value) => {};
</script>
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
.weixing {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
}
</style>
