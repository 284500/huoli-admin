<template>
  <Dialog>
    <DialogTrigger asChild>
      <slot></slot>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[700px] lsm:p-0 rounded-lg lsm:shadow-none lsm:max-w-[384px]"
      ><slot name="content"></slot
    ></DialogContent>
  </Dialog>
</template>
<script setup lang="ts">
// interface Popup {
//   name: string;
//   age: number;
// }

// const props = defineProps<Popup>();
</script>
<style scoped></style>
