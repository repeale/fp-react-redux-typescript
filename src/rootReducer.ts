import {combineReducers} from 'redux'

import {reducer as counter} from './libs/counter/reducer'

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  counter,
})
