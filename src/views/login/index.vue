<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div>
      <div class="title">登录</div>
      <van-field
        v-model="loginForm.username"
        left-icon=" iconfont icon-yonghu"
        clearable
        placeholder="请输入用户名"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        left-icon=" iconfont icon-mima"
        placeholder="请输入密码"
      />
      <van-button
        :loading="loading"
        class="btn"
        :disabled="disabled"
        round
        type="info"
        loading-text="登录中..."
        @click.native.prevent="handleLogin"
      >登录</van-button>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";
import { removeToken } from "@/libs/token";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      sidebarShow: false, // 默认值
      // 登录按钮loading
      loading: false,
      codeUrl: "",
      loginForm: {
        username: "",
        password: ""
      },
      disabled: false
    };
  },
  created() {},
  methods: {
    handleLogin() {
      const user = this.loginForm;
      if (!user.username || !user.password) {
        this.$toast("请输入登录信息");
        return false;
      }
      this.loading = true;
      Cookies.remove("username");
      Cookies.remove("password");
      removeToken();
      window.sessionStorage.clear();
      // 节流
      this.disabled = true;
      this.$store
        .dispatch("user/Login", user)
        .then(() => {
          this.loading = false;
          this.$router.push("/home");
        })
        .catch(e => {
          this.loading = false;
          this.disabled = false;
          this.$toast(e.msg);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  min-height: 100vh;
  padding: 160px 30px 0px;
  box-sizing: border-box;
  /deep/ .van-cell {
    padding: 30px 30px;
    // font-size: 32px;
    font-weight: 500;
    .van-icon {
      margin-right: 30px;
    }
  }
}

.btn {
  margin-top: 100px;
  border: none;
  outline: none;
  width: 100%;
}

.code {
  display: flex;
  .key {
    width: 200px;
    flex-shrink: 0;
  }
}
.title {
  height: 100px;
  margin-bottom: 10px;
  width: 100%;
  line-height: 100px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
}
</style>
