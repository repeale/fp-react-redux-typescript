// --- plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// --- settings
const SETTINGS = require('./settings')
const {HTML_WEBPACK_PLUGIN} = require('./settings')

const webpackConfig = {
  entry: {
    app: ['./src/index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: SETTINGS.SRC_DIR,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: SETTINGS.SRC_DIR,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: SETTINGS.DIST_DIR,
  },
  plugins: [
    new CleanWebpackPlugin({verbose: true}),
    new HtmlWebpackPlugin(HTML_WEBPACK_PLUGIN),
  ],
}

module.exports = webpackConfig
