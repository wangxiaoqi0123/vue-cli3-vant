// 封装操作localstorage本地存储的方法   模块化的文件
var storage = {
  set(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
  },
  remove(key) {
    window.sessionStorage.removeItem(key);
  },
  removeStorage(key) {
    window.sessionStorage.removeItem(key);
    window.localStorage.removeItem(key); // 本地储存清除
  }
};

export default storage;
