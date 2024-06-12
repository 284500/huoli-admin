<template>
  <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
    <div class="w-full lg:w-[800px] min-h-[500px] flex flex-col justify-between">
      <div v-if="pager.lists.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(item,index) in pager.lists" :key="index" :class="{'!bg-muted':Active===index}"
            @click="Active=index"
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
            </div>
          </div>
      </div>
      <div v-else class="flex flex-col items-center py-20">
              <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(24 31.67)"><ellipse fill-opacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse><path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2"></path><path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" fill="url(#linearGradient-1)" transform="translate(13.56)"></path><path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#F5F5F7"></path><path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" fill="#DCE0E6"></path></g><path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" fill="#DCE0E6"></path><g transform="translate(149.65 15.383)" fill="#FFF"><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path></g></g></svg>
              <div>暂无数据</div>
        </div>
      <div class="flex justify-around">
        <Button class="mt-4 mr-8 w-2/5  sm:w-[240px]" @click="edit">提交地址</Button>
        <Button class="mt-4 w-2/5  sm:w-[240px]" variant="outline" @click="emit('cancel')">取消保存</Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {getAddressList,getAddressDetail} from '@/server/apis/address/index';
import { usePaging } from '@/hooks/usePaging';
import { useDetail } from '@/hooks/useDetail';
const Params=reactive({});
const { pager, getLists } = usePaging({
    fetchFun: getAddressList,
    params:{pageSize:6}
})
const {detail,getDetail} = useDetail(getAddressDetail,Params);
const Active=ref(0);
const emit = defineEmits(['finish','cancel']);
const edit=async (id)=>{
  Params.id=pager.lists[Active.value].id;
  await getDetail();
  let address=`${detail.data.province} ${detail.data.city} ${detail.data.county} ${detail.data.address}`;
  let name=`${detail.data.consignee}${detail.data.phone}`;
  emit('finish',{address,name});
}
const init =async ()=>{
  await getLists()
};
onMounted(init);
</script>
<style scoped>
.title {
  font-size: 20px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  text-align: left;
  color: #333333;
  line-height: 28px;
}

.text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}

.muted-text {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #666666;
  line-height: 20px;
}

.number {
  font-size: 24px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 32px;
}

.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
}

.input-border {
  border: 1px solid #DDDDDD;
  border-radius: 4px;
}

.dashed-border {
  border: 1px dashed #DDDDDD;
}

.table-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 24px;
}

.input-text {
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #2277ff;
  line-height: 20px;
}

.table-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #999999;
  line-height: 20px;
}

.total-number {
  font-size: 20px;
  font-family: Arial, Arial-Regular;
  font-weight: 400;
  text-align: right;
  color: #ff5030;
  line-height: 20px;
}

input::placeholder {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  color: #aaaaaa;
  line-height: 20px;
}

.apply-text {
  font-size: 14px;
  font-family: PingFang SC, PingFang SC-Regular;
  color: #333333;
  line-height: 24px;
}</style>
