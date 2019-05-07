module.exports = {
  rules: {
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }]
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  }
}