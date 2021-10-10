module.exports = {
  plugins: [
    "stylelint-prettier",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier",
  ],
  rules: {
    "prettier/prettier": true,
    "max-line-length": null, // max文字数を無視
    "function-url-quotes": "never", // 不必要なクォーテーションを禁止( 自動Fixできないので注意 )
    "no-descending-specificity": null, // セレクタの詳細度に関する警告を出さない
    "font-weight-notation": null, // font-weightの指定は自由に
    "font-family-no-missing-generic-family-keyword": null, // sans-serif / serifを必須にするか。object-fitでエラーださないようにする。
    "no-empty-source": null, // CSsが空でも良い
    "at-rule-no-unknown": [true, { // Tailwindの@tailwind用
      "ignoreAtRules": [
        "tailwind",
        "apply",
        "variants",
        "responsive",
        "screen"
      ]
    }],
  },
  ignoreFiles: [
    '**/node_modules/**',
  ],
};
