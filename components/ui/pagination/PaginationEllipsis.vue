<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { PaginationEllipsis, type PaginationEllipsisProps } from 'radix-vue';
import { DotsHorizontalIcon } from '@radix-icons/vue';
import { cn } from '@/lib/utils';

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('w-9 h-9  items-center justify-center hidden sm:flex', props.class)"
  >
    <slot>
      <DotsHorizontalIcon class="" />
    </slot>
  </PaginationEllipsis>
</template>
