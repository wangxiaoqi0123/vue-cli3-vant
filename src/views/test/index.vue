<template>
  <FormStructure :footer="false">
    <template v-slot:header>
      <HeadTitle title="测试页面" left-arrow backPath class="test" />
    </template>
    <template v-slot:main>
      <ul class="list">
        <li @click="handleMock">Mock 接口测试</li>
        <li @click="handlePersist">vuex-persist veux持久化测试1</li>
      </ul>
    </template>
  </FormStructure>
</template>
<script>
import { LoginService } from "@/api";
import { loading } from "@/decorator";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    @loading("加载中...")
    async handleMock() {
      try {
        const res = await LoginService.getInfo();
        a = b;
        console.log("res :>> ", res);
      } catch (error) {
        this.$toast("error");
      }
    },
    handlePersist() {
      this.$store.commit("local/SET_USER", "132");
    }
  }
};
</script>
<style lang='less' scoped>
.list {
  margin-top: 32px;
  li:first-child {
    margin-top: 0;
  }
  li {
    width: 100%;
    height: 90px;
    border: 1px solid #333333;
    line-height: 90px;
    box-sizing: border-box;
    padding: 0px 20px;
    font-weight: 500;
    font-size: 30px;
    margin-top: 10px;
  }
}
</style>
