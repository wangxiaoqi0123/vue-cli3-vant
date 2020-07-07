/**
 * 正则校验表达式
 */
/* 合法uri */
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * 验证邮箱
 * @param str
 * @returns {boolean}
 */
export function validatEmail(str) {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  return reg.test(str);
}

/* 手机号校验 */
export function checkPhone(tel) {
  const reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  return reg.test(tel);
}

/* 固定电话校验 */
export function fixedTelephone(tel) {
  const reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(tel);
}

/* 电话校验 */
export function checkTelephone(tel) {
  // 手机号校验
  const reg1 = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  // 固定电话校验
  const reg2 = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  if (reg1.test(tel) || reg2.test(tel)) {
    return true;
  } else {
    return false;
  }
}

/* 身份证号校验 */
export function checkIDCard(str) {
  let _IDRe18 = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  let _IDre15 = /^([1-6][1-9]|50)\d{4}\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}$/;
  if (_IDRe18.test(str) || _IDre15.test(str)) {
    return true;
  } else {
    return false;
  }
}

/* 不同国家证件 正则 */
/* Canada 加拿大 社会保险号码 */
export function CanadaSocialInsuranceNumber(val) {
  const reg = /[\d]{3}-[\d]{3}-[\d]{3}/;
  return reg.test(val);
}
/** 加拿大 护照 */
export function CanadianPassport(val) {
  const reg = /[a-z0-9A-Z]{8,9}/;
  return reg.test(val);
}
/** 中国 居民身份证 */
export function ChineseResidentIdentityCard(val) {
  const reg = /[\d]{17}[0-9X]{1}/;
  return reg.test(val);
}
/** 中国 护照 */
export function ChinesePassport(val) {
  const reg = /[EeGgSs][\d]{8}/;
  return reg.test(val);
}
/** 中国 台胞证 */
export function ChineseTaiwaneseCard(val) {
  const reg = /\d{10}\(B\)/;
  return reg.test(val);
}
/** 中国 港澳通行证 */
export function ChinaHongKongAndMacauPass(val) {
  const reg = /\d{10}\(B\)/;
  return reg.test(val);
}
/** 中国 香港身份证 */
export function HongKongChinaIdentityCard(val) {
  const reg = /^[a-zA-Z]{1,2}[\d]{6}[0-9a-zA-Z]{1}$/;
  return reg.test(val);
}
/** 中国 通行证 */
export function ChinaPass(val) {
  const reg = /\d{10}\(B\)/;
  return reg.test(val);
}
/** 香港  身份证 */
export function HongKongIdentityCard(val) {
  const reg = /^[a-zA-Z]{1,2}[\d]{6}[0-9a-zA-Z]{1}$/;
  return reg.test(val);
}
/** 香港  护照 */
export function HongKongPassport(val) {
  const reg = /[a-z0-9A-Z]{8,9}/;
  return reg.test(val);
}
/** 日本 退休金支付编号 */
export function JapanPensionPaymentNumber(val) {
  const reg = /[\d]{4}-[\d]{6}/;
  return reg.test(val);
}
/** 日本 护照 */
export function JapanesePassport(val) {
  const reg = /[a-z0-9A-Z]{8}/;
  return reg.test(val);
}
/** 新加坡  护照 */
export function SingaporePassport(val) {
  const reg = /[a-z0-9A-Z]{8,9}/;
  return reg.test(val);
}
/** 新加坡  身份证 */
export function SingaporeIdentityCard(val) {
  const reg = /[a-z0-9A-Z]{8,9}/;
  return reg.test(val);
}
/** 台湾 台胞证 */
export function TaiwanCompatriotCard(val) {
  const reg = /\d{10}\(B\)/;
  return reg.test(val);
}
/** 美国 社会保障号码 */
export function AmericaSocialSecurityNumber(val) {
  const reg = /[\d]{3}-[\d]{2}-[\d]{4}/;
  return reg.test(val);
}
/** 美国 护照 */
export function AmericanPassport(val) {
  const reg = /[a-z0-9A-Z]{8,9}/;
  return reg.test(val);
}
/* 不同国家证件 正则 */
