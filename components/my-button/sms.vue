<template>
<Button class="h-full px-3 max-w-[120px] !text-[#333333]" variant="outline" :disabled="state.countDownIng" >
{{state.countDownIng?`(${state.countDownTime}s)后重新获取` : '获取验证码'}}
</Button>
</template>
<script setup>
const state = reactive({
  countDownTime: 60,
  timer: null,
  countDownIng: false,
})
const countDown = () => {

  let startTime = localStorage.getItem('startTimeLogin');
  let nowTime = new Date().getTime();
  if (startTime) {
    let surplus = 60 - parseInt((nowTime - startTime) / 1000, 10);
    state.countDownTime = surplus <= 0 ? 0 : surplus;
  } else {
    state.countDownTime = 60;
    localStorage.setItem('startTimeLogin', nowTime);
  }

  state.timer = setInterval(() => {
    state.countDownTime--;
    state.getCodeDisabled = true;
    state.countDownIng = true;
    if (state.countDownTime <= 0) {
      localStorage.removeItem('startTimeLogin');
      clearInterval(state.timer);
      state.countDownTime = 60;
      state.countDownIng = false;
    }
  }, 1000)
};
defineExpose({countDown});
onMounted(() => {
  let sendEndTime = localStorage.getItem('startTimeLogin');
  if (sendEndTime) {
    state.countDownIng = true;
    countDown();
  }
});
</script>
