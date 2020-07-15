import { getToken, setToken, removeToken } from "@/libs/token";
import { LoginService } from "@/api";
const user = {
  namespaced: true,
  state: {
    token: getToken(),
    user: null,
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      // 1. 把数据存到store
      state.user = user;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // 登录
    async Login({ commit }, userInfo) {
      const username = userInfo.username;
      const password = userInfo.password;
      try {
        const result = await LoginService.login({
          username,
          password
        });
        return new Promise((resolve, reject) => {
          let { status, token } = result;
          if (status === 200) {
            commit("SET_TOKEN", token);
            setToken(token);
            resolve(result);
          } else {
            reject(result);
          }
        });
      } catch (e) {
        console.log(e);
        Toast({ message: e.message, duration: 0 });
        await Promise.reject(e);
      }
    },
    // 获取用户信息
    async getInfo({ commit, state }) {
      try {
        const response = await LoginService.getInfo();
        return new Promise((resolve, reject) => {
          const { data } = response;
          if (data && data.roles) {
            commit("SET_ROLES", data.roles);
            resolve(data);
          } else {
            reject(data);
          }
        });
      } catch (error) {
        await Promise.reject(error);
      }
    },
    // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
