module.exports = {
  root: true,
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false
    }],
    "no-undef": "off",
    "camelcase": "off",
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [2, "double", "avoid-escape"],
    "semi": [2, "always"],//语句强制分号结尾
    'space-before-function-paren': 0 //这句话表示在函数后可以不加空格
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
