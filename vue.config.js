const webpack = require('webpack')

module.exports = {
  publicPath: 'https://prism-dayz.github.io/prism-ui',
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_JSON: '"' + escape(JSON.stringify(require('./package.json'))) + '"'
        }
      })
    ]
  }
}
