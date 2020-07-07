<template>
  <div class="workbenchBox" v-if="menus.length>0">
    <p class="workTitle">{{title}}</p>
    <div class="myBox clearfix">
      <template v-for="(item,index) in menus">
        <!-- 二维码弹框 -->
        <div class="iconBox" :key="index" v-if="item.path === 'QC'">
          <div class="icon" @click.stop="$emit('icon')">
            <svg-icon :icon-class="item.icon" class="svgIcon" />
          </div>
          <p class="iconTitle">{{item.label}}</p>
        </div>
        <!-- 菜单 -->
        <div class="iconBox" :key="index" v-else>
          <div class="icon" @click="windowToJump(item)">
            <svg-icon :icon-class="item.icon" class="svgIcon" />
            <div class="dot" v-show="item.dot">{{item.dot}}</div>
          </div>
          <p class="iconTitle">{{item.label}}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      defalue: () => ""
    },
    menus: {
      type: Array,
      required: true,
      defalue: () => []
    }
  },
  data() {
    return {
      verify: false,
      isCode: false,
      tempmenu: {}
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 办事窗口跳转
    windowToJump(menu) {
      // 是否须要二次验证
      if (menu.isverify) {
        this.secpassverCheck();
        this.tempmenu = JSON.parse(JSON.stringify(menu));
      } else {
        // 外部链接 与 路由判断
        if (menu.iFrame) {
          window.location.href = menu.path;
        } else {
          if (menu.path) {
            this.$router.push(menu.path);
          }
        }
      }
    }
  }
};
</script>
<style lang='less' scoped>
.workbenchBox {
  padding: 40px 32px 0px 32px;
  .workTitle {
    // width: 65px;
    height: 32px;
    line-height: 32px;
    font-size: 34px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(47, 29, 25, 1);
    margin: 20px 0px;
  }

  .myBox {
    border-bottom: 2px solid #e4ded6;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;

    .iconBox {
      width: 25%;
      float: left;
      text-align: center;
      display: flex;
      font-family: PingFang SC;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;
      border: 1px solid #001528;
      box-sizing: border-box;
    }
    .icon {
      text-align: center;
      position: relative;
      .dot {
        position: absolute;
        top: 5px;
        right: -3px;
        transform: translateY(-50%) translateX(50%) scale(0.8);
        // background-color: #f56c6c;
        background-color: #dba871;

        border-radius: 20px;
        color: #fff;
        display: inline-block;
        font-size: 24px;
        height: 36px;
        line-height: 36px;
        padding: 0 12px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #49352e; /* px */
      }
    }
    .svgIcon {
      width: 80px;
      height: 80px;
    }
    .iconTitle {
      margin: 0px;
      margin-top: 10px;
      font-size: 26px;
      color: #2f1d19;
      text-align: center;
      white-space: nowrap;
    }
  }
}
</style>
