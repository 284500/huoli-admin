<template>
   <Table class=" ">
        <TableHeader>
          <TableRow class="!bg-[#f9fafb]">
            <TableHead v-if="hasCheck" class="w-6">
              <Checkbox/>
            </TableHead>
            <TableHead v-for="(item,index) in tableTitle" class="title">
              {{ item }}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="(item, index) in tabItems" :key="index"  :class="item.selected?'bg-muted':''">
            <TableCell v-if="hasCheck" class="w-6">
              <Checkbox/>
            </TableCell>
            <TableCell class="flex items-center" >
              <div class="flex">
                <div class="flex items-center"><img class="w-12 h-12" />
                </div>
                <div class="ml-2">
                  <div class="text-sm font-medium">{{ item.productType }}</div>
                  <div class="text-sm text-muted-foreground">{{ item.remarks }}</div>
                  <div class="text-sm text-muted-foreground">{{ item.name }}</div>
                </div>
              </div>
            </TableCell>
            <TableCell class="text">{{ item.name }}</TableCell>
            <TableCell>{{ item.isShelves ? '上架' : '下架' }}</TableCell>
            <TableCell class="text">
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
</template>
<script setup>
const props=defineProps({
  tableTitle:{
    typeof:Array,
    default:['作品信息','创作时间','修改时间','状态']
  },
  tabItems:{
    typeof:Array,
    default:[
  {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '名片'
  },
  {
    id: 1, remarks: 'Alice',
    isShelves: 0, selected: false, productType: '名片'
  },
  {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '鼠标垫'
  },
  {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '鼠标垫'
  },
  {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '鼠标垫'
  },

 {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '鼠标垫'
  },
  {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '鼠标垫'
  },
  {
    id: 1, remarks: 'Alice',
    isShelves: 1, selected: false, productType: '鼠标垫'
  },
]
  },
  hasCheck:{
    typeof:Boolean,
    default:true
  }
});
const CheckboxChange=(value)=>{

}
</script>
<style scoped>
.title{
  font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
@apply font-normal;
text-align: left;
color: #666666;
line-height: 20px;
}
.text{
  font-size: 14px;
font-family: PingFang SC, PingFang SC-Regular;
@apply font-normal;
text-align: left;
color: #333333;
line-height: 20px;
}

</style>
