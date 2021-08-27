const webpack = require('webpack')
const {merge} = require('webpack-merge')

// --- config:common
const common = require('./webpack.common.js')

// --- plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')

// --- settings
const SETTINGS = require('./settings')

// --- config:development
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(SETTINGS.HTML_WEBPACK_PLUGIN),
  ],
})
