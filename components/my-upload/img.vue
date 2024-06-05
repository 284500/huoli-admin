<template>
  <div class="w-[100px] h-[100px] input-border flex justify-center items-center relative">
    <input type="file" class=" absolute top-0 z-10 left-0 right-0 bottom-0 opacity-0" @change="upload" />
    <img v-if="modelValue" class="absolute w-full h-full" :src="value" />
    <div v-else class="w-6 h-6  dashed-border flex justify-center items-center">
      <div class="w-[14px] h-[14px]  dashed-border">
        <img src="/public/add.png" alt="" class="w-full h-full">
      </div>
    </div>
  </div>
</template>
<script setup>
import { uploadImg } from '@/server/apis/upload/index.js'
const props = defineProps({
  modelValue: {
    type: String,
    default: null
  }
});
const emit = defineEmits(['update:modelValue'])
const value = useVModel(props, 'modelValue', emit);
//上传图片
const upload = async (e) => {
  let file = e.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  let { data: { data: data } } = await uploadImg(formData);
  value.value = data.path;
};
</script>
<style scoped>
.dashed-border {
  border: 1px dashed #DDDDDD;
}
</style>
