<template>
  <Switch v-model:checked="value" @update:checked="changeType" />
</template>
<script setup>
const props = defineProps({
  modelValue:{
    typeof:Number,
    default:0,
  }
});
const value=ref(props.modelValue?true:false);
const emit = defineEmits(['update:modelValue']);
const changeType = (type) => {
  let data=type?Number(1):Number(0);
  emit('update:modelValue',data);
};
</script>
