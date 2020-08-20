<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title=".sync详解使用" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <Parent />
    </template>
  </FormStructure>
</template>
<script>
import Parent from "./modules/Parent.vue";
export default {
  components: {
    Parent
  },
  data() {
    return {
      color: "red"
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {

  }
};
</script>
<style lang='less' scoped>
</style>
