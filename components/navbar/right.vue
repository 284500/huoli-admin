<template>
  <div class="flex" v-if="1">
    <Button
      class="rounded-[4px] bg-[#ffffff] text-muted-foreground mr-3 hover:bg-white"
      @click="popup"
      >注册</Button
    >
    <Button class="rounded-[4px] bg-[#2277ff] text-white" @click="popup">登录</Button>
  </div>
  <DropdownMenu v-else>
    <DropdownMenuTrigger as-child>
      <Button variant="secondary" size="icon" class="rounded-full">
        <CircleUser class="h-5 w-5" />
        <span class="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="center">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  <Drawer v-model="isshow"><Login></Login></Drawer>
</template>
<script setup>
import Drawer from '@/components/drawer/index.vue';
import Login from '@/components/login/index.vue';
const popup = () => {
  isshow.value = true;
};
const isshow = ref(false);
</script>
