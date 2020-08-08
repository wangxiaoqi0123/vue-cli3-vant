import request from "@/libs/request";

export class LoginService {
  static login() {
    return request({
      url: "/user/login",
      method: "post"
    });
  }

  static getInfo() {
    return request({
      url: "/user/roles",
      method: "get"
    });
  }

  static parameterQuery() {
    return request({
      url: "/parameter/query",
      method: "get"
    });
  }
}
