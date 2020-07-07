let roles = {
  status: 200,
  message: "success",
  data: {
    name: "@name",
    roles: ["admin"]
  }
};
let login = {
  status: 200,
  message: "success",
  token: "token"
};
export default {
  "get|/user/roles": roles,
  "post|/user/login": login
};
