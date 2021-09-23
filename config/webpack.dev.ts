import {HotModuleReplacementPlugin} from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import {config} from './webpack.common'
import {SETTINGS} from './settings'

export default merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin(SETTINGS.HTML_WEBPACK_PLUGIN),
    new HotModuleReplacementPlugin(),
  ],
})
