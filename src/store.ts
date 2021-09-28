import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'

import {plainAction} from './redux-middlewares/plainAction'
import {rootReducer} from './rootReducer'

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware, plainAction]))
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}

const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
