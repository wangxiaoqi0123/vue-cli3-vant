<template>
  <div>
    <h1 class="title">throttle节流: 事件连续触发时，在规定时间内只执行一次函数</h1>
    <p class="title">指令方式</p>
    <van-button
      type="primary"
      v-throttle="{fun: 'handleClick', event: 'click', args: '123' ,wait:2000}"
    >throttle节流 方式一</van-button>
    <br />
    <p class="title">函数方式</p>
    <van-button type="info" @click="handleClickFun">throttle节流 方式二</van-button>
  </div>
</template>
<script>
import { _throttle } from "@/libs/tools.js";
export default {
  data() {
    return {
      timer: null
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    handleClick(val) {
      console.log("2000 :>> ", 2000);
    },
    handleClickFun: _throttle(function (params) {
      console.log("1111 :>> ", 1111);
    }, 2000)
  }
};
</script>
<style lang='less' scoped>
.title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 32px;
}
</style>
