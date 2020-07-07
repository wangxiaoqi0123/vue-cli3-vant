<template>
  <div class="error">
    <div class="box">
      <svg-icon
        icon-class="error404"
        class="icon"
      />
    </div>
    <div class="btn-box">
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
      if (path === "/404") {
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
.icon {
  width: 220px;
  height: 220px;
}
.box {
  width: 100%;
  height: 30vh;
  line-height: 30vh;
  text-align: center;
  font-size: 50px;
  margin-top: 18vh;
}
.btn-box {
  padding: 0px 32px;
}
.btn {
  border: none;
  outline: none;
  background-color: #d4d4d4;
  box-sizing: border-box;
}
</style>
