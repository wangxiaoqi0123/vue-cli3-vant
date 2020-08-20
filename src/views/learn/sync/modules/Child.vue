<template>
  <div class="child">
    <p>我是子组件</p>
    <input class="inp" @input="onInput" :value="text" />
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    onInput(e) {
      this.$emit("child-event", e.target.value);
    }
  }
};
</script>
<style lang='less' scoped>
.child {
  padding: 20px;
  border: 1px solid #1f2d3d;
  .inp {
    border: 1px solid #000;
  }
}
</style>
