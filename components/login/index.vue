<template>
  <div class="flex justify-center">
    <div class="img hidden sm:block">
      <img src="/public/1.jpg" alt="" />
    </div>
    <!-- 登录菜单 -->
    <Card v-if="Type === 'login'" class="lsm:border-none flex-1 mx-auto max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> 账号登陆 </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="phone">手机号</Label>
            <Input
              id="phone"
              type="phone"
              placeholder="请输入您的手机号"
              v-model="userinfo.phone"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">密码</Label>
              <a href="#" class="ml-auto inline-block text-sm underline"> 忘记密码? </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="请输入您的密码"
              v-model="userinfo.password"
              required
            />
          </div>
          <Button type="submit" class="w-full" @click="login"> 登录 </Button>
          <Button variant="outline" class="w-full"> 微信登陆 </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          没有账号?
          <a href="#" class="underline" @click="changeType('signup')"> 注册 </a>
        </div>
      </CardContent>
    </Card>
    <!-- 注册菜单 -->
    <Card v-if="Type === 'signup'" class="flex-1 max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl"> 账号注册 </CardTitle>
        <!-- <CardDescription> 请输入您的信息来创建您的账号。、 </CardDescription> -->
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <!-- <div class="grid gap-2">
            <Label for="name">Name</Label>
            <Input id="name" type="name" placeholder="请输入您的姓名" required />
          </div> -->
          <div class="grid gap-2">
            <Label for="phone">手机号</Label>
            <Input id="phone" type="phone" placeholder="请输入您的手机号" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">密码</Label>
            <Input id="password" type="password" placeholder="请输入您的密码" />
          </div>
          <Button type="submit" class="w-full" @click="signup"> 创建账号 </Button>
          <Button variant="outline" class="w-full"> 微信登录 </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          已有帐号?
          <a href="#" class="underline" @click="changeType('login')"> 登录 </a>
        </div>
        <button @click="yzm">发送验证码</button>
      </CardContent>
    </Card>
  </div>
</template>
<script setup>
import { useFetch } from '#app';
import { useToast } from '@/components/ui/toast/use-toast';
import { reactive, ref } from 'vue';
const props = defineProps({
  logintype: {
    type: String,
    default: 'login',
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
.img {
  max-width: 40%;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
