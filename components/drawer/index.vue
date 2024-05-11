<template>
  <div class="" style="z-index: 9999; overflow: hidden" v-if="modelValue">
    <!-- 遮罩层 -->
    <div
      ref="mask"
      @click="clickhide"
      :class="props.color"
      class="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center"
    >
      <slot></slot>
    </div>
    <div class="fixed"></div>
  </div>
</template>
<script setup>
const isShow = ref(true);
const mask = ref(null);
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
    default: 'bg-[rgba(0,0,0,0.45)]',
  },
});
const emits = defineEmits(['update:modelValue']);
const clickhide = (e) => {
  if (e.target === mask.value) {
    emits('update:modelValue', false);
  }
  // console.log(mask.value,e.target)
};
</script>
