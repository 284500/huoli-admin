<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline" size="icon" class="shrink-0 md:hidden">
        <Lucide class="h-5 w-5" icon="Menu" />
        <span class="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="flex flex-col">
      <nav class="grid gap-2 text-lg font-medium">
        <div
          v-for="(tab, index) in tabList"
          :key="index"
          class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Lucide class="h-6 w-6" :icon="tab.icon" />
          {{ tab.title }}
        </div>
      </nav>
    </SheetContent>
  </Sheet>
</template>
<script setup>
const props = defaultProps({
  tabList: {},
});
</script>
