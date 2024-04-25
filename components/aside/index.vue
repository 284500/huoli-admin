<script setup lang="ts">
import { Bell, Package2 } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { ref } from 'vue';

const props = defineProps(['tabList']);
//选中按钮的索引
const ActiveNumber = ref(0);
//是否折叠侧边栏
const iscolapsible = ref(false);
//点击折叠按钮
const collapsible = () => {
  iscolapsible.value = !iscolapsible.value;
  console.log(iscolapsible.value);
};
</script>

<template>
  <div
    class="hidden border-r bg-muted/80 md:block overflow-hidden md:w-[220px] transition-all"
    :class="{ iscolapsible: iscolapsible }"
  >
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <Package2 class="h-6 w-6" />
          <span class="">Acme Inc</span>
        </a>
        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <Bell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium">
          <div
            v-for="(tab, index) in props.tabList"
            :key="index"
            :class="ActiveNumber === index ? 'isActive' : ''"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            @click="ActiveNumber = index"
          >
            <Lucide class="h-4 w-4" :icon="tab.icon" />
            {{ tab.title }}
          </div>
        </nav>
        <Button @click="collapsible" class="mx-auto mt-4">点击收缩</Button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.isActive {
  @apply bg-white;

  /* background-color: red; */
}
.iscolapsible {
  width: 50px;
}
</style>
