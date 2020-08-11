<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title="decorator装饰器" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <van-button type="info" @click="handleMock">loading装饰器</van-button>
    </template>
  </FormStructure>
</template>
<script>
import { LoginService } from "@/api";
import { loading } from "@/decorator";
export default {
  data() {
    return {
      color: "red"
    };
  },
  computed: {},
  watch: {},
  mounted() {
    class Parent {
      @testable
      test() {
        // console.log("hello World :>> ", "hello World");
      }
    }
    function testable(target, name, descriptor) {
      console.log("target :>> ", target, typeof target);
      console.log("name :>> ", name, typeof name);
      console.log("descriptor :>> ", descriptor, typeof descriptor);
      console.log("descriptor.value :>> ", descriptor.value, typeof descriptor.value);
      target.isTestable = true;
    }
  },
  methods: {
    @loading("加载中...")
    async handleMock() {
      try {
        const res = await LoginService.getInfo();
        console.log("res :>> ", res);
      } catch (error) {
        this.$toast("error");
      }
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
