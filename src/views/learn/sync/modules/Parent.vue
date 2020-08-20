<template>
  <div class="parent">
    <p>我是一个父组件</p>
    <br />
    <h1>{{text}}</h1>
    <br />
    <p>手动实现方式</p>
    <Child :text="text" @child-event="(val)=>{ text=val }" />
    <br />
    <br />
    <br />
    <p>watch 实现方式</p>
    <Test1 :text.sync="text" />
    <br />
    <br />
    <br />
    <p>computed 实现方式</p>
    <Test2 :text.sync="text" />
  </div>
</template>
<script>
import Child from "./Child";
import Test1 from "./Test1";
import Test2 from "./Test2";
export default {
  components: { Child, Test1, Test2 },
  data() {
    return {
      text: "父组件上默认文本"
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {}
};
</script>
<style lang='less' scoped>
.parent {
  border: 1px solid #0f0;
  padding: 20px;
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #0f0;
  }
}
</style>
