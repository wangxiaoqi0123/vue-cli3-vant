import store from "@/store";

export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    const roles = store.state.user && store.state.user.roles;

    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
    }
  }
};
