import request from "@/libs/request";

export class LoginService {
  // Mock
  static login() {
    return request({
      url: "/user/login",
      method: "post"
    });
  }
  // Mock
  static getInfo() {
    return request({
      url: "/user/roles",
      method: "get"
    });
  }
  // Mock
  static parameterQuery() {
    return request({
      url: "/parameter/query",
      method: "get"
    });
  }
}
