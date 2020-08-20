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
  computed: {
    modelText: {
      get() {
        return this.text;
      },
      set(newVal) {
        this.$emit("update:text", newVal);
      }
    }
  }
};
</script>
<style lang='less' scoped>
input {
  border: 1px solid #000;
}
</style>
