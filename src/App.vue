<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  mounted () {
  }
};
</script>
<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
s #app {
  .size;
}
.refresh_box {
  min-height: 100vh;
  background-color: #f8f8f8;
}
.view {
  background-color: #fff;
  min-height: 100vh;
}
</style>
