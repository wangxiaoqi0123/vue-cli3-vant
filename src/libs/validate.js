let strategys = {
  isNotEmpty: (value, errorMsg) => {
    if (value === "") {
      return errorMsg;
    }
  },
  minLength: (value, length, errorMsg) => {
    if (value.length < length) {
      return errorMsg;
    }
  },
  mobileFormat: (value, errorMsg) => {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
};

// 策略类Validator
export var Validator = function () {
  this.cache = []; // 保存效验规则
};

/**
 *对方法参数处理
 */
Validator.prototype.add = function (value, rule, errorMsg) {
  var str = rule.split(":");
  this.cache.push(function () {
    var strategy = str.shift(); // 删掉str中的第一位，并拿到方法名
    str.unshift(value); // value添加进参数列表
    str.push(errorMsg); // 把errorMsg添加进参数列表
    return strategys[strategy].apply(null, str);
  });
};
/**
 * 循环执行返回信息结果
 */
Validator.prototype.start = function () {
  // eslint-disable-next-line
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
    if (msg) {
      return msg;
    }
  }
};
