<template>
  <div :class="[{nopadding:type==='nopadding'}]" class="container">
    <!-- :style="{height:browserEnv==='Android'? CH +'px' :'100%'}" -->
    <!-- 防止页面中的按钮置顶 -->
    <div class="form-content">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
    </div>
    <div class="form-footer" v-if="footer">
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: () => ""
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      CH: window.document.body.clientHeight
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@supports (bottom: env(safe-area-inset-bottom)) {
  .container {
    padding-bottom: constant(safe-area-inset-bottom) !important;
    padding-bottom: env(safe-area-inset-bottom) !important;
    box-sizing: border-box;
    height: 100vh !important;
  }
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding-top: env(safe-area-inset-top);
  // padding-left: env(safe-area-inset-left);
  // padding-right: env(safe-area-inset-right);
  // padding-bottom: env(safe-area-inset-bottom);
  box-sizing: border-box;
  .form-content ::-webkit-scrollbar {
    display: none;
  }
  .form-content {
    flex: 1;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    main {
      margin-left: 32px;
      margin-right: 32px;
    }
    padding-bottom: 66px;
    box-sizing: border-box;
  }
  .form-footer {
    height: 88px;
    flex-shrink: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

.nopadding {
  background-color: #f6f6f6;
  .form-content {
    main {
      margin: 0;
    }
    padding-bottom: 66px;
  }
}
</style>
