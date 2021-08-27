import {HotModuleReplacementPlugin} from 'webpack'
import merge from 'webpack-merge'

// --- config:common
import {config} from './webpack.common'

// --- plugins
import HtmlWebpackPlugin from 'html-webpack-plugin'

// --- settings
import {SETTINGS} from './settings'

// --- config:development
export default merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(SETTINGS.HTML_WEBPACK_PLUGIN),
    new HotModuleReplacementPlugin(),
  ],
})
