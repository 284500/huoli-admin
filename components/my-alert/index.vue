<template>
<Transition>
 <Alert :variant="isError?'destructive':''" class="alert z-[9999999]" v-if="isShow">
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>{{ options.title }}</AlertTitle>
    <AlertDescription>
     {{ options.message }}
    </AlertDescription>
  </Alert>
</Transition>
</template>
<script setup>
const props = defineProps({
  title:{
    type:String,
    default:'Error'
  },
  message:{
    type:String,
    default:'Your session has expired. Please log in again.'
  },
  isError:{
    type:Boolean,
    default:false
  }
});
const options=reactive({
  title:'Error',
  message:'Your session has expired. Please log in again.',
  isError:false,
  duration:2000
})
const isShow=ref(false);
const AlertShow=({title,data,duration})=>{
  options.title=title;
  isShow.value=true;
  setTimeout(()=>{
    isShow.value=false;
  },2000)
};
defineExpose({AlertShow});
</script>
<style scope>
.alert{
  position:fixed;
  left:50%;
  top:3%;
  transform:translateX(-50%);
  z-index:100000;
  width:fit-content;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  top:-10%;
}
</style>
