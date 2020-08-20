<template>
  <input type="text" v-model="modelText" />
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      modelText: ""
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newVal) {
        this.modelText = newVal;
      }
    },
    modelText(newVal) {
      this.$emit("update:text", newVal);
    }
  }
};
</script>
<style lang='less' scoped>
input {
  border: 1px solid #000;
}
</style>
