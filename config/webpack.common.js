// --- plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('clean-webpack-plugin')

// --- settings
const SETTINGS = require('./settings')

const webpackConfig = {
  entry: {
    app: ['./src/index.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: SETTINGS.SRC_DIR,
        use: ['ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        include: SETTINGS.SRC_DIR,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: SETTINGS.DIST_DIR,
    publicPath: '/',
    pathinfo: false
  },
  plugins: [
    new WebpackCleanupPlugin(
      [SETTINGS.DIST_DIR],
      { root: SETTINGS.BASE_DIR, verbose: true}
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: false,
      inject: true
    })
  ]
}

module.exports = webpackConfig
