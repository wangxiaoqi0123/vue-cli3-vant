import config from "@/config";
const { BASE_API } = config;
export const ServiceConfig = {
  LoginService: {
    login: "/user/login",
    register: `${BASE_API}/user/register`,
    parameterQuery: "/parameter/query",
    getInfo: "/user/roles"
  }
};
