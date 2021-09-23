import {combineReducers} from 'redux'

import {reducer} from './libs/counter/reducer'

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  appCounter: reducer,
})
