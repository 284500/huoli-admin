<template>
  <NuxtLayout title="安全中心">
    <div class="items-center headerimg bg-no-repeat bg-top bg-[white] rounded-[0.5rem]">
      <div class="flex flex-col items-center">
        <div class="sm:mt-[58px] mt-8 w-[104px] h-[104px] rounded-full overflow-hidden border-[4px] border-[white]">
          <Avatar class="w-full h-full" @click="ChangePop('avatar')">
            <AvatarImage :src="userInfo.avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div class="flex items-center mt-4">
          <span class="nick-name mr-2">{{ userInfo.nickname }}</span>
          <Lucide icon="PencilLine" color="#2277FF" class="w-5 h-5" @click="ChangePop('nickname')"></Lucide>
        </div>
        <div class="text !text-[#999999] my-2">{{ userInfo.mobile }}</div>
      </div>
      <div class="md:p-10 p-0">
        <div class="table-border px-6 py-5">
          <div class="flex justify-between items-center">
            <div class="flex mr-2">
              <Lucide icon="LockKeyhole" color="#999999" class="w-5 h-5 mr-3 p-0.5 mt-0.5"></Lucide>
              <div>
                <div class="mb-1 left-title">登录密码</div>
                <span class="table-text"> 已设置，可通过账户密码登录</span>
              </div>
            </div>
            <div><Button variant="outline" @click="ChangePop('password')">修改密码</Button></div>
          </div>
          <Separator class="sm:my-5 my-3" />
          <div class="flex justify-between items-center">
            <div class="flex mr-2">
              <Lucide icon="Smartphone" color="#999999" class="w-5 h-5 mr-3 sm:p-0.5 mt-0.5"></Lucide>
              <div>
                <div class="mb-1">手机绑定</div>
                <span class="table-text">用于登录、重置密码或其他安全验证，建议您定期更改密码以保护安全。</span>
              </div>
            </div>
            <div><Button variant="outline" @click="ChangePop('phone')">立即绑定</Button></div>
          </div>
          <Separator class="sm:my-5 my-3" />
          <div class="flex justify-between items-center">
            <div class="flex mr-2">
              <Lucide icon="MessageCircleMore" color="#999999" class="w-5 h-5 mr-3 p-0.5 mt-0.5"></Lucide>
              <div>
                <div class="mb-1">绑定微信</div>
                <span class="table-text"> 用于登录</span>
              </div>
            </div>
            <div><Button variant="outline" @click="ChangePop('wechat')">立即绑定</Button></div>
          </div>
        </div>
      </div>
    </div>
    <MyDrawer v-model="isShow">
      <div class="bg-white rounded-[8px]  px-6 py-3">
        <div class="flex justify-between w-full">
          <div class="table-title !text-[18px]">{{ PopTitle }}</div>
          <div>
            <img src="/public/img/login/close.png" class="w-6 h-6" @click="isShow = false" />
          </div>
        </div>
        <Separator class="my-3 !bg-[#EEEEEE]" />
        <div v-if="PopType === 'avatar'" class="w-full flex flex-col justify-between items-center gap-5 flex-1">
          <MyUploadImg v-model="newInfo.avatar" class="w-[200px]" />
          <div class="flex gap-4">
            <Button class="mb-6 w-full text-lg h-10" @click="ChangeAvatar">确认修改</Button>
            <Button variant="outline" class="mb-6 w-full text-lg h-10" @click="isShow = false">取消修改</Button>
          </div>


        </div>
        <div v-if="PopType === 'nickname'" class="w-full flex flex-col justify-between items-center gap-5 flex-1">
          <div class="w-full">
            <div class="flex gap-4 items-center my-3">
              <Input type="emil" placeholder="请输入新昵称" v-model="newInfo.nickname" />
            </div>
          </div>
          <Button class="mb-6 w-full text-lg h-10" @click="ChangeNickname">确认修改</Button>
        </div>
        <div v-if="PopType === 'password'" class="w-full flex flex-col justify-between items-center gap-5 flex-1">
          <div class="w-full">
            <h1>
              为了保护账号安全，需要验证手机有效性</h1>
            <div class="text-[#666666] mb-2">请使用安全手机<span class="text-[#333333]">{{ userInfo.mobile }}</span>获取验证码短信</div>
            <div class="flex gap-4 items-center my-3">
              <Input type="email" placeholder="请输入验证码" v-model="newInfo.code" />
              <MyButtonSms ref="PasswordSms" type="PasswordSms" @click="getSms('PasswordSms')"></MyButtonSms>
            </div>
            <div class="flex gap-4 items-center my-3">
              <Input type="password" placeholder="请输入新密码" v-model="newInfo.password" />
            </div>
            <div class="flex gap-4 items-center my-3">
              <Input type="password" placeholder="请再次输入新密码" v-model="newInfo.repassword" />
            </div>
          </div>
          <Button class="mb-6 w-full text-lg h-10" @click="ChangePassword">确认修改</Button>
        </div>
        <div v-if="PopType === 'phone'" class="w-full flex flex-col justify-between items-center gap-5 flex-1">
          <div class="w-full">
            <h1 class="text-[#333333] font-[600]">
              新手机号</h1>
            <div class="flex gap-4 items-center mb-3">
              <Input type="number" placeholder="请输入新手机号" v-model="newInfo.mobile" />
            </div>
            <div class="flex gap-4 items-center my-3">
              <Input type="emil" placeholder="请输入验证码" v-model="newInfo.code"/>
              <MyButtonSms ref="PhoneSms" type="PhoneSms" @click="getSms('PhoneSms')"></MyButtonSms>
            </div>
          </div>
          <Button class="mb-6 w-full text-lg h-10" @click="ChangePhone">确认修改</Button>
        </div>
        <div v-if="PopType === 'wechat'" class="w-full flex flex-col justify-between items-center gap-5 flex-1">
          <div class="w-full">
            <h1>
              为了保护账号安全，需要验证手机有效性</h1>
            <div class="text-[#666666] mb-2">请使用安全手机<span class="text-[#333333]">{{ userInfo.mobile }}</span>获取验证码短信</div>
            <div class="flex gap-4 items-center my-3">
              <Input type="email" placeholder="请再次输入新微信" />
            </div>
          </div>
          <Button class="mb-6 w-full text-lg h-10" @click="ChangeWechat">确认修改</Button>
        </div>
      </div>
    </MyDrawer>
  </NuxtLayout>
</template>
<script setup>
import { getUserCenterInfo, editUserInfo, updateUserPassword, bindMobile } from '@/server/apis/security/index.js';
import { BindPhoneSms, ChangePhoneSms, ForgetPwdSms } from '@/server/apis/sms/index.js';
import MyDrawer from '@/components/drawer/index.vue';
import { ref, onMounted } from "vue"
import { useToast } from '@/components/ui/toast/use-toast'
definePageMeta({
  layout: 'center',
});
const { toast } = useToast();
const IsLogin = useCookie('isLogin', { maxAge: 60 * 60 * 24 * 30 });
const user = useCookie('userInfo',{ maxAge:60*60*24*30 })
const userInfo = ref({});
const newInfo = ref({
  avatar: null,
  nickname: null,
  password: null,
  repassword: null,
  mobile: null,
  wechat: null,
  code: null,
});
const isShow = ref(false);
const PopType = ref('password');
const PopTitle = ref('修改密码');
//验证码按钮类型
const PasswordSms = ref(null);
const PhoneSms = ref(null);
//初始化
const init = async () => {
  userInfo.value = await getUserCenterInfo();
  console.log(userInfo.value);
};
//清空新数据
const clearNewInfo = () => {
  newInfo.value = {
    avatar: null,
    nickname: null,
    password: null,
    repassword: null,
    mobile: null,
    wechat: null,
    code: null,
  };
}
//关闭弹窗
const closePop = () => {
  isShow.value = false;
  clearNewInfo();
}
//修改弹出框
const ChangePop = (type) => {
  PopType.value = type;
  if (type === 'avatar') {
    PopTitle.value = '修改头像';
  } else if (type === 'nickname') {
    PopTitle.value = '修改昵称';
  } else if (type === 'password') {
    PopTitle.value = '修改密码';
  } else if (type === 'phone') {
    PopTitle.value = '修改手机号码';
  } else if (type === 'wechat') {
    PopTitle.value = '修改微信';
  }
  isShow.value = true;

}
//获取验证码
const getSms = async (type) => {
  if (type === 'PasswordSms') {
    await ForgetPwdSms(userInfo.value.mobile);
    PasswordSms.value.countDown();
  } else if (type === 'PhoneSms') {
    if (userInfo.value.mobile) {
      await ChangePhoneSms(newInfo.value.mobile);
    }else{
    await BindPhoneSms(newInfo.value.mobile);
    }
    PhoneSms.value.countDown();
  }
}
//修改头像
const ChangeAvatar = async () => {
  await editUserInfo({ field: 'avatar', value: newInfo.value.avatar });
  user.value.avatar = newInfo.value.avatar;
  init();
  closePop();
  toast({
    title: '修改头像成功',
    duration: '2000',
  });
}
//修改昵称
const ChangeNickname = async () => {
  await editUserInfo({ field: 'nickname', value: newInfo.value.nickname });
  user.value.nickname = newInfo.value.nickname;
  init();
  closePop();
  toast({
    title: '修改昵称成功',
    duration: '2000',
  });
}
//修改密码
const ChangePassword = async () => {
  if (newInfo.value.password !== newInfo.value.repassword) {
    alert('两次输入的密码不一致');
  } else {
    await updateUserPassword({ password: newInfo.value.password,code: newInfo.value.code });
    init();
    closePop();
    toast({
      title: '修改密码成功',
      duration: '2000',
    });
  }
}
//修改手机号码
const ChangePhone = async () => {
  if(userInfo.value.mobile){
    await bindMobile({ mobile: newInfo.value.mobile, code: newInfo.value.code,type: 'change' });

  }else{
    await bindMobile({ mobile: newInfo.value.mobile, code: newInfo.value.code,type: 'bind' });
  }
  init();
    closePop();
    toast({
      title: '修改手机号成功',
      duration: '2000',
    });
}
//修改微信
const ChangeWechat = async () => {

}
//发送验证码

onMounted(() => {
  if (!IsLogin.value) {
    navigateTo('/modelcenter');
  } else {
    init();
  }
});
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

.total-number {
  font-size: 20px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  text-align: right;
  color: #ff5030;
  line-height: 20px;
}

.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
}

.table-text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 24px;
}

.headerimg {
  background-image: url('/public/img/security/bg.png');
}

.nick-name {
  font-size: 24px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  color: #333333;
  line-height: 32px;
}

.left-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 24px;
}

.table-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 600;
  color: #333333;
  line-height: 24px;
}
</style>
