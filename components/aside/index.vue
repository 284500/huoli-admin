<script setup>
import { useLoginStore,useNavStore } from '~/composables/store';
const Token = useCookie('huoli-token',{ maxAge:60*60*24*30});
const store=useLoginStore();
const nav=useNavStore();
const props = defineProps(['tabList']);
//选中按钮的索引
const ChangeActivenumber = (index) => {
  if(Token.value){
  nav.index= index;
  navigateTo(props.tabList[index].path)
}
  else{
    store.isShow=true;
    store.loginType='login';
  }
};
</script>

<template>
  <div class="hidden lg:block overflow-hidden lg:w-[216px] transition-all">
    <div class="flex h-full max-h-screen flex-col bg-[#f9fafb]">
      <div class="flex items-center px-4 h-[76px] p-5">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <img src="/public/img/nav/logo.png" alt="" />
        </a>
      </div>
      <div class="flex-1 px-4">
        <div v-for="(tab, index) in props.tabList" :class="{'cursor-pointer':!tab.isTitle}">
          <div v-if="tab.isTitle" class="title items-start px-3 mt-5 mb-2  ">
            {{ tab.name }}
          </div>
          <div v-else>

              <div
                :class="nav.index === index ?'isActive' : ''"
                class="flex items-center gap-3 rounded-[4px] px-3 h-10 nav-tab"
                @click="ChangeActivenumber(index)"
              >
                <img :src="tab.icon" class="h-4 w-4 svgicon" />
                {{ tab.name }}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.isActive {
  overflow: hidden;
  background-color: rgba(34, 119, 255, 0.08);
  color: #2277ff !important;
  /* background-color: red; */
  .svgicon {
    transform: translate(-100px);
    filter: drop-shadow(100px 0 0 #2277ff);
  }
}
.nav-tab {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: Semibold;
  text-align: left;
  color: #333333;
  line-height: 20px;
}
.iscolapsible {
  width: 50px;
}
.title {
  height: 16px;
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: Medium;
  text-align: left;
  color: #999999;
  line-height: 16px;
}
</style>
