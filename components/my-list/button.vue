<template>
	<ul class="flex whitespace-nowrap overflow-auto h-8 w-full gap-2">
              <li
                class="px-4 py-1.5 hover:!text-[#2277ff] rounded-[4px] label cursor-pointer"
                :class=" ActiveList === -1? 'isActive' : ''"
                @click="listChange(-1,null)"
              >
               全部
              </li>
              <li
                class="px-4 pt-1 hover:!text-[#2277ff] rounded-[4px] border border-[#EEEEEE] label cursor-pointer"
                v-for="(item, index) in props.lists"
                :key="index"
                :class=" ActiveList === index ? 'isActive' : ''"
                @click="listChange(index,item.id)"
              >
               {{ item.name }}
              </li>
            </ul>
</template>
<script setup>
	import {
		ref
	} from 'vue'
	const props = defineProps({
    modelValue: {
			type: Number
		},
    lists:{
      type:Array,
      default:[]
    }
	});
	const emit = defineEmits(['change','update:modelValue']);
  const ActiveList=ref(-1);
	const listChange = (page,id) => {
    ActiveList.value=page;
    emit('update:modelValue',id)
		emit('change')
	};
</script>
<style scoped>
.label {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 20px;
}
.isActive {
  @apply bg-[rgba(34,119,255,0.08)];
  color: #27f !important;
}
</style>
