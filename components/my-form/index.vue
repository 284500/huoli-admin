<template>
  <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
    <div class="w-full lg:w-[640px]">
      <div class="title">收货地址</div>
      <div class="flex flex-col gap-4 mt-5">

        <div class="flex  gap-3 items-center">
          <MySwitch v-model="address.isDefault" id="airplane-mode"></MySwitch>
          <Label for="airplane-mode" class="apply-text">设置为默认地址</Label>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 ">
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">国家</span></div>
            <div>
              <Select v-model="address.country">
                <SelectTrigger  class="w-full px-3 py-2 rounded-[4px]">
                  <SelectValue placeholder="请选择国家" class="apply-text" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="中国">中国</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">手机号</span></div>
            <div>
              <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="address.phone" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">所在地区</span></div>
          <div class="grid grid-cols-3 gap-3">
            <MySelectAddress @finish="setAddress"></MySelectAddress>
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">收货人</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="address.consignee" />
          </div>
        </div>
        <div class="flex flex-col gap-1.5">
          <div><span class="apply-text">详细地址</span></div>
          <div>
            <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="address.address" />
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">邮编</span></div>
            <div>
              <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="address.postcode" />
            </div>
          </div>
          <div class="flex flex-col gap-1.5">
            <div><span class="apply-text">固定电话</span></div>
            <div>
              <Input type="text" placeholder="请输入" class=" w-full rounded-[4px]" v-model="address.mobile" />
            </div>
          </div>
        </div>
      </div>
      <Button class="mt-4 mr-8" @click="emit('finish', address)">提交地址</Button>
      <Button class="mt-4" variant="outline" @click="emit('close')">取消保存</Button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {
      country: '',
      province: '',
      city: '',
      county: '',
      consignee: '',
      address: '',
      postcode: '',
      mobile: '',
      phone: '',
      isDefault: 0
    }
  }
});
const emit = defineEmits(['finish', 'close']);
const address = props.data;
const setAddress=(e)=>{
  address.province=e.province;
  address.city=e.city;
  address.county=e.country;
};
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
}
</style>
