<script setup >
import {
  DateFormatter,
  getLocalTimeZone,
} from '@internationalized/date'

import { CalendarIcon } from '@radix-icons/vue'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
const props=defineProps({
  modelValue: {
    type:Object,
    default:{
      start:null,
      end:null
    }
  }
})
const emit=defineEmits(['start','update:modelValue'])
const df = new DateFormatter('zh', {
  dateStyle: 'medium',
})
const value = useVModel(props,'modelValue',emit);
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button v-bind="$attrs"
        variant="outline"
        :class="cn(
          'w-[260px] justify-between text-left font-normal',
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
        <CalendarIcon class=" h-4 w-4" color="#999999" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <RangeCalendar v-model="value" initial-focus :number-of-months="2" @update:start-value="(startDate) => {value.start = startDate,emit('start',startDate)}" />
    </PopoverContent>
  </Popover>
</template>
