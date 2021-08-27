import merge from 'webpack-merge'

// --- config:common
import {config} from './webpack.common'

// --- plugins
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

// --- settings
import {SETTINGS} from './settings'

// --- config:production
export default merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      ...SETTINGS.HTML_WEBPACK_PLUGIN,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-is)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [new TerserPlugin()],
  },
})
