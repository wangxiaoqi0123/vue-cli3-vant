import router from "./index";
import store from "../store/index";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/libs/token";
import { setTitle } from "@/libs/tools";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/404", "/test"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start();

  // 确定用户是否已经登录
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // 如果已登录，则重定向到主页
      next({ path: "/" });
      NProgress.done();
    } else {
      // 确定用户是否通过getInfo获得了他的权限角色
      const hasRoles = store.state.user.roles && store.state.user.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          // roles 必须是字符串数组对象 such as: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch("user/getInfo");

          // 根据角色生成可访问路由图
          const accessRoutes = await store.dispatch("permission/generateRoutes", roles);
          // 动态添加可访问路由
          router.addRoutes(accessRoutes);

          // 避免首页两次重定向
          if (to.path === "/home") {
            next();
          } else {
            // 设置replace: true，这样导航将不会留下历史记录
            next({ ...to, replace: true });
          }
        } catch (error) {
          // 清楚 token 重新登录
          await store.dispatch("user/resetToken");
          next("/login");
          NProgress.done();
          console.log("error :>> ", error);
        }
      }
    }
  } else {
    /* 没有 token 未登录 */
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单中，直接登录
      next();
    } else {
      // 其他没有访问权限的页面被重定向到登录页面。
      next("/login");
      NProgress.done();
    }
  }
});

router.afterEach(to => {
  // 动态设置HTML meta Title
  setTitle(to, router.app);
  // 完成进度条
  NProgress.done();
});
