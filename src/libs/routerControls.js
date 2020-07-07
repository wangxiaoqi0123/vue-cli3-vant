/**
 * @param {*} route 路由列表
 */
const hasAccess = (route) => {
  /**
   * 检查路由是否通过
   * checkRouter = true
   */
  if (route.meta.checkRouter) {
    let menu = window.sessionStorage.getItem("menu");
    if (menu) {
      menu = JSON.parse(menu);
      // 检查要校验的路由是否在权限菜单中
      for (let i = 0; i < menu.length; i++) {
        const item1 = menu[i];
        for (let j = 0; j < item1.children.length; j++) {
          const item2 = item1.children[j];
          if (item2.path === route.path) {
            return true;
          }
        }
      }
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
/**
 * 权鉴
 * @param {*} name 即将跳转的路由name
 * @param {*} access 用户权限数组
 * @param {*} routes 路由列表
 * @description 用户是否可跳转到该页
 */
export const canTurnTo = (name, access, routes) => {
  const routePermissionJudge = list => {
    return list.some(item => {
      if (item.children && item.children.length) {
        return routePermissionJudge(item.children);
      } else if (item.name === name) {
        return hasAccess(item);
      }
    });
  };
  return routePermissionJudge(routes);
};
