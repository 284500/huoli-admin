
<template>
  <Select v-model="address.selectProvince" class="w-[240px]" @update:modelValue="filterProvince">
    <SelectTrigger class="w-[120px] px-3 py-2 !rounded-none !rounded-l-[4px]" v-bind="$attrs">
      <SelectValue placeholder="省份" />
    </SelectTrigger>
    <SelectContent position="popper">
      <SelectItem v-for="(item, index) in address.provinces" :key="index" :value="item.label">{{ item.label }}</SelectItem>
    </SelectContent>
  </Select>
  <Select v-model="address.selectCity" class="w-[240px]" @update:modelValue="filterCity">
    <SelectTrigger class="w-[120px] px-3 py-2 !rounded-none !rounded-l-[4px]" v-bind="$attrs">
      <SelectValue placeholder="省份" />
    </SelectTrigger>
    <SelectContent position="popper">
      <SelectItem v-for="(item, index) in address.cities" :key="index" :value="item.label">{{ item.label }}</SelectItem>
    </SelectContent>
  </Select>
  <Select v-model="address.selectArea" class="w-[240px]" @update:modelValue="filterCounty">
    <SelectTrigger class="w-[120px] px-3 py-2 !rounded-none !rounded-l-[4px]" v-bind="$attrs">
      <SelectValue placeholder="省份" />
    </SelectTrigger>
    <SelectContent position="popper">
      <SelectItem v-for="(item, index) in address.area" :key="index" :value="item.label">{{ item.label }}</SelectItem>
    </SelectContent>
  </Select>
</template>
<script setup>
import { regionData } from "element-china-area-data";
const props = defineProps({
});
const address = reactive({
  provinces: regionData,
  cities: [],
  area: [],
  selectProvince: "",
  selectCity: "",
  selectArea: "",
})
const emit = defineEmits(['finish']);
const filterProvince = () => {
  address.selectCity=null;
  address.selectArea=null;
  let cityItem = address.provinces.filter(
        (item) => item.label === address.selectProvince
      );
  if (cityItem[0]) {
        address.cities = cityItem[0].children;
   }
}
const filterCity = () => {
  address.selectArea=null;
  let areaItem = address.cities.filter(
        (item) => item.label === address.selectCity
      );
      if (areaItem[0]) {
        address.area= areaItem[0].children;
      }
};
const filterCounty = () => {
  emit('finish', {provide: address.selectProvince, city: address.selectCity, area: address.selectArea})
 };
</script>
