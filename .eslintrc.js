module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  // not going too nazi on that one for the moment
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:compat/recommended',
  ],

  plugins: ['prettier'],

  // add your custom rules here
  rules: {
    'no-mixed-spaces-and-tabs': 'warn',
    'no-empty-pattern': 'warn',
    'no-unused-vars': 'warn',
    'vue/no-lone-template': 'off',
  },
}
