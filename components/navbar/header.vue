<template>
  <header class="flex items-center gap-4 lg:px-12 h-[76px] px-4 py-5 justify-between">
    <!-- 查询框 -->
    <div class="w-full flex-1">
      <slot name="left">
      
      </slot>
    </div>
    <slot name="right">
      <RightButton></RightButton>
    </slot>
  </header>
</template>
<script setup>
import Drawer from '@/components/drawer/index.vue';
import Login from '@/components/login/index.vue';
import RightButton from '@/components/navbar/right.vue';
import LeftButton from '@/components/navbar/left.vue';
</script>
