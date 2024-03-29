module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["jsx-a11y", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015
  },
  "env": {
    "node": true
  },
  overrides: [
    {
      files: ["*.test.js", "__mocks__/**"],
      env: {
        jest: true,
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      extends: [
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended"
      ],
      rules: {
        semi: 0,
        "prettier/prettier": ["error", { "semi": false }]
      }
    },
  ],
}
