<script lang="ts" setup>
import { SlashIcon } from '@radix-icons/vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
const props=defineProps({
  list:{
    typeof:Array,
    default:[
      {
        name:"首页",
        url:"/"
      },{
        name:"组件",
        url:"/modelcenter"
      },
      {
        name:"组件",
        url:"/modelcenter"
      }
    ]
  }
});
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-for="(item,index) in props.list" >
        <BreadcrumbLink class="name" :href="item.url" v-if="index<list.length-1">
         {{ item.name }}
        </BreadcrumbLink>
        <div v-if="index<list.length-1" class="name">/</div>
        <span class="current" v-if="index===list.length-1">{{ item.name }}</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
<style scoped>
.name{
font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
@apply font-normal;
text-align: left;
color: #999999;
line-height: 20px;
}
.current{
font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
font-weight: 400;
text-align: left;
color: #333333;
line-height: 20px;
}
</style>
