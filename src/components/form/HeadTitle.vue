<template>
  <!-- @click-right="toRightPath" -->
  <div class="page-header">
    <van-nav-bar v-bind="$attrs" v-on="$listeners" @click-left="back" @click-right="toRightPath">
      <div slot="right" v-if="!$attrs['right-text']">
        <slot name="right"></slot>
      </div>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "page-header",
  inheritAttrs: false,
  props: {
    backPath: {
      type: String,
      default: "",
      required: false
    },
    rightPath: {
      type: String,
      default: "",
      required: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    back() {
      if (this.backPath === "") {
        this.$router.go(-1);
      } else {
        this.$router.push({
          path: this.backPath
        });
      }
    },
    toRightPath() {
      if (this.rightPath !== "") {
        this.$router.push({
          path: this.rightPath
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.van-nav-bar {
  height: 100px;
  line-height: 100px;
}
/deep/ .van-nav-bar__text {
  width: 72px;
  height: 50px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 50px;
  color: rgba(52, 52, 52, 1);
  opacity: 1;
}
</style>
