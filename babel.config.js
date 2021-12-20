module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'usage',
        debug: false
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining','@babel/plugin-proposal-nullish-coalescing-operator'],
  env: {
    test: {
      plugins: ['dynamic-import-node']
    }
  }
};
// TODO: AJP - cleanup and sync with virksomhedsguide (check with existing leverandør apps)