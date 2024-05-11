<template>
  <div class="header flex mt-1 flex-wrap">
    <Button v-if="hasCheck" variant="outline" class="h-9 text-[#666666] mr-8">批量删除</Button>
    <Select v-if="hasCheck">
      <SelectTrigger id="framework" class="w-[120px] px-3 py-2 rounded-[4px]">
        <SelectValue placeholder="产品名称" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="车上"> 车上 </SelectItem>
      </SelectContent>
    </Select>
    <div class="relative max-w-sm items-center flex justify-between mr-6">
      <Input
        id="search"
        type="text"
        placeholder="Search..."
        class="pl-8 mr-2 w-[240px] rounded-[4px]"
      />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <Lucide icon="Search" color="#AAAAAA" class="size-5 text-muted-foreground" />
      </span>
    </div>
    <Select>
      <SelectTrigger id="framework" class="w-[120px] px-3 py-2 rounded-[4px]">
        <SelectValue placeholder="创作时间" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="车上"> 车上 </SelectItem>
      </SelectContent>
    </Select>
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="
            cn('w-[240px] justify-between text-left font-normal', !value && 'text-muted-foreground')
          "
        >
          <template v-if="value.start">
            <template v-if="value.end">
              {{
                formatter.custom(toDate(value.start), {
                  dateStyle: 'medium',
                })
              }}
              -
              {{
                formatter.custom(toDate(value.end), {
                  dateStyle: 'medium',
                })
              }}
            </template>

            <template v-else>
              {{
                formatter.custom(toDate(value.start), {
                  dateStyle: 'medium',
                })
              }}
            </template>
          </template>
          <template v-else><div class="text-[#AAAAAA]">开始日期 - 结束日期</div> </template>
          <CalendarIcon class=" h-4 w-4" color="#999999" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <RangeCalendarRoot
          v-slot="{ weekDays }"
          v-model="value"
          v-model:placeholder="placeholder"
          class="p-3"
        >
          <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <button
                  :class="
                    cn(
                      buttonVariants({ variant: 'outline' }),
                      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                    )
                  "
                  @click="updateMonth('first', -1)"
                >
                  <ChevronLeft class="h-4 w-4" />
                </button>
                <div :class="cn('text-sm font-medium')">
                  {{ formatter.fullMonthAndYear(toDate(firstMonth.value)) }}
                </div>
                <button
                  :class="
                    cn(
                      buttonVariants({ variant: 'outline' }),
                      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                    )
                  "
                  @click="updateMonth('first', 1)"
                >
                  <ChevronRight class="h-4 w-4" />
                </button>
              </div>
              <RangeCalendarGrid>
                <RangeCalendarGridHead>
                  <RangeCalendarGridRow>
                    <RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="w-full">
                      {{ day }}
                    </RangeCalendarHeadCell>
                  </RangeCalendarGridRow>
                </RangeCalendarGridHead>
                <RangeCalendarGridBody>
                  <RangeCalendarGridRow
                    v-for="(weekDates, index) in firstMonth.rows"
                    :key="`weekDate-${index}`"
                    class="mt-2 w-full"
                  >
                    <RangeCalendarCell
                      v-for="weekDate in weekDates"
                      :key="weekDate.toString()"
                      :date="weekDate"
                    >
                      <RangeCalendarCellTrigger :day="weekDate" :month="firstMonth.value" />
                    </RangeCalendarCell>
                  </RangeCalendarGridRow>
                </RangeCalendarGridBody>
              </RangeCalendarGrid>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <button
                  :class="
                    cn(
                      buttonVariants({ variant: 'outline' }),
                      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                    )
                  "
                  @click="updateMonth('second', -1)"
                >
                  <ChevronLeft class="h-4 w-4" />
                </button>
                <div :class="cn('text-sm font-medium')">
                  {{ formatter.fullMonthAndYear(toDate(secondMonth.value)) }}
                </div>

                <button
                  :class="
                    cn(
                      buttonVariants({ variant: 'outline' }),
                      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                    )
                  "
                  @click="updateMonth('second', 1)"
                >
                  <ChevronRight class="h-4 w-4" />
                </button>
              </div>
              <RangeCalendarGrid>
                <RangeCalendarGridHead>
                  <RangeCalendarGridRow>
                    <RangeCalendarHeadCell v-for="day in weekDays" :key="day" class="w-full">
                      {{ day }}
                    </RangeCalendarHeadCell>
                  </RangeCalendarGridRow>
                </RangeCalendarGridHead>
                <RangeCalendarGridBody>
                  <RangeCalendarGridRow
                    v-for="(weekDates, index) in secondMonth.rows"
                    :key="`weekDate-${index}`"
                    class="mt-2 w-full"
                  >
                    <RangeCalendarCell
                      v-for="weekDate in weekDates"
                      :key="weekDate.toString()"
                      :date="weekDate"
                    >
                      <RangeCalendarCellTrigger :day="weekDate" :month="secondMonth.value" />
                    </RangeCalendarCell>
                  </RangeCalendarGridRow>
                </RangeCalendarGridBody>
              </RangeCalendarGrid>
            </div>
          </div>
        </RangeCalendarRoot>
      </PopoverContent>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import { type Ref, ref, watch } from 'vue';

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { CalendarDate, type DateValue, isEqualMonth } from '@internationalized/date';

import { type DateRange, RangeCalendarRoot, useDateFormatter } from 'radix-vue';
import { type Grid, createMonth, toDate } from 'radix-vue/date';
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
} from '@/components/ui/range-calendar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
const props=defineProps({
  hasCheck:{
    typeof:Boolean,
    default:true
  }
})
const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
}) as Ref<DateRange>;

const locale = ref('en-US');
const formatter = useDateFormatter(locale.value);

const placeholder = ref(value.value.start) as Ref<DateValue>;
const secondMonthPlaceholder = ref(value.value.end) as Ref<DateValue>;

const firstMonth = ref(
  createMonth({
    dateObj: placeholder.value,
    locale: locale.value,
    fixedWeeks: true,
    weekStartsOn: 0,
  }),
) as Ref<Grid<DateValue>>;
const secondMonth = ref(
  createMonth({
    dateObj: secondMonthPlaceholder.value,
    locale: locale.value,
    fixedWeeks: true,
    weekStartsOn: 0,
  }),
) as Ref<Grid<DateValue>>;

function updateMonth(reference: 'first' | 'second', months: number) {
  if (reference === 'first') {
    placeholder.value = placeholder.value.add({ months });
  } else {
    secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
      months,
    });
  }
}

watch(placeholder, (_placeholder) => {
  firstMonth.value = createMonth({
    dateObj: _placeholder,
    weekStartsOn: 0,
    fixedWeeks: false,
    locale: locale.value,
  });
  if (isEqualMonth(secondMonthPlaceholder.value, _placeholder)) {
    secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
      months: 1,
    });
  }
});

watch(secondMonthPlaceholder, (_secondMonthPlaceholder) => {
  secondMonth.value = createMonth({
    dateObj: _secondMonthPlaceholder,
    weekStartsOn: 0,
    fixedWeeks: false,
    locale: locale.value,
  });
  if (isEqualMonth(_secondMonthPlaceholder, placeholder.value))
    placeholder.value = placeholder.value.subtract({ months: 1 });
});
</script>
<style scoped>
input::placeholder {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #aaaaaa;
  line-height: 20px;
}
</style>
