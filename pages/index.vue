<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: [
'rediect'
  ]
});
</script>
