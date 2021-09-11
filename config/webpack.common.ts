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
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  output: {
    path: SETTINGS.DIST_DIR,
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    new CleanWebpackPlugin({verbose: true}),
    new HtmlWebpackPlugin(SETTINGS.HTML_WEBPACK_PLUGIN),
  ],
}
