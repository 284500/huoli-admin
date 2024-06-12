<template>
  <div class="bg-white rounded-[8px] md:px-10 md:py-8 p-4">
    <div class="w-full lg:w-[500px]">
      <div class="title">添加投放条件</div>
      <div class="flex  gap-4 mt-5 items-center">
        <div class="apply-text !w-[80px]">性别</div>
        <div class="flex justify-between items-center flex-1">
          <RadioGroup v-model="rules.sex" :orientation="'vertical'" class="flex gap-4">
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="r2" value="男" />
              <Label for="r2">男</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="r3" value="女" />
              <Label for="r3">女</Label>
            </div>
          </RadioGroup>
          <Button @click="clearsex">清空</Button>
        </div>
      </div>
      <div class="flex  gap-4 mt-5 items-center">
        <div class="apply-text !w-[80px]">是否新用户</div>
        <div class="flex justify-between items-center flex-1">
          <RadioGroup v-model="rules.isNewUser" default-value="comfortable" :orientation="'vertical'"
            class="flex gap-4 items-center">
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="r1" value="老用户" />
              <Label for="r1">老用户</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="r2" value="新用户" />
              <Label for="r2">新用户</Label>
            </div>
          </RadioGroup>
          <Button @click="clearUser">清空</Button>
        </div>
      </div>
      <div class="flex  gap-4 mt-5 items-center">
        <div class="apply-text !w-[80px] flex-shrink-0">订单单价</div>
        <div class="flex items-center gap-2">
          <Input type="number" placeholder="最低价" v-model="rules.price[0]" /><span>元,</span><Input type="number"
            placeholder="最高价" v-model="rules.price[1]" />元
        </div>
      </div>
      <div class="flex  gap-4 mt-5 items-center">
        <div class="apply-text !w-[80px] flex-shrink-0">位置信息</div>
        <div class="flex items-center gap-2 flex-1">
          <Input type="email" placeholder="发布范围" class="w-full" v-model="rules.address" />
        </div>
      </div>
      <div class="w-full h-8">
        <div class="w-full text-left text-[16px] mt-2 text-[#f15533]" v-if="existed.type">{{ existed.data }}</div>
      </div>
      <div class="flex justify-around">
        <Button class="mt-4 mr-8" @click="addrules">确认添加</Button>
        <Button class="mt-4" variant="outline" @click="emit('close')">取消保存</Button>
      </div>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  rulenumber: {
    type: Number,
    default: 2
  }
})
const rules = ref({
  sex: '',
  isNewUser: '',
  price: [],
  address: '',
});
const existed = ref({
  type:false,
  data:''
});
const emit = defineEmits(['finish', 'close']);
function countNotEmptyProperties(obj) {
  return Object.keys(obj).filter(key => obj[key] !== '' && obj[key].length !== 0).length;
}
function concatProperties(obj) {
  let result = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (typeof value === 'string' && value !== "") {
        result += value + "&";
      } else if (Array.isArray(value) && value.length > 0) {
        let arrayValue = value.map(item => item + "元").join("-");
        result += arrayValue + "&";
      }
    }
  }
  return result.slice(0, -1);
}
const clearsex = () => {
  rules.value.sex = '';
}
const clearUser = () => {
  rules.value.isNewUser = '';
}
const addrules = () => {
  if (props.rulenumber !== countNotEmptyProperties(rules.value)) {
    existed.value.type = true;
    existed.value.data=`投放条件必须为${props.rulenumber}项`;

    setTimeout(() => {
      existed.value.type = false
    }, 2000)
  } else {
    const data = concatProperties(rules.value);
    emit('finish', {number:props.rulenumber,data});
  }
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
}</style>
