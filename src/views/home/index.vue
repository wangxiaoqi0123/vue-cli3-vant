<template>
  <div class="home_view">
    <div class="topBox">
      <van-nav-bar title="首页" left-text right-text />
    </div>
    <WorkbenchBox title="测试" :menus="powermenus" />
    <WorkbenchBox title="学习" :menus="learnmenus" class="last-workbox" />
  </div>
</template>
<script>
import WorkbenchBox from "./modules/WorkbenchBox";
export default {
  components: {
    WorkbenchBox
  },
  data() {
    return {
      powermenus: [
        { label: "测试", icon: "whale", path: "/test" },
        { label: "权限", icon: "whale", path: "/async" }
      ],
      learnmenus: [
        { label: "AL", icon: "whale", path: "/al" },
        { label: "DT", icon: "whale", path: "/dt" },
        { label: "CV", icon: "whale", path: "/cv" },
        { label: "DE", icon: "whale", path: "/de" },
        { label: "VD", icon: "whale", path: "/vd" },
        { label: "IsScroll", icon: "whale", path: "/isscroll" },
        { label: "SYNC", icon: "whale", path: "/sync" }
      ]
    };
  },
  mounted() { },
  methods: {}
};
</script>

<style lang="less" scoped>
/deep/ .van-tabbar--fixed {
  z-index: 10 !important;
}
.home_view ::-webkit-scrollbar {
  display: none;
}
.home_view {
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  /deep/ .workbenchBox:nth-last-child(3) {
    .myBox {
      border-bottom: 0px;
    }
  }
}
.footerBox {
  width: 100%;
  height: 312px;
  margin-bottom: 10px;
  .promotion {
    width: 100%;
    height: 100%;
  }
}
.last-workbox {
  /deep/ .myBox {
    border-bottom: 0px;
  }
}
</style>
