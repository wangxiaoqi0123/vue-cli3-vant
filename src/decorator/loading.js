import { Toast } from "vant";

/**
 * loading 装饰器
 * @param {*} message 提示信息
 * @param {function} errorFn 异常处理逻辑
 */
export const loading = function (message = "加载中...", errorFn = function () { }) {
  return function (target, name, descriptor) {
    const fn = descriptor.value;
    descriptor.value = async function (...rest) {
      const loading = Toast.loading({
        message: message,
        forbidClick: true
      });
      try {
        return await fn.call(this, ...rest);
      } catch (error) {
        // 在调用失败，且用户自定义失败的回调函数时，则执行
        errorFn && errorFn.call(this, error, ...rest);
        console.error(error);
      } finally {
        loading.clear();
      }
    };
  };
};
