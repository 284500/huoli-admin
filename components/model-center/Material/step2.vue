<template>
  <div class="flex flex-col gap-4 mt-3 mb-3">
    <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
      <h1 class="title">投放配置</h1>
      <div class="flex gap-10 mt-5 mb-4">
        <div class="flex gap-2 items-center">
          <Label for="isPlace">是否选择分发</Label>
          <MySwitch v-model="isPlace" id="isPlace"></MySwitch>
          <!-- <Switch id="isPlace" v-model:checked="isPlace" /> -->
        </div>
        <div class="flex gap-2 items-center">
          <Label for="isMail">是否寄样</Label>
          <MySwitch v-model="FormData.isSendSample" id="isMail"></MySwitch>
        </div>
        <div class="flex gap-2 items-center">
          <Label for="isComfirmation">是否可视频确认样品</Label>
          <MySwitch v-model="FormData.isVideoSendSample" id="isVideoSendSample"></MySwitch>
        </div>
      </div>
      <div class="flex gap-4 items-center flex-wrap">
        <div class="border-[1px] border-[#eeeeee] rounder-[4px] flex justify-between items-center p-4 flex-1">
          <div class="flex items-center">
            <div
              class="w-8 h-8 overflow-hidden address-text flex justify-center items-center mr-3 rounded-full bg-[#000000]">
              寄
            </div>
            <div>
              <div>
                <span class="table-title !text-[18px]">卢杰荣</span>
                <span class="table-title !text-[18px]">17679984282</span>
              </div>
              <div>
                <div class="muted-text">福建省 厦门市 湖里区 金山街道后坑社区149号</div>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <Lucide icon="ChevronRight" color="#CCCCCC" class="h-5 w-5" ></Lucide>
          </div>
        </div>
        <div><img src="/public/img/address/chevron.png" alt="" /></div>
        <div @click="isShow2=true" class="border-[1px] border-[#eeeeee] rounder-[4px] flex justify-between items-center p-4 flex-1 h-[80px]">
          <div class="flex items-center">
            <div
              class="w-8 h-8 address-text overflow-hidden flex justify-center items-center mr-3 rounded-full bg-[#FFA024]">
              收
            </div>
            <div>
              <div>
                <span class="table-title !text-[18px]">{{deliveryAddress.name }}</span>
              </div>
              <div>
                <div class="muted-text">{{deliveryAddress.address }}</div>

              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <Lucide icon="ChevronRight" color="#CCCCCC" class="h-5 w-5" ></Lucide>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-4 grid-cols-2 lg:gap-x-10 gap-x-5 gap-y-4 mt-6 mb-3">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">选择自行分发</span></div>
          <div class="relative">
            <div class="absolute right-3 top-0 bottom-0 flex items-center apply-text">张</div>
            <Input type="number" placeholder="请输入" class="w-full rounded-[4px]" v-model="FormData.selfIssuedQuantity" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5" v-if="isPlace">
          <div>
            <span class="apply-text">广告分发总数</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div class="relative">
            <div class="absolute right-3 top-0 bottom-0 flex items-center apply-text">张</div>
            <Input type="number" placeholder="请输入" class="w-full rounded-[4px]" v-model="placeData.quantity" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5 col-span-2" v-if="isPlace">
          <div>
            <span class="apply-text">分发商户数</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div class="flex gap-2 items-center">
            <Input type="text" placeholder="请输入" class="flex-1 rounded-[4px]" v-model="placeData.merchantsNumber"/><span class="apply-text">每</span>
            <Input type="text" placeholder="请输入" class="flex-1 rounded-[4px]" disabled  :value="Number(placeData.quantity/placeData.merchantsNumber)||Number(0)"/><span class="apply-text">为一份</span>
          </div>
        </div>
      </div>
      <div v-if="isPlace">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">发放地区</span></div>
          <div class="relative">
            <div class="absolute right-3 top-0 bottom-0 flex items-center">
              <Lucide icon="Search" color="#AAAAAA" class="w-3.5 h-3.5"></Lucide>
            </div>
            <Input type="text" placeholder="请输入" class="w-full rounded-[4px]" v-model="placeData.releaseArea"  @keyup.enter="searchAddress" />
          </div>
          <div class="w-full bg-[#D8D8D8] mt-3.5 mb-6 aspect-[2/1]">
            <img class="w-full h-full object-cover"
							:src="`https://restapi.amap.com/v3/staticmap?location=${position}&zoom=13&size=750*300&markers=mid,,A:116.481485,39.990464&key=8219338422e1b5d6f87a986c6c257697`"
							mode="widthFix">
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div>
            <span class="apply-text">选择意向分发商户分类领域</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div>
            <!-- <my-combobox class="!w-full" @select="(e)=>{console.log(e)}"></my-combobox> -->
            <Select v-model="placeData.classificationDomain">
              <SelectTrigger id="framework" class="w-full px-3 py-2 rounded-[4px]">
                <SelectValue placeholder="餐饮、美发" class="apply-text" />
              </SelectTrigger>
              <SelectContent position="popper" class="max-h-[300px]">
                <SelectItem v-for="item in CategoryDict" :value="item.value"> {{ item.name }}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div class="mt-3 mb-4">
          <div class="apply-text">附近分发商列表</div>
          <div class="danger-text">
            设置意向后平台优先选择意向商户推荐，再推荐意向分类下的商户，如意向商户未接您的订单将由意向分类下的商户进行接单
          </div>
        </div>
        <div class="px-5 py-4 table-border">
          <div v-for="(item, index) in 4">
            <div class="flex gap-4">
              <div class="w-12 h-12"><img src="" class="w-full h-full" /></div>
              <div class="flex-1 flex flex-col justify-between">
                <div class="flex justify-between">
                  <div class="flex gap-2">
                    <div class="table-title">莆田卤面</div>
                    <div class="px-2 bg-[rgba(255,160,36,0.10)] rounded-full">
                      <span class="text-[12px] text-[#FFA024] leading-3 font-[500]">餐饮</span>
                    </div>
                  </div>
                  <div class="flex gap-2 items-center">
                    <div>意向</div>
                    <Switch  @update:checked="setVendor(index)"/>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div class="flex items-center">
                    <div class="muted-text">接单数：</div>
                    <div class="text">3</div>
                  </div>
                  <div class="flex items-center">
                    <div class="muted-text">日均分发：</div>
                    <div class="text">3</div>
                  </div>
                  <div class="flex items-center">
                    <div class="muted-text">倾向分发行业：</div>
                    <div class="text">3</div>
                  </div>
                  <div class="flex items-center">
                    <div class="muted-text">地址：</div>
                    <div class="text">3</div>
                  </div>
                </div>
              </div>
            </div>
            <Separator v-if="index !== 3" class="my-4" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5 my-4">
          <div>
            <span class="apply-text">截止时间</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div>
            <MyDate @check="getTime"></MyDate>
          </div>
          <div>
            <span class="danger-text !text-[#666666]">广告定制商物料生产</span><span class="danger-text">交付周期为4天</span>
            <span class="danger-text !text-[#666666]">，从广告制作商</span><span class="danger-text">快递到各广告分发商需要3天</span>
            <span class="danger-text !text-[#666666]">，如果今天</span><span class="danger-text">{{ $dayjs().format('YYYY-MM-DD') }}</span>
            <span class="danger-text !text-[#666666]">下单，预计</span><span class="danger-text">{{ $dayjs().add(3,'day').format('YYYY-MM-DD') }}</span>
            <span class="danger-text !text-[#666666]">物料会分发到广告分发商哪里。</span>
          </div>
        </div>
        <Separator class="my-4" />
        <div class="flex flex-col gap-1.5 my-4">
          <div>
            <span class="apply-text">投放条件</span>
          </div>
          <RadioGroup v-model="rulenumber" default-value="0"
            @update:model-value="(e) => placeData.targetedCondition = ruleList[rulenumber]" class="flex flex-col gap-1.5">
            <div class="table-border bg-[#F6F7F9] px-5 py-4">
              <div class="flex justify-between">
                <div class="flex items-center gap-2">
                  <RadioGroupItem class="rounded-[4px]" :value="0" />
                  <div class="apply-text !font-[500]">无条件投放</div>
                </div>
                <div class="danger-text">每成功投放一次，收取1元</div>
              </div>
            </div>
            <div class="table-border bg-[#F6F7F9] px-5 py-4">
              <div class="flex justify-between">
                <div class="flex items-center gap-2">
                  <RadioGroupItem class="rounded-[4px]" :value="1" />
                  <div class="apply-text !font-[500]">符合任意一个条件投放</div>
                </div>
                <div class="danger-text">任意符合其中一个条件加价0.5元，总价1.5元</div>
              </div>
              <Separator class="my-4" v-if="rulenumber === 1" />
              <div class="flex gap-2" v-if="rulenumber === 1">
                <div class="bg-[rgba(34,119,255,0.08)] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                  <img src="/public/img/other/add.png" class="w-4 h-4" />

                  <div class="text !text-[#2277FF]" @click="addrules(1)">添加条件</div>
                </div>
                <div v-for="(item, index) in ruleList[1]" :key="index"
                  class="bg-[#EEEEEE] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                  <div class="muted-text">{{ item }}</div>
                  <Lucide icon="X" class="w-4 h-4" color="#AAAAAA" @click="delrule(1, index)"></Lucide>
                </div>
              </div>
            </div>
            <div class="table-border bg-[#F6F7F9] px-5 py-4">
              <div class="flex justify-between">
                <div class="flex items-center gap-2">
                  <RadioGroupItem class="rounded-[4px]" :value="2" />
                  <div class="apply-text !font-[500]">符合任意二个条件投放</div>
                </div>
                <div class="danger-text">任意符合其中一组条件加价0.9元，总价1.9元</div>
              </div>
              <Separator class="my-4" v-if="rulenumber === 2" />
              <div class="flex gap-2" v-if="rulenumber === 2">
                <div class="bg-[rgba(34,119,255,0.08)] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                  <img src="/public/img/other/add.png" class="w-4 h-4" />

                  <div class="text !text-[#2277FF]" @click="addrules(2)">添加条件</div>
                </div>
                <div v-for="(item, index) in ruleList[2]" :key="index"
                  class="bg-[#EEEEEE] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                  <div class="muted-text">{{ item }}</div>
                  <Lucide icon="X" class="w-4 h-4" color="#AAAAAA" @click="delrule(2, index)"></Lucide>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
      <h1 class="title">确认订单信息</h1>
      <MyTable :tableItem="ProductInfo"></MyTable>
      <div class="py-4">
        <div class="gap-3 flex flex-col items-end">
          <div class="flex gap-2">
            <div class="muted-text">产品总价：</div>
            <div class="text w-24 text-right">￥20.00</div>
          </div>
          <div class="flex gap-2">
            <div class="muted-text">样品费：</div>
            <div class="text w-24 text-right">￥{{ sampleFee }}</div>
          </div>

          <div class="flex gap-2 items-center">
            <Lucide icon="CircleHelp" color="#AAAAAA" class="w-4 h-4"></Lucide>
            <div class="muted-text">寄样物流费：</div>
            <div class="text w-24 text-right">￥{{ sampleExpressFee }}</div>
          </div>
          <div class="flex gap-2">
            <div class="muted-text">广告投放费：</div>
          <div class="text w-24 text-right">￥{{ placeFee }}</div>
          </div>
          <div class="flex gap-2">
            <div class="muted-text">物流费用：</div>
            <div class="text w-24 text-right">￥{{ expressFee||0}}</div>
          </div>
        </div>
      </div>
      <Separator />

      <div class="flex justify-end mt-4 items-center">
        <div class="title !text-[14px] !leading-[20px]">订单合计：</div>
        <div class="total-number ml-2 pl-3">￥{{ totalAmount }}</div>
      </div>
    </div>
  </div>
  <div class="fixed left-0 right-0 bottom-0 bg-white h-16 flex justify-center items-center px-8">
    <div class="w-full lg:w-[980px] xl:w-[1280px] flex justify-end items-center">
      <div class="apply-text">合计(含运费,投放费)：</div>
      <div class="number !text-[18px]">￥{{  totalAmount }}</div>
      <Button class="ml-6" @click="sendOrder">提交订单</Button>
    </div>
  </div>
  <MyDrawer v-model="isShow">
    <MyFormRule :rulenumber="rulenumber" @finish="add" @close="closepop"></MyFormRule>
  </MyDrawer>
  <!-- 地址选择弹窗 -->
  <MyDrawer v-model="isShow2">
    <MyAddress @finish="setDeliveryAddress" @cancel="isShow2=false"></MyAddress>
  </MyDrawer>
</template>
<script setup>
import MyDate from '@/components/my-date/radio.vue';
import MyDrawer from '@/components/drawer/index.vue';
import { addOrder } from '@/server/apis/modelorder/index.js';
import {getCategoryDict} from '@/server/apis/dict/index.js';
import { toast } from '~/components/ui/toast';
import {getProductDetail} from '@/server/apis/product/index.js';
import { getMaterialTemplateDetail } from '@/server/apis/template/material.js';
import { useDetail } from '@/hooks/useDetail';
import {getMapAddress} from '@/server/apis/map/index.js';
import {getMaterialWorkDetail} from '@/server/apis/works/material.js'
import MyTable from '@/components/my-table/material/config.vue';
const emit = defineEmits(['change']);
const route = useRoute();
const MaterialDetailparams = reactive({});
const Materialdetail = useDetail(getMaterialTemplateDetail, MaterialDetailparams);
//基础表单数据
const FormData = ref({
  amount: 120,
  config: {"数量": "500张", "材料": "铜版纸300g-不覆膜", "规格": "900X54mm", "价格/元": "10"},
  content: {},
  deadline: null,
  harvestAddress:null,
  isSendSample: 1,
  isVideoSendSample: 1,
  orderName: "卡片",
  quantity:0,
  productId: 2,
  productName: "商务卡片",
  remarks: "备注",
  selfIssuedQuantity: 0,
  sampleAddress: "厦门软件园",
  templateId: 21,
  specificationId:1,
  unit: "张",
  //印刷厂id，再下单前设计器获取
  vendorId: 1,
  workId: route.query.id,
});
const workInfo = ref({});
//投放数据
const placeData = ref({
  deadline: null,
  merchantsNumber: null,
  quantity:0,
  classificationDomain:1,
  releaseArea: "厦门市思明区",
  targetedCondition:[],
  latitude:118.082745,
  longitude:24.445676,
  //分发商id
  vendorIds: [],
});
//总数据
const totalData = ref({});
//地址经纬度
const position=ref('118.082745,24.445676');
//弹窗展示
const isShow = ref(false);
//地址弹窗展示
const isShow2 = ref(false);
//收货地址
const deliveryAddress=ref({
  name:null,
  address:null
});
//是否投放
const isPlace = ref(1);
//投放条件
const rulenumber = ref(0);
//投放领域字典
const CategoryDict=ref(null);

const ruleList = ref([[], ['adad', 'testtsd'], ['adad', 'teste']]);
//获取时间
const getTime = (e) => {
  placeData.value.deadline = e;
};
const productDetail=ref(null);
//设置表格商品数据
const ProductInfo = reactive({
        cover:'https://tse3-mm.cn.bing.net/th/id/OIP-C.a0j9chzsOquc9MyjXpNB-gHaEo?w=206&h=187&c=7&r=0&o=5&pid=1.7',
        name:'卡片',
        id:9999,
        config:'100*100',
        price:100
 });
//设置收获地址
const setDeliveryAddress=(e)=>{
  deliveryAddress.value.address=e.address;
  deliveryAddress.value.name=e.name;
  FormData.value.harvestAddress=e.address;
  isShow2.value=false;
}
//查询地址
const searchAddress = async () => {
let data=await getMapAddress(placeData.value.releaseArea);
 console.log(data.data)
 position.value= data.data.geocodes[0].location;
 let array=position.value.split(',');

}
//设置分发商
const setVendor = (data) => {
  placeData.value.vendorIds;
  if (!placeData.value.vendorIds.includes(data)) {
  placeData.value.vendorIds.push(data);
} else {
  placeData.value.vendorIds.splice(placeData.value.vendorIds.indexOf(data), 1);
}
}
const delrule = (id, index) => {
  ruleList.value[id].splice(index, 1);
};
const addrules = (number) => {
  isShow.value = true;
  rulenumber.value = number;
};
const closepop = () => {
  isShow.value = false;
};
const add = (e) => {
  isShow.value = false;
  console.log(e)
  ruleList.value[e.number].push(e.data);
};
const BeforeSend = () => {
  if (isPlace.value) {
    totalData.value = { ...FormData.value, ...placeData.value };
  } else {
    totalData.value =FormData.value;
  }
}
const sendOrder = async () => {
  BeforeSend();
  try {
    let { orderId,orderReleaseId } = await addOrder(totalData.value);
    let id=orderId||orderReleaseId;
    emit('change', id);
  }
  catch (e) {
    toast({
      title: e
    })
  }

};
const getProductInfo=async ()=>{
  workInfo.value = await getMaterialWorkDetail({ id: Number(route.query.id) });
  ProductInfo.cover = workInfo.value.cover;
  ProductInfo.name = workInfo.value.name;
  ProductInfo.id = workInfo.value.id;
  ProductInfo.config = workInfo.value.specification['材料'];
  ProductInfo.price = workInfo.value.specification['价格/元'];
}
const init = async () => {
  getProductInfo();
  MaterialDetailparams.id = route.query.templateId;
  await Materialdetail.getDetail();
  //产品信息
  productDetail.value=await getProductDetail({id:Materialdetail.detail.data.productTypeId})
  FormData.value.productName=Materialdetail.detail.data.name;
  FormData.value.orderName=Materialdetail.detail.data.name;
  CategoryDict.value=await getCategoryDict();
  console.log(CategoryDict.value)
}
onMounted(() => {
  init()
});
//样品费
const sampleFee=computed(()=>{
  return FormData.value.isSendSample?productDetail.value?.sampleSendFee:0
})
//样品运费
const sampleExpressFee=computed(()=>{
  return FormData.value.isSendSample?productDetail.value?.samplePrice:0

})
//设置运费
const expressFee=computed(()=>{
  return placeData.value.merchantsNumber*productDetail.value?.expressFeeBase;
})
//设置投放费
const placeFee=computed(()=>{
  if(!isPlace.value){
    return 0;
    console.log("测试")
  }else{

  }
  if(rulenumber.value===2){
    return placeData.value.quantity*1.9
  }else if(rulenumber.value===1){
    return placeData.value.quantity*1.5
  }else{
    return placeData.value.quantity
  }
})
//设置总价格
const totalAmount=computed(()=>{
  return 20+expressFee.value+placeFee.value+sampleFee.value+sampleExpressFee.value||20;
});
//投放条件选择
</script>
<style scoped>
.address-text {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  color: #ffffff;
  line-height: 22px;
}

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

.danger-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #ff5030;
  line-height: 20px;
}

.number {
  font-size: 24px;
  font-family:
  Arial,
  Arial-Regular;
  color: #333333;
  line-height: 32px;
}

.table-border {
  border: 1px solid #eeeeee;
  border-radius: 4px;
}

.table-title {
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 600;
  color: #333333;
  line-height: 24px;
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

.input-text {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #2277ff;
  line-height: 20px;
}

.total-number {
  font-size: 20px;
  font-family: Arial,Arial-Regular;
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
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
</style>
