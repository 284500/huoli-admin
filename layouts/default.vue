<template>
  <Toaster />

  <div>
    <Navbar></Navbar>
    <div class="flex min-h-screen w-full">
      <Aside :tab-List="tabList"></Aside>
      <Appmain :tab-List="tabList"><slot /></Appmain>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';

const tabList = reactive([
  {
    title: 'Home',
    icon: 'Home',
  },
  {
    title: 'Dashboard',
    icon: 'LineChart',
  },
  {
    title: 'Dashboard',
    icon: 'Users',
  },
  {
    title: 'Dashboard',
    icon: 'Home',
  },
]);
</script>
