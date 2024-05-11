<template>
  <div
    class="flex flex-col flex-1 w-[100vw] h-[100vh] overflow-auto headerimg bg-no-repeat bg-right-top"
  >
    <slot></slot>
  </div>
</template>
<script setup>
import { ScrollArea } from '@/components/ui/scroll-area';

const props = defineProps(['tabList']);
</script>
<style>
.headerimg {
  background-image: url('/public/img/nav/header.png');
}
</style>
