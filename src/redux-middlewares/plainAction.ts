import {Action, Middleware} from 'redux'

export const plainAction: Middleware = () => (next) => (action) => {
  if (typeof action === 'object') {
    return next(Object.assign({}, action) as Action)
  }

  return next(action)
}
