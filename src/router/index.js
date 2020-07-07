import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * constantRoutes
 * 没有权限要求的基本页面
 * 所有角色都可以访问
 *
 * keepAlive=true 页面缓存
 */
export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/home/index")
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "404"
    },
    component: () => import("@/views/error-page/404")
  },
  {
    path: "/error",
    name: "error",
    meta: {
      title: "error"
    },
    component: () => import("@/views/error-page/error")
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "test"
    },
    component: () => import("@/views/test")
  }
];

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 *
 * roles 必须是字符串数组 根据字符串数组 动态匹配路由
 * roles 不写默认所有人都有权限
 */
export const asyncRoutes = [
  {
    path: "/async",
    name: "async",
    meta: {
      title: "async",
      roles: ["admin", "editor"]
    },
    component: () => import("@/views/async")
  },

  // 404页面必须放置在末尾!!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
