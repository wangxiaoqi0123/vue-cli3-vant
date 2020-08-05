<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title="debounce与throttle" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <Debounce />
      <br />
      <hr />
      <Throttle />
    </template>
  </FormStructure>
</template>
<script>
import Debounce from "./modules/Debounce";
import Throttle from "./modules/Throttle";
export default {
  components: { Debounce, Throttle },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
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
</style>
