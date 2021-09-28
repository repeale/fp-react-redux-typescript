import 'core-js/stable'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {App} from './components/app'
import {configureStore} from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
