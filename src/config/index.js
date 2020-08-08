let BASE_API = null;
switch (process.env.VUE_APP_ENV) {
  case "dev":
    BASE_API = "http://192.168.137.61:8081";
    break;
  case "test":
    BASE_API = "";
    break;
  case "prod":
    BASE_API = "";
    break;
}
export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: "APP",
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description api请求基础路径
   */
  BASE_API: BASE_API,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: "home",
  /**
   * @description 需要加载的插件
   */
  plugin: {}
};
