import axios from "../../libs/axios";
/**
 * 错误显示提示信息
 * @param functionName
 * @param error
 * @returns {string|*}
 */
export function handleError (error, functionName = "") {
  console.warn(` 函数 : ${functionName} 。发生错误 : `, error);
  return error.message || error;
}
export class BaseService {
  /**
   * POST API
   * @param url
   * @param reqbodys
   * @param config
   * @returns {*}
   */
  static postApi (url, reqbodys, config) {
    return axios.post(url, JSON.stringify(reqbodys));
  }
  static postApiFile (url, reqbodys, config) {
    return axios({
      method: "post",
      url,
      data: reqbodys, // FormDate文件对象
      contentType: false, // 告诉jQuery不要去设置Content-Type请求头
      processData: false // 告诉jQuery不要去处理发送的数据
    });
  }
  /**
   * GET API
   * @param url
   * @param reqbodys
   * @param config
   * @returns {*}
   */
  static getApi (url, reqbodys, config) {
    if (reqbodys) {
      return axios.get(url + "/" + reqbodys);
    } else {
      return axios.get(url);
    }
  }
  static getApiParams (url, reqbodys, config) {
    return axios.get(url, { params: reqbodys });
  }
  /**
   * PUT API
   * @param url
   * @param reqbodys
   * @param config
   * @returns {*}
   */
  static putApi (url, reqbodys, config) {
    return axios.put(url, JSON.stringify(reqbodys), {
      headers: {
        "Content-type": "application/json;charset=UTF-8"
      }
    });
  }
  /**
   * DELETE API
   * @param url
   * @param reqbodys
   * @returns {*}
   */
  static deleteApi (url, reqbodys) {
    return axios.delete(url + "/" + reqbodys);
  }
}
