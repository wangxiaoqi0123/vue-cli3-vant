const filter = {};
filter.install = function (Vue) {
  Vue.filter("YesNo", val => {
    switch (val) {
      case "yes":
        return "是";
      case "no":
        return "否";
      default:
        return "";
    }
  });
};
export default filter;
