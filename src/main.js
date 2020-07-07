// main.js
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import config from "@/config";

// router 权限管控
import "@/router/permission";
// 全局样式
import "./index.less";
// 1px border 问题解决
import "@/styles/border.css";
// vant 字体图标扩展
import "@/assets/font/iconfont.css";
// 移动端适配
import "lib-flexible";
// 引用svg
import "@/icons/index.js";
// mock
import "../mock";

// UutUI引入
// eslint-disable-next-line
import Vant from "vant";
import "vant/lib/index.css";

// 时间处理器
import moment from "moment";
// select下拉框值
import select from "./libs/select.js";
// 全局filter过滤器
import filter from "./libs/filter.js";
// 网站水印算法
import watermark from "./libs/watermark.js";
// 全局公共表单组件
import Form from "./components/form";
// 移动端手势
import touch from "@/libs/touch.js";
// 移动端测试环境 console
import VConsole from "vconsole";
// 全局公共方法
import utils from "@/libs/utils.js";
// 防抖节流指令
import dt from "@/directive/debounce-throttle";
// 权限控件指令
import permission from "@/directive/permission";

// 全局Toast
// eslint-disable-next-line
import { Toast, Dialog, Notify, Lazyload } from "vant";

Vue.use(Lazyload);

// 时间赋值使用
Vue.prototype.$moment = moment;
moment.locale("zh-cn"); // moment汉化

// 全局toast背景不可点击
Toast.setDefaultOptions({ forbidClick: true, duration: 1500 });

// 使用全局bus 跨组件传递数据
Vue.prototype.bus = new Vue();
Vue.prototype.$watermark = watermark;
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$notify = Notify;

Vue.use(Vant);
Vue.use(filter);
Vue.use(Form);
Vue.use(touch);
Vue.use(utils);
Vue.use(permission);
Vue.use(dt);

Vue.prototype.$select = select;
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false;
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config;

if (process.env.VUE_APP_ENV !== "prod") {
  /* eslint-disable no-new */
  new VConsole();
}
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
