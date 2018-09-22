const webpack = require('webpack')
const path = require('path')

// --- plugins
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackCleanupPlugin = require('clean-webpack-plugin')

// --- folders
const FOLDER = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
}

const webpackConfig = {
  entry: {
    app: ['./src/index.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        include: FOLDER.SRC,
        use: ['ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        include: FOLDER.SRC,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: FOLDER.DIST,
    publicPath: '/',
    pathinfo: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackCleanupPlugin([FOLDER.DIST]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: false,
      inject: true
    })
  ],
  devServer: {
    contentBase: FOLDER.DIST,
    hot: true
  }
}

module.exports = webpackConfig
