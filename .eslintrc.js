module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  rules: {
    semi: ["error", "always"],
    'comma-dangle': ["error", "always-multiline"],
    'space-before-function-paren': ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
  },
};
