<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon, CheckIcon } from '@radix-icons/vue'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
const props=defineProps({
  frameworks:{
    type:Array,
    default:[
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
    ]
  }
})
const emit = defineEmits(['select'])
const open = ref(false)
const value = ref('')
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        :class="$attrs.class"
        class="w-[200px] justify-between"
      >
        {{ value
          ? frameworks.find((framework) => framework.value === value)?.label
          : "Select framework..." }}
        <ChevronDownIcon class="w-4 h-4 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="!w-full p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Search framework..." />
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value;
                  emit('select',ev.detail.value);
                }
                open = false
              }"
            >
              {{ framework.label }}
              <CheckIcon
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
