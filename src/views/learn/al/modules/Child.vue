<template>
  <div>
    <p>{{name}}</p>
    <p>{{title}}</p>
    <div>
      <van-button type="primary" @click="$emit('child-event','子事件')">子事件</van-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
