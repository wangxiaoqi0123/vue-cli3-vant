import { BaseService } from "@/api/baseapi/BaseService.js";
import { ServiceConfig } from "@/api/baseapi/ServiceConfig.js";

export class LoginService extends BaseService {
  /** 登录 */
  static login(params) {
    return this.postApi(ServiceConfig.LoginService.login, params);
  }
  /** 注册 */
  static register(params) {
    return this.postApi(ServiceConfig.LoginService.register, params);
  }
  static getInfo(params) {
    return this.getApi(ServiceConfig.LoginService.getInfo);
  }
  /** 测试 mock */
  static parameterQuery() {
    return this.getApi(ServiceConfig.LoginService.parameterQuery);
  }
}
