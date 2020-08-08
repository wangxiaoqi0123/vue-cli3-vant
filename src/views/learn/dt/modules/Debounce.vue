<template>
  <div>
    <h1 class="title">debounce防抖: 触发事件后在 规定时间 内函数只能执行一次，如果在 规定时间 内又触发了事件，则重新计算函数执行时间</h1>
    <br />
    <p class="title">指令方式</p>
    <van-button type="info" v-debounce="handleClick">debounce防抖 方式一</van-button>
    <van-button type="warning" v-debounce.click="handleClick">debounce防抖 方式二</van-button>
    <van-button
      type="primary"
      v-debounce="{fun: 'handleClick', event: 'click', args: '123' ,wait:200}"
    >debounce防抖 方式三</van-button>
    <br />
    <p class="title">函数方式</p>
    <van-button type="info" v-debounce="handleClickFun">debounce防抖 方式四</van-button>
  </div>
</template>
<script>
import { _debounce } from "@/libs/tools.js";
export default {
  data() {
    return {
      value: 123
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    handleClick(val) {
      console.log("this.value :>> ", this.value);
      console.log([...arguments]);
    },
    handleClickFun: _debounce(function () {
      console.log("测", this.value);
    }, 200)
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
