<template>
    <div class="relative hidden md:block">
      <Lucide icon="Search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="搜索内容"
        class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
        @keyup.enter="send"
      />
    </div>
</template>
<script setup>
const send=()=>{
  console.log("1")
}
</script>
