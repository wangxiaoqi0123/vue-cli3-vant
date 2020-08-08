import axios from "axios";
import { getToken } from "@/libs/token";

// 根据环境设置基础Api路径
import config from "@/config";
const { BASE_API } = config;
const instance = axios.create({
  baseURL: BASE_API,
  timeout: 5000
});
instance.defaults.withCredentials = false;
instance.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
instance.defaults.headers["Accept"] = "*/*";

instance.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers["Authorization"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  err => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  err => {
    if (err.response) {
      return Promise.reject(err.response.data);
    }
    return Promise.reject(err);
  }
);
export default instance;
