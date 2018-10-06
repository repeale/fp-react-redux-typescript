import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, classDispatcher))
  )
}

const classDispatcher = ({dispatch, getState}) => next => action => {
  if (typeof action === 'object') {
    return next(Object.assign({}, action))
  }
}