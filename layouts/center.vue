<template>
  <div
    class="h-[88px] bg-[#ffffff] fixed top-0 left-0 right-0 flex justify-between pl-6 pr-9 items-center z-[1]"
  >
    <div class="flex  items-center h-[88px] py-7">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <img src="/public/img/nav/logo.png" alt="" />
      </a>
      <Separator v-if="title" orientation="vertical" class="mx-4 h-[20px]" />

      <div v-if="title" class="flex">
        <div class="title">{{ props.title }}</div>
      </div>
    </div>
    <div class="absolute left-[50%] translate-x-[-50%]">
      <slot name="center">

      </slot>
    </div>
  </div>
  <ScrollArea class="mt-[88px] h-[calc(100vh-88px)] overflow-auto bg-[#f6f7f9]">
    <div class="min-h-[calc(100vh-88px)] flex justify-center px-4">
      <div class="w-full lg:w-[980px] xl:w-[1280px] pt-5 flex flex-col justify-between">
        <div>
          <slot />
        </div>
        <slot name="footer"></slot>
        <div class="footer">
          Copyright ©2010-2010 厦门或黎科技有限公司 版权所有 闽ICP备100***518号-1
          增值电信业务经营许可证：闽B1-2014032379闽公网安备案 3301043400173号
        </div>
      </div>
    </div>
  </ScrollArea>
  <slot name="footer"></slot>
</template>
<script setup>
const props = defineProps({
  title: {
    typeof: String,
    default: '',
  },
});
</script>
<style scoped>
.header {
  box-shadow: 0px -1px 0px 0px #eeeeee inset;
}
.footer {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: center;
  color: #999999;
  line-height: 20px;
  @apply py-6;
}
.title {
  font-size: 20px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  text-align: center;
  color: #333333;
  line-height: 28px;
}
</style>
