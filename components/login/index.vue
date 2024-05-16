<template>
  <div class="flex rounded-[12px] overflow-hidden">
    <div class="hidden sm:block">
      <img src="/public/img/login/login-img.png" alt="" class="w-[320px] h-[520px]" />
    </div>
    <div class="bg-white w-[480px] sm:h-[520px] max-w-[100vw] h-[420px] relative sm:py-[60px] sm:px-[100px] px-8 py-6">
      <!-- 账号登录 -->
      <div v-if="Type === 'login'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">密码登录</h1>
        <div class="mt-3">
          <span class="descripe">没有账号？</span><span class="descripe font-medium !text-[#2277FF]"
            @click="changeType('signup')">立即注册</span>
        </div>
        <div class="mt-10 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入账号" v-model="userinfo.username"
            required />
        </div>
        <div class="mt-3 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="password" placeholder="请输入密码" v-model="userinfo.password"
            required />
        </div>
        <div class="w-full text-left text-[12px] mt-2 text-[#f15533]" v-if="existed.type">{{ existed.data }}</div>
        <div class="w-full flex justify-between items-center mt-2">
          <div class="flex gap-2 items-center">
            <Checkbox id="terms1" /><span class="descripe !text-[#666666]">记住密码</span>
          </div>
          <div class="descripe" @click="changeType('forget')">忘记密码</div>
        </div>
        <div class="w-full mt-5">
          <Button class="w-full rounded-[4px] bg-[#2277FF]" @click="accountlogin">登录</Button>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <div class="flex gap-1.5">
            <img src="/public/img/login/weixing.png" alt="" class="w-5 h-5" /><span class="text"
              @click="changeType('weixing')">微信登录</span>
          </div>
          <div class="w-[1px] h-4 bg-[#DDDDDD] mx-4"></div>
          <div class="flex gap-1.5">
            <img src="/public/img/login/phone.png" alt="" class="w-5 h-5" /><span class="text"
              @click="changeType('phone')">手机登录</span>
          </div>
        </div>
      </div>
      <!-- 手机验证码登录 -->
      <div v-if="Type === 'phone'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">手机验证码登录</h1>
        <div class="mt-3">
          <span class="descripe">没有账号？</span><span class="descripe font-medium !text-[#2277FF]"
            @click="changeType('signup')">立即注册</span>
        </div>
        <div class="mt-10 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入手机号码" v-model="userinfo.mobile"
            required />
        </div>
        <div class="mt-3 w-full h-10 flex gap-3">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入验证码" v-model="userinfo.code" required />
          <Button class="h-full px-3 text-[#333333]" variant="outline" @click="logincode" :disabled="disabled.mobile">{{
        disabled.mobile ? `(${countdown}s)后重新获取` : '获取验证码' }}</Button>
        </div>
        <div class="w-full text-left text-[12px] mt-2 text-[#f15533]" v-if="existed.type">{{ existed.data }}</div>

        <div class="w-full mt-5">
          <Button class="w-full rounded-[4px] bg-[#2277FF]" @click="mobilelogin">登录</Button>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <div class="flex gap-1.5">
            <img src="/public/img/login/weixing.png" alt="" class="w-5 h-5" /><span class="text"
              @click="changeType('weixing')">微信登录</span>
          </div>
          <div class="w-[1px] h-4 bg-[#DDDDDD] mx-4"></div>
          <div class="flex gap-1.5">
            <img src="/public/img/login/phone.png" alt="" class="w-5 h-5" /><span class="text"
              @click="changeType('login')">账号登录</span>
          </div>
        </div>
      </div>
      <!-- 微信验证 -->
      <div v-if="Type === 'weixing'" class="flex flex-col items-center h-full">
        <div class="flex">
          <h1 class="title font-semibold !text-[#2277ff]">微信扫码</h1>
          <h1 class="title font-semibold">一键登录</h1>
        </div>
        <div class="mt-10 w-[240px] h-[240px] p-4 weixing">
          <iframe :src="codeurl" width="300" height="300"></iframe>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <div class="flex gap-1.5">
            <img src="/public/img/login/weixing.png" alt="" class="w-5 h-5" /><span class="text"
              @click="changeType('login')">账号登录</span>
          </div>
          <div class="w-[1px] h-4 bg-[#DDDDDD] mx-4"></div>
          <div class="flex gap-1.5">
            <img src="/public/img/login/phone.png" alt="" class="w-5 h-5" /><span class="text"
              @click="changeType('phone')">手机登录</span>
          </div>
        </div>
      </div>
      <!-- 账号注册 -->
      <div v-if="Type === 'signup'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">账号注册</h1>
        <div class="sm:mt-10 w-full h-10 mt-5">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入账号" v-model="userinfo.username"
            required />
        </div>
        <div class="mt-3 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入手机号" v-model="userinfo.mobile"
            required />
        </div>
        <div class="mt-3 w-full h-10 flex gap-3">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入验证码" v-model="userinfo.code" required />
          <Button class="h-full px-3 text-[#333333]" variant="outline" @click="signupcode"
            :disabled="disabled.signup">{{
        disabled.signup ? `(${countdown}s)后重新获取` : '获取验证码' }}</Button>
        </div>
        <div class="mt-3 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="password" placeholder="请输入密码" v-model="userinfo.password"
            required />
        </div>
        <div class="mt-3 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="password" placeholder="请再次输入密码" v-model="userinfo.repassword"
            required />
        </div>
        <div class="w-full text-left text-[12px] mt-2 text-[#f15533]" v-if="existed.type">{{ existed.data }}</div>
        <div class="w-full mt-auto">
          <Button class="w-full rounded-[4px] bg-[#2277FF]" @click="signup">注册</Button>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <span class="descripe">已有账号，</span><span class="descripe font-medium !text-[#2277FF]"
            @click="changeType('login')">直接登录</span>
        </div>
      </div>
      <!-- 忘记密码 -->
      <div v-if="Type === 'forget'" class="flex flex-col items-center h-full">
        <h1 class="title font-semibold">忘记密码</h1>

        <div class="mt-10 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入手机号" v-model="userinfo.mobile"
            required />
        </div>
        <div class="mt-3 w-full h-10 flex gap-3">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入验证码" v-model="userinfo.code" required />
          <Button class="h-full px-3 text-[#333333]" variant="outline" @click="resetcode" :disabled="disabled.resert">{{
        disabled.resert ? `(${countdown}s)后重新获取` : '获取验证码' }}</Button>
        </div>
        <div class="mt-3 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请输入密码" v-model="userinfo.password"
            required />
        </div>
        <div class="mt-3 w-full h-10">
          <Input class="w-full h-10 rounded-[4px]" type="phone" placeholder="请再次输入密码" v-model="userinfo.repassword"
            required />
        </div>
        <div class="w-full text-left text-[12px] mt-2 text-[#f15533]" v-if="existed.type">{{ existed.data }}</div>

        <div class="w-full mt-auto">
          <Button class="w-full rounded-[4px] bg-[#2277FF]" @click="forget">确认修改</Button>
        </div>
        <div class="mt-auto flex justify-center items-center">
          <span class="descripe">想起密码？</span><span class="descripe font-medium !text-[#2277FF]"
            @click="changeType('login')">去登录</span>
        </div>
      </div>
      <img src="/public/img/login/close.png" alt="" class="w-6 h-6 absolute right-5 top-5"
        @click="emits('closepop', false)" />
    </div>
  </div>
</template>
<script setup>
import { useToast } from '@/components/ui/toast/use-toast';
import { reactive, ref, watch } from 'vue';
import { debounce } from 'lodash'
import { accountLogin, mobileLogin, getResetCode, wechatLogin, getLoginCode, getSignupCode, getWechatCode, register,forgetPassword } from '@/server/apis/login/index';
const Token = useCookie('token');
const IsLogin = useCookie('isLogin')
const props = defineProps({
  logintype: {
    type: String,
    default: 'login',
  },
});
const emits = defineEmits(['closepop']);
//用户信息
const userinfo = reactive({
  username: '',
  password: '',
  repassword: '',
  mobile: '',
  code: '',
});
//微信二维码地址
const codeurl = ref('');
//判断登录密码是否一致
watch(() => userinfo.mobile, (now) => {
  console.log(now);
  // hanleInput()
})
//倒计时
const countdown = ref(60);
//错误提示
const existed = ref({
  type:false,
  data:''
});
//禁用按钮
const disabled = reactive({
  login: false,
  signup: false,
  vercode: false,
  resert:false,
});

//登录方式
const Type = ref(props.logintype);
//通知弹窗
const { toast } = useToast();
//登录函数
const accountlogin = async () => {
  const { data: data } = await accountLogin(userinfo)
  if (data.code === 200) {
    Token.value = data.data.token;
    IsLogin.value = true;
    emits('closepop', false);
    toast({
      title: '登陆成功',
      duration: '2000',
    });
  } else {
    existed.value.type = true;
    existed.value.data=data.msg;

    setTimeout(() => {
      existed.value.type = false
    }, 2000)
  }
};
//手机号登录
const mobilelogin=async ()=>{
  const { data: data } = await mobileLogin(userinfo)
  if (data.code === 200) {
    Token.value = data.data.token;
    IsLogin.value = true;
    emits('closepop', false);
    toast({
      title: '登陆成功',
      duration: '2000',
    });
  } else {
    existed.value.type = true;
    existed.value.data=data.msg;

    setTimeout(() => {
      existed.value.type = false
    }, 2000)
  }
}
//获取注册验证码
const signupcode = async () => {
  hanleInput();
  if (vaildate.mobile) {
    await getSignupCode(userinfo.mobile)
    countdown.value = 60;
    disabled.signup = true;
    setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        disabled.signup = false;
        countdown.value = 60;
      }
    }, 1000);
  } else {
    alert('请输入正确的手机号')
  }
};
//获取登录验证码
const logincode = async () => {
  hanleInput();
  if (vaildate.mobile) {
    await getLoginCode(userinfo.mobile)
    countdown.value = 60;
    disabled.mobile = true;
    setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        disabled.mobile = false;
        countdown.value = 60;
      }
    }, 1000);
  } else {
    alert('请输入正确的手机号')
  }
};
//获取重置密码验证码
const resetcode = async () => {
  hanleInput();
  if (vaildate.mobile) {
    await getResetCode(userinfo.mobile)
    countdown.value = 60;
    disabled.resert = true;
    setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        disabled.resert = false;
        countdown.value = 60;
      }
    }, 1000);
  } else {
    alert('请输入正确的手机号')
  }
};
//注册函数
const signup = async () => {
  const { data: data } = await register(userinfo);
  if(data.code===200){
  changeType('login')
  toast({
    title: '注册成功',
    duration: '2000',
  });}
  else{
    existed.value.type=true;
    existed.value.data=data.msg;
    setTimeout(() => {
      existed.value.type = false
    }, 2000)
  }
};
//忘记密码
const forget = async () => {
  const { data: data } = await forgetPassword(userinfo);
  if(data.code===200){
  changeType('login')
  toast({
    title: '密码重置成功',
    duration: '2000',
  });}
  else{
    existed.value.type=true;
    existed.value.data=data.msg;
    setTimeout(() => {
      existed.value.type = false
    }, 2000)
  }
};
//清空表单
const clear=()=>{
    userinfo.username='';
    userinfo.password='';
    userinfo.repassword='';
    userinfo.mobile='';
    userinfo.code='';

}
//改变方式
const changeType = (type) => {
  if(type!==Type.value){
    clear();
    Type.value = type;
    existed.value.type = false;
    if (type === 'weixing' && !codeurl.value) {
      getWechatCode().then(res => {
      console.log(res.data.data.url)
      codeurl.value = res.data.data.url
    })
  }
  }else{

  }

};
const vaildate = ref({
  username: false,
  password: false,
  repassword: false,
  mobile: false,
  code: false,
})
//正则验证
// const hanleInput = debounce(function () {
//   const reg = /^1[3456789]\d{9}$/;
//   if (reg.test(userinfo.mobile)) {
//     vaildate.mobile = true;
//   } else {
//     vaildate.mobile = false;
//   }
// }, 2000);
const hanleInput=()=>{
  const reg = /^1[3456789]\d{9}$/;
  if (reg.test(userinfo.mobile)) {
    vaildate.mobile = true;
  } else {
    vaildate.mobile = false;
  }
}
//判断空值
const hasEmptyvalue = (obj) => {
  const values = Object.values(obj);
  return values.includes(null) || values.includes('') || values.includes(undefined);
};
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
