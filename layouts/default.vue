<template>
  <Toaster />
  <div>
    <div class="flex h-screen w-full">
      <Aside :tab-List="tabList"></Aside>
      <Appmain :tab-List="tabList">
        <slot></slot>
      </Appmain>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const tabList = reactive([
  {
    name: '模板中心',
    icon: 'img/nav/icon-template.png',
    path: '/modelcenter',
    isTitle: false,
  },
  {
    name: '个人空间',
    isTitle: true,
  },
  {
    name: '作品库',
    icon: 'img/nav/product.svg',
    path: '/product',
    isTitle: false,
  },
  {
    name: '物料订单',
    icon: 'img/nav/materialorder.png',
    path: '/modelorder',
    isTitle: false,
  },
  {
    name: '投放订单',
    icon: 'img/nav/placeorder.png',
    path: '/placedorder',
    isTitle: false,
  },
  {
    name: '售后服务',
    icon: 'img/nav/aftersales.png',
    path: '/aftersales',
    isTitle: false,
  },
  {
    name: '个人资产',
    isTitle: true,
  },
  {
    name: '我的钱包',
    icon: 'img/nav/wallet.png',
    path: '/wallet',
    isTitle: false,
  },
  {
    name: '我的认证',
    icon: 'img/nav/myauth.png',
    path: '/myauth',
    isTitle: false,
  },
  {
    name: '地址管理',
    icon: 'img/nav/address.png',
    path: '/address',
    isTitle: false,
  },
  {
    name: '网站管理',
    icon: 'img/nav/webcontrol.png',
    path: '/',
    isTitle: false,
  },
]);
</script>
