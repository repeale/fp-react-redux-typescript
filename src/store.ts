import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

import {rootReducer} from './reducers/root'
import {plainAction} from './redux-middlewares/plainAction'

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware, plainAction]))
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/root', () =>
      store.replaceReducer(rootReducer)
    )
  }

  return store
}
