<template>
  <div class="parent">
    <p>我是一个父组件</p>
    <br />
    <h1>{{text}}</h1>
    <br />
    <Child :text="text" @child-event="(val)=>{ text=val }" />
  </div>
</template>
<script>
import Child from "./Child";
export default {
  components: { Child },
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
