<template>
  <div class=" h-[40px] flex items-center relative">
    <div
      class="model-list mr-10 cursor-pointer relative"
      @click="tabchange(0)"
      :class="{ '!text-[#333333] font-semibold': modelValue === 0 }"
    >
      {{ tab[0] }}
    </div>
    <div
      class="model-list cursor-pointer"
      @click="tabchange(1)"
      :class="{ '!text-[#333333] font-semibold': modelValue === 1 }"
    >
      {{ tab[1] }}
    </div>
    <img
      src="/public/img/tab/tabtips.png"
      alt=""
      class="absolute bottom-0 left-4 transition-all"
      :style="`left:${modelValue * 100 + 18.5}px`"
    />
  </div>
</template>
<script setup>
import { computed} from 'vue';
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  tab: {
    type: Array,
    default: [' 物料模板', ' H5模板'],
  },
  position:{
    type: String,
    default: 'left'
  }
});
const imgleft=computed(()=>{
  return 'dad'
})
const emit = defineEmits(['update:modelValue', 'change']);
const tabchange = (index) => {
  emit('update:modelValue', index);
};
</script>
<style scope>
.model-list {
  height: 24px;
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 24px;
}
</style>
