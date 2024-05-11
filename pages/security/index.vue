<template>
  <NuxtLayout title="安全中心">
    <div class=" items-center headerimg bg-no-repeat bg-top bg-[white] rounded-[8px]">
      <div class="flex flex-col items-center">
        <div class="mt-[58px] w-[104px] h-[104px] rounded-full overflow-hidden border-[4px] border-[white]">
          <img src="/public/img/wallet/wallet.png" alt="" class="w-full h-full object-cover" />
        </div>
        <div class="flex items-center mt-4">
          <span class="nick-name mr-2">昵称XXXXXX</span>
          <Lucide icon="PencilLine" color="#2277FF" class="w-5 h-5"></Lucide>
        </div>
        <div class="text !text-[#999999] my-2">176283233434</div>
      </div>
      <div class="md:p-10 p-6">
        <div class=" table-border px-6 py-5">
         <div class="flex justify-between items-center">
          <div class="flex">
            <Lucide icon="LockKeyhole" color="#999999" class="w-5 h-5 mr-3"></Lucide>
            <div>
              <div class="mb-1 left-title">登录密码</div>
              <span  class="table-text"> 已设置，可通过账户密码登录</span>
            </div>
          </div>
          <div><Button variant="outline">修改密码</Button></div>
         </div>
         <Separator class="my-5"  />
         <div class="flex justify-between items-center">
          <div class="flex">
            <Lucide icon="LockKeyhole" color="#999999" class="w-5 h-5 mr-3"></Lucide>
            <div>
              <div class="mb-1">登录密码</div>
              <span class="table-text"> 已设置，可通过账户密码登录</span>
            </div>
          </div>
          <div><Button variant="outline">修改密码</Button></div>
         </div>
         <Separator class="my-5"  />
         <div class="flex justify-between items-center">
          <div class="flex">
            <Lucide icon="LockKeyhole" color="#999999" class="w-5 h-5 mr-3"></Lucide>
            <div>
              <div class=" mb-1">登录密码</div>
              <span  class="table-text"> 已设置，可通过账户密码登录</span>
            </div>
          </div>
          <div><Button variant="outline">修改密码</Button></div>
         </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import MyTable from '@/components/my-table/table.vue';
definePageMeta({
  layout: 'center',
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
.left-title{

font-size: 16px;
font-family: PingFang SC, PingFang SC-Medium;
font-weight: 500;
text-align: left;
color: #333333;
line-height: 24px;
}
</style>
