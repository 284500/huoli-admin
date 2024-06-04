<template>
  <div class="flex flex-col gap-4 mt-3">
    <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
      <h1 class="title">投放配置</h1>
      <div class="flex gap-10 mt-5 mb-4">
        <div class="flex gap-2 items-center">
          <Label for="isPlace">是否选择分发</Label>
          <Switch id="isPlace" v-model:checked="isPlace" />
        </div>
        <div class="flex gap-2 items-center">
          <Label for="isMail">是否寄样</Label>
          <Switch id="isMail" />
        </div>
        <div class="flex gap-2 items-center">
          <Label for="isComfirmation">是否可视频确认样品</Label>
          <Switch id="isComfirmation" />
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
            <Lucide icon="ChevronRight" color="#CCCCCC" class="h-5 w-5"></Lucide>
          </div>
        </div>
        <div><img src="/public/img/address/chevron.png" alt="" /></div>
        <div class="border-[1px] border-[#eeeeee] rounder-[4px] flex justify-between items-center p-4 flex-1">
          <div class="flex items-center">
            <div
              class="w-8 h-8 address-text overflow-hidden flex justify-center items-center mr-3 rounded-full bg-[#FFA024]">
              收
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
            <Lucide icon="ChevronRight" color="#CCCCCC" class="h-5 w-5"></Lucide>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-4 grid-cols-2 lg:gap-x-10 gap-x-5 gap-y-4 mt-6 mb-3">
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">选择自行分发</span></div>
          <div class="relative">
            <div class="absolute right-3 top-0 bottom-0 flex items-center apply-text">张</div>

            <Input type="text" placeholder="请输入" class="w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div>
            <span class="apply-text">广告分发总数</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div class="relative">
            <div class="absolute right-3 top-0 bottom-0 flex items-center apply-text">张</div>
            <Input type="text" placeholder="请输入" class="w-full rounded-[4px]" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5 col-span-2">
          <div>
            <span class="apply-text">分发商户数</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div class="flex gap-2 items-center">
            <Input type="text" placeholder="请输入" class="flex-1 rounded-[4px]" /><span class="apply-text">每</span>
            <Input type="text" placeholder="请输入" class="flex-1 rounded-[4px]" /><span class="apply-text">为一份</span>
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
            <Input type="text" placeholder="请输入" class="w-full rounded-[4px]" />
          </div>
          <div class="w-full h-[240px] bg-[#D8D8D8] mt-3.5 mb-6"><img /></div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div>
            <span class="apply-text">选择意向分发商户分类领域</span><span class="text-[#FF5030] ml-[2px] pt-2">*</span>
          </div>
          <div>
            <Select>
              <SelectTrigger id="framework" class="w-full px-3 py-2 rounded-[4px]">
                <SelectValue placeholder="餐饮、美发" class="apply-text" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="车上"> 车上 </SelectItem>
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
                    <Switch />
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
            <MyDate></MyDate>
          </div>
          <div>
            <span class="danger-text !text-[#666666]">广告定制商物料生产</span><span class="danger-text">交付周期为4天</span>
            <span class="danger-text !text-[#666666]">，从广告制作商</span><span class="danger-text">快递到各广告分发商需要3天</span>
            <span class="danger-text !text-[#666666]">，如果今天</span><span class="danger-text">2024-4-21</span>
            <span class="danger-text !text-[#666666]">下单，预计</span><span class="danger-text">2024-4-29</span>
            <span class="danger-text !text-[#666666]">物料会分发到广告分发商哪里。</span>
          </div>
        </div>
        <Separator class="my-4" />
        <div class="flex flex-col gap-1.5 my-4">
          <div>
            <span class="apply-text">投放条件</span>
          </div>
          <RadioGroup v-model="rulenumber" default-value="default" class="flex flex-col gap-1.5">
          <div class="table-border bg-[#F6F7F9] px-5 py-4">
            <div class="flex justify-between">
              <div class="flex items-center gap-2">
                <RadioGroupItem class="rounded-[4px]"  :value="0" />
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
            <Separator class="my-4"  v-if="rulenumber===1" />
            <div class="flex gap-2" v-if="rulenumber===1">
              <div class="bg-[rgba(34,119,255,0.08)] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                <img src="/public/img/other/add.png" class="w-4 h-4" />

                <div class="text !text-[#2277FF]" @click="addrules(1)">添加条件</div>
              </div>
              <div v-for="(item, index) in ruleList[0]" :key="index"
                class="bg-[#EEEEEE] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                <div class="muted-text">{{ item }}</div>
                <Lucide icon="X" class="w-4 h-4" color="#AAAAAA" @click="delrule(0, index)"></Lucide>
              </div>
            </div>
          </div>
          <div class="table-border bg-[#F6F7F9] px-5 py-4">
            <div class="flex justify-between">
              <div class="flex items-center gap-2">
                <RadioGroupItem class="rounded-[4px]"  :value="2" />
                <div class="apply-text !font-[500]">符合任意二个条件投放</div>
              </div>
              <div class="danger-text">任意符合其中一组条件加价0.9元，总价1.9元</div>
            </div>
            <Separator class="my-4" v-if="rulenumber===2"/>
            <div class="flex gap-2" v-if="rulenumber===2">
              <div class="bg-[rgba(34,119,255,0.08)] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                <img src="/public/img/other/add.png" class="w-4 h-4" />

                <div class="text !text-[#2277FF]" @click="addrules(2)">添加条件</div>
              </div>
              <div v-for="(item, index) in ruleList[1]" :key="index"
                class="bg-[#EEEEEE] flex justify-center items-center rounded-full gap-1 px-3 py-1.5">
                <div class="muted-text">{{ item }}</div>
                <Lucide icon="X" class="w-4 h-4" color="#AAAAAA" @click="delrule(1, index)"></Lucide>
              </div>
            </div>
          </div></RadioGroup>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
      <h1 class="title">确认订单信息</h1>
      <Table>
        <TableHeader>
          <TableRow class="!bg-[#f9fafb]">
            <TableHead v-for="(item, index) in tableTitle" class="muted-text">
              {{ item }}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="flex items-center">
              <div class="flex">
                <div class="flex items-center"><img class="w-12 h-12"  :src="Materialdetail.detail.data.templateCover" />
                </div>
                <div class="ml-2">
                  <div class=" table-title !font-[500] mb-1">{{ Materialdetail.detail.data.name }}</div>
                  <div class="text-sm !text-[12px]  text-[#999999]">{{ }}</div>
                  <div class="text-sm !text-[12px] text-[#999999]">产品ID:{{Materialdetail.detail.data.materialDesign?.emplateId }}</div>
                </div>
              </div>
            </TableCell>
            <TableCell class="text">{{Materialdetail.detail.data.materialDesign?.specification}}</TableCell>
            <TableCell>1</TableCell>
            <TableCell class="text sm:!w-[240px]">
              ￥{{ 23 }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div class="py-4">
        <div class="gap-3 flex flex-col items-end">
          <div class="flex gap-2">
            <div class="muted-text">产品总价：</div>
            <div class="text w-24 text-right">￥20.00</div>
          </div>
          <div class="flex gap-2">
            <div class="muted-text">样品费：</div>
            <div class="text w-24 text-right">￥20.00</div>
          </div>

          <div class="flex gap-2 items-center">
            <Lucide icon="CircleHelp" color="#AAAAAA" class="w-4 h-4"></Lucide>
            <div class="muted-text">寄样物流费：</div>
            <div class="text w-24 text-right">￥20.00</div>
          </div>

          <div class="flex gap-2">
            <div class="muted-text">广告投放费：</div>
            <div class="text w-24 text-right">￥20.00</div>
          </div>
          <div class="flex gap-2 items-center">
            <Lucide icon="CircleHelp" color="#AAAAAA" class="w-4 h-4"></Lucide>

            <div class="muted-text">钱包原有款：</div>
            <div class="text w-24 text-right !text-[#FF5030]">-￥20.00</div>
          </div>
          <div class="flex gap-2">
            <div class="muted-text">物流费用：</div>
            <div class="text w-24 text-right">￥20.00</div>
          </div>
        </div>
      </div>
      <Separator />

      <div class="flex justify-end mt-4 items-center">
        <div class="title !text-[14px] !leading-[20px]">订单合计：</div>
        <div class="total-number ml-2 pl-3">￥270.00</div>
      </div>
    </div>
  </div>
  <div class="fixed left-0 right-0 bottom-0 bg-white h-16 flex justify-center items-center px-8">
    <div class="w-full lg:w-[980px] xl:w-[1280px] flex justify-end items-center">
      <div class="apply-text">合计(含运费,投放费)：</div>
      <div class="number !text-[18px]">￥270.00</div>
      <Button class="ml-6" @click="sendOrder">提交订单</Button>
    </div>
  </div>
  <MyDrawer v-model="isShow">
    <MyFormRule :rulenumber="rulenumber" @finish="add" @close="closepop"></MyFormRule>
  </MyDrawer>
</template>
<script setup>
import MyDate from '@/components/my-date/date.vue';
import MyDrawer from '@/components/drawer/index.vue';
import { addOrder } from '@/server/apis/modelorder/index.js';
import { toast } from '~/components/ui/toast';
import { getMaterialTemplateDetail } from '@/server/apis/template/material.js';
import { useDetail } from '@/hooks/useDetail';
const emit = defineEmits(['change']);
const route = useRoute();
const MaterialDetailparams = reactive({});
const Materialdetail = useDetail(getMaterialTemplateDetail, MaterialDetailparams);
const TabItems = ref([
  {
    id: 1,
    remarks: 'Alice',
    isShelves: 1,
    selected: false,
    productType: '名片',
  },
]);
const tableTitle = ref(['浙江印刷厂订单', '规格参数', '数量', '金额'])
//基础表单数据
const FromData = reactive({
  amount: 240,
  classificationDomain: "velit anim non occaecat",
  config: "anim non",
  content: {},
  deadline: 1868686868,
  harvestAddress: "tempor",
  isSendSample: 1,
  merchantsNumber: 1,
  orderName: "laborum tempor",
  productId: 2,
  productName: "ut aute",
  quantity: 12,
  releaseArea: "sint",
  remarks: "ut dolor esse",
  sampleAddress: "ad ut consequat esse nulla",
  selfIssuedQuantity: 12,
  targetedCondition: "et sunt eu Lorem ex",
  templateId: 21,
  unit: "quis ullamco anim",
  vendorId: 1,
  vendorIds: [
    1
  ],
  workId: 1
})
//投放数据
const placeData = ref({});
//弹窗展示
const isShow = ref(false);
//是否投放
const isPlace = ref(true);
//投放条件
const rulenumber = ref(0);
const ruleList = ref([['adad', 'testtsd'], ['adad', 'teste']]);
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
const sendOrder = async () => {
  try {
    await addOrder(FromData);
    emit('change');
  }
  catch (e) {
    toast({
      title: e
    })
  }

};
const init = async () => {
  MaterialDetailparams.id = route.query.templateId;
  await Materialdetail.getDetail();
}
onMounted(() => {
  init()
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
  font-family: Arial, Arial-Regular;
  font-weight: 400;
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
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
</style>
