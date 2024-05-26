<template>
  <div class="w-full flex flex-col items-center">
        <Separator class="my-10" />
        <div class="w-full xl:w-[1000px]">
          <div class="flex flex-col items-center gap-6">
            <h1 class="title">发发单广告投放协议</h1>
            <div class="w-full flex flex-col md:gap-8 gap-4">
              <div class="text">
                <div>一、合同主体与基本信息</div>
                <div>合同标题：明确为“广告定制与投放协议”或类似表述。</div>
                <div>签约方（甲方与乙方）：</div>
                <div>
                  甲方（广告主）：详细列明甲方名称、法定代表人（如有）、地址、联系方式等信息。
                </div>
                <div>
                  乙方（广告服务提供商）：详细列明乙方名称、法定代表人（如有）、地址、联系方式等信息。
                </div>
              </div>
              <div class="text">
                <div>二、广告服务内容与定制要求</div>
                <div>
                  广告类型与形式：明确广告的种类（如视频、图文、音频、户外广告等）及其具体展现形式。
                </div>
                <div>
                  广告创意与内容：描述广告的主题、创意概念、文案、视觉元素、配音配乐等定制要求，或附上详细的设计制作指南。
                </div>
                <div>
                  广告素材提交与审批：规定甲方提交广告素材的时间、格式要求，以及乙方审核、修改、最终确认的流程。
                </div>
              </div>
              <div class="text">
                <div>三、广告投放细节</div>
                <div>
                  投放平台与位置：详细说明广告将投放于哪些媒体平台（如电视、网络、户外、社交媒体等）及具体位置（如网页版位、时间段、频道、区域等）。
                </div>
                <div>投放周期：明确广告投放的起止日期及可能的时段安排。</div>
                <div>
                  投放量与频次：规定广告展示次数、曝光量、点击量等量化指标（如CPM、CPC、CPA等）。
                </div>
              </div>
              <div class="text">
                <div>四、费用与支付</div>
                <div>
                  服务费用：详细列出各项费用（如定制费、投放费、代理费、监测费等），以及总费用。
                </div>
                <div>计价方式：按照固定金额、按效果付费、按展示次数等计费模式进行说明。</div>
                <div>
                  付款条件：分期付款安排、预付款比例、尾款支付时间、支付方式（如银行转账、支票、电子支付等）
                </div>
                <div>发票开具：约定发票类型、抬头、内容及开具时间。</div>
              </div>
              <div class="text">
                <div>五、知识产权与版权</div>
                <div>版权归属：确认广告内容的版权归属，明确使用权、复制权、改编权等权利分配。</div>
                <div>授权使用：甲方授予乙方在指定平台和范围内使用广告内容的独家或非独家许可。</div>
              </div>
              <div class="text">
                <div>六、广告内容合规与责任</div>
                <div>
                  内容审查：乙方对广告内容进行合法合规性审查的责任，确保符合相关法律法规及平台政策。
                </div>
                <div>
                  甲方保证：甲方承诺提供的广告素材及信息真实、合法、不侵犯第三方权益，遵守广告法等相关法规。
                </div>
                <div>
                  违规处理：若广告内容违反规定，双方应约定的纠正措施、责任承担及可能产生的损失赔偿。
                </div>
              </div>
              <div class="text">
                <div>七、监测与报告</div>
                <div>投放监测：乙方应提供广告投放的实时数据监控、效果评估及定期报告。</div>
                <div>
                  数据真实性：保证监测数据的准确性和公正性，如有第三方监测，明确监测机构及标准。
                </div>
              </div>
              <div class="text">
                <div>八、违约责任与终止</div>
                <div>
                  违约情形：列举双方可能的违约行为（如延迟付款、未能按期投放、广告内容违规等）。
                </div>
                <div>违约责任：对应违约行为设定具体的违约金、赔偿责任及补救措施。</div>
                <div>
                  合同解除：约定在何种条件下可以提前解除合同，以及解除后的结算、责任承担等事宜。
                </div>
              </div>
              <div class="text">
                <div>九、争议解决</div>
                <div>
                  争议解决方式：首选友好协商，不成则约定具体的仲裁机构或法院管辖，适用法律。
                </div>
              </div>
              <div class="text">
                <div>十、其他条款</div>
                <div>保密条款：双方对在合作过程中获取的对方商业秘密和技术资料的保密义务。</div>
                <div>通知与送达：约定有效的通知方式及视为送达的条件。</div>
                <div>合同变更与补充：修改或补充协议需双方书面同意的程序。</div>
                <div>合同效力：合同签署、生效日期及份数。</div>
                <diV
                  >综上所述，广告定制与投放协议应详细涵盖广告制作、投放的所有关键环节，确保双方权利义务明确，风险可控，为顺利执行广告推广计划提供法律保障。</diV
                >
              </div>
            </div>
          </div>
        </div>
        <Separator class="mt-10 mb-3" />
        <div class="mb-4">
        <Button
          class="w-[80px] rounded-[4px] bg-[#ffffff] text-muted-foreground mr-3 hover:bg-white" @click="prevStep"
          >不同意</Button
        >
        <Button class="w-[80px] rounded-[4px] bg-[#2277ff] text-white" @click="nextStep">同意</Button>
        </div>
    </div>
</template>
<script setup>
import {FristAuth} from '@/server/apis/auth/index.js'

const emit=defineEmits(['change']);
const nextStep=async ()=>{
  emit('change',1);
  await FristAuth({adid:11,adType:0});
};
const prevStep=()=>{
  emit('change',)
};
</script>
<style scoped>
.title {
  font-size: 24px;
  font-family:
    PingFang SC,
    PingFang SC-Semibold;
  font-weight: 600;
  color: #333333;
  line-height: 32px;
}
.text {
  text-align: left;
  font-size: 14px;
  font-family:
    PingFang SC,
    PingFang SC-Regular;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
}
</style>

