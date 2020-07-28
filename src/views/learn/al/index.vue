<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title="$attrs与$lisenters" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <Parent @child-event="handleChild" @parent-event="handleParent" title="hello world" text="我是父组件"/>
    </template>
  </FormStructure>
</template>
<script>
import Parent from "./modules/Parent";
export default {
  components: {
    Parent
  },
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
