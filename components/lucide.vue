<template>
  <component :is="asynIcon" v-bind="props"></component>
</template>
<script setup>
import * as icons from 'lucide-vue-next';
import { computed, defineProps } from 'vue';
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: Number,
  color: String,
  strokeWidth: Number,
  defaultClass: String,
});
//首字母大写
const asynIcon = computed(() => icons[props.icon]);
// console.log(asynIcon);
</script>
