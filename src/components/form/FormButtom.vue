<template>
  <div class="btnsubmit" @click="$emit('click',$event)">
    <div class="clicksub">{{text}}</div>
  </div>
</template>
<script>
export default {
  props: {
    // 选择的值
    text: {
      type: String,
      default: () => "确定"
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
.btnsubmit {
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1000;
}
.btnsubmit > div {
  width: 100%;
  background: #424141;
  color: #fff;
  // height: 44px; /* no */
  // line-height: 44px; /* no */
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 28px;
  font-family: PingFang-SC-Medium;
}
</style>
