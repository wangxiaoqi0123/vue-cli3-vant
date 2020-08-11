<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title="css之定义变量" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <div class="box" :style="`--color:${color}`"></div>
      <van-button @click="color='green'">green</van-button>
      <van-button @click="color='red'">red</van-button>
      <van-button @click="color='yellow'">yellow</van-button>
    </template>
  </FormStructure>
</template>
<script>
export default {
  data() {
    return {
      color: "red"
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    handleChild(val) {
      alert(val);
    },
    handleParent(val) {
      alert(val);
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  background-color: var(--color);
}
</style>
