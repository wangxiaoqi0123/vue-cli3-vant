export function isFunction(fun) {
  return Object.prototype.toString.call(fun) === "[object Function]";
}

export function isObject(fun) {
  return Object.prototype.toString.call(fun) === "[object Object]";
}

// 空函数
export function noop() {}

export function makeMap(str) {
  const arr = str.split(",");
  const obj = {};
  arr.forEach(vv => {
    obj[vv] = true;
  });
  return function() {
    const args = arguments;
    return obj[args[0]];
  };
}

export function debounce(fn, delay = 50) {
  let timer = null;
  return function() {
    const args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export function throttle(fn, delay = 50) {
  let originTime = new Date().getTime();
  return function() {
    const args = arguments;
    const currentTime = new Date().getTime();
    if (currentTime - originTime > delay) {
      fn.apply(this, args);
      originTime = currentTime;
    }
  };
}
