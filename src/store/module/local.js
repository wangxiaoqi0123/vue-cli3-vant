
export default {
  // dispatch 指定模块名称
  namespaced: true,
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    SET_USER: (state, user) => {
      // 1. 把数据存到store
      state.user = user;
    }
  },
  actions: {
  }
};
