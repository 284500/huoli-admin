<template>
  <Myheader>
    <template #left>
      <div class="header-left font-semibold">地址管理</div>
    </template>
  </Myheader>
  <ScrollArea class="flex-1 overflow-auto">
    <div
      class="w-[100vw] px-4 relative md:px-8 lg:px-12 box-border md:w-full min-h-[calc(100vh-76px)] flex flex-col justify-between"
    >
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            v-for="item in pager.lists" :class="{'!bg-muted':item.isDefault}"
            class="border-[1px] border-[#eeeeee] rounded-[4px] flex lg:p-6 justify-between items-center p-4"
          >
            <div class="flex items-center">
              <div
                class="w-[48px] h-[48px] overflow-hidden flex justify-center items-center mr-4 rounded-full bg-[rgba(255,160,36,0.10)]"
              >
                <img src="/public/img/address/address.png" alt="" class="w-6 h-6" />
              </div>
              <div>
                <div><span class="user">{{ item.consignee }}</span> <span class="user mr-2">{{ item.phone }}</span><span v-if="item.isDefault" class="text-[white] text-[12px] px-1 py-0.5 bg-[#FFA024] rounded-[8px]">默认</span></div>
                <div>
                  <div class="text flex gap-1"><span>{{ item.province }}</span> <span>{{ item.city }}</span> <span>{{ item.county }}</span> <span>{{ item.address }}</span></div>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <Lucide v-if="!item.isDefault" icon="MapPin" color="#999999" class="h-4 w-4" @click="setDefault(item.id)"></Lucide>
              <Lucide icon="PencilLine" color="#999999" class="h-4 w-4" @click="edit(item.id)"></Lucide>

              <Lucide icon="Trash2" color="#999999" class="h-4 w-4" @click="del(item.id)"></Lucide>
            </div>
          </div>
          <MyAlert ref="Alert"></MyAlert>
          <div @click="add"
            class="border-[1px] border-[#eeeeee] rounder-[4px] flex lg:p-6 justify-between items-center p-4"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 overflow-hidden flex justify-center items-center mr-4 rounded-full bg-[rgba(34,119,255,0.08)]"
              >
            <Lucide icon="Plus" class="h-6 w-6" color="#2277FF" stroke-width="2"></Lucide>
            </div>
              <div>
                <div>
                  <div class="add-address">添加地址</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </ScrollArea>
  <MyDrawer v-model="editpop" >
    <MyForm :data="detail.data" @finish="editfinish" @close="closeedit"></MyForm>
  </MyDrawer>
  <MyDrawer v-model="addpop" >
    <MyForm @finish="addfinish" @close="closeadd"></MyForm>
  </MyDrawer>

</template>
<script setup>
import Myheader from '@/components/navbar/header.vue';
import MyDrawer from '@/components/drawer/index.vue';
import {getAddressList,getAddressDetail,addAddress,editAddress,deleteAddress,setDefaultAddress} from '@/server/apis/address/index';
import { usePaging } from '@/hooks/usePaging';
import { useDetail } from '@/hooks/useDetail';
import { onBeforeMount} from 'vue';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();
const Params=reactive({});
const editpop = ref(false);
const addpop = ref(false);
const Alert = ref(null);
const { pager, getLists } = usePaging({
    fetchFun: getAddressList
})
const showAlert=()=>{
  // Alert.value.AlertShow();
  toast({
      title: '设置成功',
      description:'成功修改默认地址',
      duration: '2000',
    });
}
const {detail,getDetail} = useDetail(getAddressDetail,Params);
const init=()=>{
  getLists()
}
const add=()=>{
addpop.value=true;
}
const edit=async (id)=>{
  Params.id=id;
  await getDetail();
  editpop.value=true
}
const del=async (id)=>{
 await deleteAddress({ids:[id]})
 toast({
  title: '删除成功',
 })
 getLists();
}
const editfinish=async (data)=>{
  editpop.value=false;
  await editAddress(data);
  toast({
  title: '修改成功',
 })
  getLists();
}
const addfinish=async (data)=>{
  console.log(data)
  addpop.value=false;
  await addAddress(data);
  toast({
  title: '添加成功',
 })
  getLists();
}
const closeedit=()=>{
  editpop.value=false;
  detail.data=null;
}
const closeadd=()=>{
  addpop.value=false;
}
const setDefault=async (id)=>{
  await setDefaultAddress({id:id})
  showAlert({
    message:'成功设置地址'
  });
  getLists();
}
onBeforeMount(init);
</script>
<style scoped>
.header-left {
  font-size: 18px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  text-align: left;
  color: #333333;
  line-height: 24px;
}

.text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  @apply font-normal;
  text-align: left;
  color: #999999;
  line-height: 20px;
}
.user {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  @apply font-medium;
  text-align: left;
  color: #333333;
  line-height: 24px;
}
.add-address {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  @apply font-normal;
  text-align: left;
  color: #666666;
  line-height: 24px;
}
</style>
