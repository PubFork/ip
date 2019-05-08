module.exports = {
  rules: {
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }]
  },
  "parserOptions": {
    "parser": "vue-babel-eslint",
    "sourceType": "module",
    "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
      "jsx": true
    }
  }
}