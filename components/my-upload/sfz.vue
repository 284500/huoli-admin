<template>
  <input type="file" class=" absolute top-0 left-0 right-0 bottom-0 opacity-0 z-10" @change="upload" />
  <img v-if="modelValue" class="absolute w-full h-full left-0 top-0" :src="value">
  <div v-else>
    <img  :src="props.iconUrl" alt="" class="w-full h-full absolute top-0 z-100">
    <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 items-center">
    <div class="bg-[#2277FF] w-10 h-10 rounded-full flex justify-center items-center">
      <img src="/public/img/auth/input.png" alt=""></div>
    <div class="input-text">{{ props.title }}</div>
  </div>
  </div>

</template>
<script setup>
import { uploadImg } from '@/server/apis/upload/index.js'
const props = defineProps({
  iconUrl:{
    type: String,
    default:'/img/auth/sfz-2.png'
  },
  title:{
    type: String,
    default: '请上传身份证正面'
  },
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
.input-text {
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #2277ff;
  line-height: 20px;
}
</style>
