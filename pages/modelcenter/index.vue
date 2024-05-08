<template>
  <div class="w-full h-full p-4 relative">
    <Tabs default-value="account" class="w-full h-full">
      <TabsList class="w-full grid-cols-2 grid">
        <TabsTrigger value="account" class=""> 物料模板 </TabsTrigger>
        <TabsTrigger value="password"> H5模板 </TabsTrigger>
      </TabsList>
      <div>
        <ul class="flex whitespace-nowrap">
          <label class="px-3 py-1" for="">物品类型</label>
          <li
            class="px-3 py-1 hover:bg-black text-black hover:text-white rounded-full"
            v-for="(item, index) in list1"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="flex whitespace-nowrap">
          <label class="px-3 py-1" for="">行业分类</label>
          <li
            class="px-3 py-1 hover:bg-black text-black hover:text-white rounded-full"
            v-for="(item, index) in list2"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <TabsContent value="account">
        <div class="grid grid-cols-5 gap-x-4 gap-y-2">
          <Card class="relative card h-[220px]" v-for="item in 10" :key="item">
            <div class="absolute hidden popup">
              <div
                class="h-[20%] w-[80%] absolute left-[10%] bottom-4 bg-blue-700 rounded-sm"
              ></div>
            </div>
            data{{ item }}
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <Card> data2 </Card>
      </TabsContent>
    </Tabs>
    <Pagination
      v-slot="{ page }"
      :total="120"
      :sibling-count="1"
      show-edges
      :default-page="2"
      class="absolute bottom-3 left-[50%] translate-x-[-50%]"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />

        <template v-for="(item, index) in items">
          <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
            <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const list1 = ref(['全部', '名片', '宣传单', '折页', '卡签']);
const list2 = ref(['全部', '通用', '生活服务', '折页', '卡签']);
</script>
<style scoped lang="scss">
.isActive {
  @apply border-b-[10px];
}
.popup {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.card:hover .popup {
  display: block;
}
</style>
