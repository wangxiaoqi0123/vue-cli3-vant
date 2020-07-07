import Cookies from "js-cookie";
// cookie保存的天数
import config from "@/config";
const { cookieExpires } = config;
export const TOKEN_KEY = "TOEKN";

export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 });
};

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) return token;
  else return false;
};

export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}
