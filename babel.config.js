module.exports = {
  presets: [
    // 方式1: 包含 Babel 7 + babel-loader + @vue/babel-preset-app
    // https://www.npmjs.com/package/@vue/cli-plugin-babel
    // [
    //   '@vue/cli-plugin-babel/preset', {
    //     useBuiltIns: 'entry',
    //   },
    // ],
    // 方式2: 精准配置
    // This preset is meant to be used exclusively in projects created via Vue CLI and does not consider external use cases.
    // https://www.npmjs.com/package/@vue/babel-preset-app
    // Babel Polyfills
    // https://cli.vuejs.org/guide/browser-compatibility.html
    [
      // 包名简写(如果包的名称以 'babel-preset-' 为前缀): '@vue/app', 极不推荐
      '@vue/babel-preset-app',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [],
};
