<template>
  <div class="parent-box">
    <p>{{text}}</p>
    <van-button type="info" @click="$emit('parent-event','父事件')">父事件</van-button>
    <br />
    <p>-----------------</p>
    <br />
    <Child v-on="$listeners" v-bind="$attrs" name="我是子组件" />
  </div>
</template>
<script>
import Child from "./Child";
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  components: {
    Child
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {}
};
</script>
<style lang='less' scoped>
.parent-box {
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>
