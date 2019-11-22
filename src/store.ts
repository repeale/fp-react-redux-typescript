import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './reducers/root'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import {plainAction} from './redux-middlewares/plainAction'

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, plainAction))
  )
}
