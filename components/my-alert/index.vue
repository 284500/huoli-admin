<template>
<Transition>
 <Alert :variant="isError?'destructive':''" class="alert " v-if="isShow">
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>{{ title }}</AlertTitle>
    <AlertDescription>
     {{ message }}
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
const isShow=ref(false);
const AlertShow=()=>{
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
  top:-20%
}
</style>
