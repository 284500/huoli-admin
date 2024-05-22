<template>
  <div class="relative hidden md:block">
    <Lucide icon="Search" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      v-model="searchdata"
      placeholder="搜索内容"
      class=" appearance-none bg-background pl-8 shadow-none"
      @keyup.enter="emit('search',searchdata)"
    />
  </div>
</template>
<script setup>
const props=defineProps({
  modelValue:{
    type:String,
  }
});
const emit=defineEmits(['update:modelValue','search']);
const searchdata=useVModel(props,'modelValue',emit);
</script>
<style scoped>
input::placeholder {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #aaaaaa;
  line-height: 20px;
}
</style>
