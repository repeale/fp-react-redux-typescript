import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import * as App from './App'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App.component />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
