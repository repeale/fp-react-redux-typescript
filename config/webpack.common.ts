// --- plugins
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

// --- settings
import {SETTINGS} from './settings'

import {Configuration} from 'webpack'

export const config: Configuration = {
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
    // @ts-ignore
    new CleanWebpackPlugin({verbose: true}),
    new HtmlWebpackPlugin(SETTINGS.HTML_WEBPACK_PLUGIN),
  ],
}
