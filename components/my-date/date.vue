<script setup lang="ts">
import { type Ref, ref } from 'vue'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'

import { CalendarIcon } from '@radix-icons/vue'
import type { DateRange } from 'radix-vue'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const df = new DateFormatter('zh', {
  dateStyle: 'medium',
})
const date=ref<any>({start:null,end:null})
const emit=defineEmits(['change'])
const value = ref({
  start: null,
  end: null,
})
function convertToTimestamp(year:any, month:any, day:any) {
    var date = new Date(year, month - 1, day);
    var timestamp = date.getTime();
    return Math.floor(timestamp / 1000);
}
const getStart=(startDate:any) =>
{

if(startDate){
  value.value.start = startDate;
  const {year,month,day}=startDate;
  date.value.start=convertToTimestamp(year, month, day)
  emit('change',date.value)
}else{
  emit('change',{start:null,end:null});
}
}
const getTime=(e:any)=>{
  if(e.end){
  const {year,month,day}=e.end;
  date.value.end=convertToTimestamp(year, month, day)
  emit('change',date.value);
  }else{
    date.value.end=null;
  }
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-[280px] justify-between text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >

        <template v-if="value.start">
          <template v-if="value.end">
            {{ df.format(value.start.toDate(getLocalTimeZone())) }} - {{ df.format(value.end.toDate(getLocalTimeZone())) }}
          </template>

          <template v-else>
            {{ df.format(value.start.toDate(getLocalTimeZone())) }}
          </template>
        </template>
        <template v-else>
         <div class="text-[#AAAAAA]">开始日期 - 结束日期</div>
        </template>
        <CalendarIcon class="mr-2 h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="getStart" @update:model-value="getTime" />
    </PopoverContent>
  </Popover>
</template>
