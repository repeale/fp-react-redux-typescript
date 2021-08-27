import path from 'path'

const root = path.resolve(__dirname, '..')

export const SETTINGS = {
  BASE_DIR: root,
  DIST_DIR: path.resolve(root, 'dist'),
  SRC_DIR: path.resolve(root, 'src'),
  HTML_WEBPACK_PLUGIN: {
    template: path.resolve(root, 'src/index.html'),
    inject: true,
  },
}
