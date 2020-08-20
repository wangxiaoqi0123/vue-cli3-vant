<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title="isScroll" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <a href="tel:15677776767">点击拨打15677776767</a>
    </template>
  </FormStructure>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
