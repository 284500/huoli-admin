<template>
  <div class="flex" v-if="!IsLogin">
    <Button
      class="rounded-[4px] bg-[#ffffff] text-muted-foreground mr-3 hover:bg-white"
      @click="popup('signup')"
      >注册</Button
    >
    <Button class="rounded-[4px] bg-[#2277ff] text-white" @click="popup('login')">登录</Button>
  </div>
  <DropdownMenu v-else>
    <DropdownMenuTrigger as-child>
      <Avatar>
       <AvatarImage :src="AvatorImg" alt="@radix-vue" />
     </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="center">
      <NuxtLink to="/security">
      <DropdownMenuItem >安全中心</DropdownMenuItem>
      </NuxtLink>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logout">退出登录</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <Drawer v-model="store.isShow"><Login @closepop="Closepop" :logintype="loginType"></Login></Drawer>
</template>
<script setup>
import Drawer from '@/components/drawer/index.vue';
import Login from '@/components/login/index.vue';
import { useLoginStore,useNavStore } from '~/composables/store';
const store=useLoginStore();
const nav=useNavStore();
const Token = useCookie('huoli-token',{ maxAge:60*60*24*30});
const IsLogin = useCookie('isLogin',{ maxAge:60*60*24*30});
const UserInfo = useCookie('userInfo',{ maxAge:60*60*24*30 });
//状态
const AvatorImg=computed(()=>{
  return UserInfo.value?.avatar || '/img/login/user-avator.png';
});
const popup = (type) => {
  loginType.value = type;
  store.isShow = true;
  console.log(store.isShow);
};
const loginType=ref('signup');
const Closepop = (e) => {
  console.log(e);
  store.isShow = false;
};
const logout = () => {
  nav.index= 0;
  Token.value=null;
  IsLogin.value=false;
  UserInfo.value=null;
  navigateTo('/modelcenter');
};
</script>
