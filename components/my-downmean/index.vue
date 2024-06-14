<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
const props = defineProps({
  mean: {
    type: Array,
    default: [{ name: 1, value: '1' }, { name: 2, value: '2' }]
  }
});
const position = ref('bottom');
const emit = defineEmits(['change']);
const handleChange = (value) => {
  emit('change', value);
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <slot>
        <Button variant="outline">
          Open
        </Button>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent >
      <ScrollArea  class="w-56 h-[300px]">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup v-model="position" @update:model-value="handleChange">
          <DropdownMenuRadioItem :value="null">
           全部
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem v-for="item in props.mean" :value="item.value" :key="item.value">
            {{ item.name }}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </ScrollArea>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
