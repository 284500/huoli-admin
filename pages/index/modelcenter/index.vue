<template>
  <Myheader></Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full">
      <div class="w-full h-[40px] flex items-center relative">
        <div
          class="model-list mr-10 cursor-pointer"
          @click="tabactive = 0"
          :class="{ '!text-[#333333] font-semibold': tabactive === 0 }"
        >
          物料模板
        </div>
        <div
          class="model-list cursor-pointer"
          @click="tabactive = 1"
          :class="{ '!text-[#333333] font-semibold': tabactive === 1 }"
        >
          H5模板
        </div>
        <img
          src="/public/img/tab/tabtips.png"
          alt=""
          class="absolute bottom-0 left-4 transition-all"
          :style="`left:${tabactive * 100 + 16}px`"
        />
      </div>

      <div v-if="tabactive === 0">
        <div
          class="bottom-shadow py-3 md:py-5 w-full border-b-[#ffffff] border-b-2 flex flex-col gap-3"
        >
          <ul class="flex whitespace-nowrap overflow-auto h-8">
            <label class="pr-6 py-1.5 label" for="">类型</label>
            <li
              class="px-4 py-1.5 hover:!text-[#2277ff] rounded-[4px] label cursor-pointer"
              v-for="(item, index) in list1"
              :key="index"
              :class="ActiveList[0] === index ? 'isActive' : ''"
              @click="ActiveList[0] = index"
            >
              {{ item }}
            </li>
          </ul>
          <ul class="flex whitespace-nowrap overflow-auto h-8">
            <label class="pr-6 py-1.5 label" for="">行业</label>
            <li
              class="px-4 py-1.5 hover:!text-[#2277ff] rounded-[4px] label cursor-pointer"
              v-for="(item, index) in list2"
              :key="index"
              :class="ActiveList[1] === index ? 'isActive' : ''"
              @click="ActiveList[1] = index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="flex justify-between py-3 items-center">
          <div>
            <span
              class="label mr-4 cursor-pointer"
              @click="sortactive = 0"
              :class="{ '!text-[#333333] font-semibold': sortactive === 0 }"
              >综合排序</span
            >
            <span
              class="label cursor-pointer"
              @click="sortactive = 1"
              :class="{ '!text-[#333333] font-semibold': sortactive === 1 }"
              >最新上传</span
            >
          </div>
          <div class="flex">
            <div class="flex w-[82px] h-[32px] justify-center items-center gap-1">
              <img src="/public/img/wuliao/color.png" alt="" class="w-4 h-4" /> <span>颜色</span>
            </div>
            <div class="flex w-[82px] h-[32px] justify-center items-center gap-1">
              <img src="/public/img/wuliao/date.png" alt="" class="w-4 h-4" /><span>节日</span>
            </div>
          </div>
        </div>
        <div
          class="w-full grid lg:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-4 grid-cols-2"
        >
          <div v-for="item in 20" :key="item">
            <div class="relative card bg-muted pt-[66%]">
              <img src="" alt="" class="absolute top-0 left-0 bottom-0 right-0 object-cover" />
              <div class="more absolute hidden bottom-3 right-1">
                <Button class="rounded-[4px]"><Lucide icon="Eye" class="mr-1"></Lucide>详情</Button>
              </div>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="title">东北大米包装盒 </span>
              <div class="rounded-full bg-blue-600 w-[20px] h-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tabactive === 1">
        <div class="mt-5 w-full">
          <ul class="flex whitespace-nowrap overflow-auto h-8">
            <label class="pr-6 py-1.5 label" for="">类型</label>
            <li
              class="px-4 py-1.5 hover:!text-[#2277ff] rounded-[4px] label cursor-pointer"
              v-for="(item, index) in list1"
              :key="index"
              :class="ActiveList[0] === index ? 'isActive' : ''"
              @click="ActiveList[0] = index"
            >
              {{ item }}
            </li>
          </ul>
          <ul class="flex whitespace-nowrap overflow-auto h-8 my-3">
            <label class="pr-6 py-1.5 label" for="">行业</label>
            <li
              class="px-4 py-1.5 hover:!text-[#2277ff] rounded-[4px] label cursor-pointer"
              v-for="(item, index) in list2"
              :key="index"
              :class="ActiveList[1] === index ? 'isActive' : ''"
              @click="ActiveList[1] = index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div
          class="w-full grid lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-4 grid-cols-2"
        >
          <div v-for="item in 20" :key="item">
            <div class="relative card bg-muted pt-[66%]">
              <img src="" alt="" class="absolute top-0 left-0 bottom-0 right-0 object-cover" />
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="title">手提购物袋子纸袋包装模型</span>
              <div class="rounded-full bg-orange-300 w-[20px] h-[20px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center my-10">
        <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
          <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst />
            <PaginationPrev />

            <template v-for="(item, index) in items">
              <PaginationListItem
                v-if="item.type === 'page'"
                :key="index"
                :value="item.value"
                as-child
              >
                <Button class="w-9 h-9 p-0" :variant="item.value === page ? 'default' : 'outline'">
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
      <Footer></Footer>
    </div>
  </ScrollArea>
</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import { ref } from 'vue';
const tabactive = ref(0);
const ActiveList = ref([0, 0]);
const sortactive = ref(0);

const list1 = ref(['全部', '名片', '宣传单', '折页', '卡签']);
const list2 = ref(['全部', '通用', '生活服务', '折页', '卡签', '电商']);
</script>
<style scoped lang="scss">
.isActive {
  @apply bg-[rgba(34,119,255,0.08)];
  color: #27f !important;
}
.popup {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.card:hover .more {
  display: block;
}
.label {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 20px;
}
.model-list {
  height: 24px;
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #666666;
  line-height: 24px;
}
.title {
  height: 24px;
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
.bottom-shadow {
  box-shadow: 0px -1px 0px 0px #eeeeee inset;
}
</style>
