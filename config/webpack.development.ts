import HtmlWebpackPlugin from 'html-webpack-plugin'
import {HotModuleReplacementPlugin} from 'webpack'
import merge from 'webpack-merge'

import {SETTINGS} from './settings'
import {config} from './webpack.common'

export default merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin(SETTINGS.HTML_WEBPACK_PLUGIN),
    new HotModuleReplacementPlugin(),
  ],
})
