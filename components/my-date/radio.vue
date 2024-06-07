<script setup lang="ts">
import { ref } from 'vue'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'

import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '@/components/ui/calendar'
import Select from '@/components/ui/calendar/Select.vue'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const df = new DateFormatter('zh', {
  dateStyle: 'long',
})
const emit=defineEmits(['check'])
const value = ref<DateValue>();
function convertToTimestamp(year:any, month:any, day:any) {
    var date = new Date(year, month - 1, day);
    var timestamp = date.getTime();
    return Math.floor(timestamp / 1000);
}
const getTime=(e:any)=>{
  if(e){
  const {year,month,day}=e;
  const date=convertToTimestamp(year, month, day)
  emit('check',date);
  }else{
    emit('check',null);
  }
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        v-bind="$attrs"
        variant="outline"
        :class="cn(
          'w-[280px] justify-between text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "选择截止时间" }}

        <CalendarIcon class=" h-4 w-4" color="#999999" />

      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Select v-model="value" initial-focus @update:model-value="getTime" />
    </PopoverContent>
  </Popover>
</template>
