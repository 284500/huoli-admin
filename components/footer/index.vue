<template>
  <div><Separator />
  <div class="w-full flex flex-col items-center py-8">
    <div class="flex py-2 lg:gap-20 md:gap-10 flex-wrap gap-4 justify-between">
      <div>
        <div class="title">系列产品</div>
        <div class="label">发发单分发小程序</div>
        <div class="label">下线趣消花金兑换小程序</div>
      </div>
      <div>
        <div class="title">服务</div>
        <div class="label">帮助中心</div>
        <div class="label">反馈与建议</div>
      </div>
      <div>
        <div class="title">关于</div>
        <div class="label">关于我们</div>
        <div class="label">隐私政策</div>
        <div class="label">社会责任</div>
      </div>
      <div>
        <div class="title">合作</div>
        <div class="label">生产商合作</div>
      </div>
      <div>
        <div class="title">联系我们</div>
        <div class="phone">400 168 1621</div>
        <div class="label">服务时间：09:00-18:00</div>
      </div>
    </div>
    <div class="beian">
      Copyright ©2010-2010 厦门或黎科技有限公司 版权所有 闽ICP备100***518号-1
      增值电信业务经营许可证：闽B1-2014032379闽公网安备案 3301043400173号
    </div>
  </div></div>
</template>
<script setup></script>
<style scoped lang="scss">
.beian {
  font-size: 12px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: Regular;
  text-align: center;
  color: #999999;
  line-height: 20px;
  margin-top: 4px;
}
.title {
  @apply font-medium  mb-3;
  height: 24px;
  font-size: 16px;
  font-family:
    PingFang SC,
    PingFang SC-Medium;
  color: #333333;
  line-height: 24px;
  margin-top: 4px;
}
.label {
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  margin-bottom: 8px;
}
.phone {
  width: 142px;
  font-size: 24px;
  font-family: DINPro, DINPro-Bold;
  @apply font-bold;
  color: #2277ff;
  line-height: 32px;
  white-space: nowrap;
}
</style>
