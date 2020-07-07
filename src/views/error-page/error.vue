<template>
  <div class="error">
    <div class="box">网络异常了~~</div>
    <div class="btn">
      <van-button
        type="primary"
        size="large"
        class="btn"
        @click.native.prevent="handleClick"
      >重新加载</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: false
    };
  },
  computed: {},
  watch: {},
  mounted () { },
  methods: {
    handleClick () {
      // 防抖
      if (this.flag) {
        return false;
      }
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 3000);
      let path = window.location.href.split("#")[1];
      if (path === "/error") {
        this.$router.go(-1);
      } else {
        this.$router.go(0);
      }
    }
  }
};
</script>
<style lang='less' scoped>
.error {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.box {
  width: 100%;
  height: 30vh;
  line-height: 30vh;
  text-align: center;
  font-size: 50px;
  margin-top: 18vh;
}
.btn {
  padding: 0px 32px;
  border: none;
  outline: none;
}
</style>
