import {combineReducers} from 'redux'
import {reducer, State} from '../App'

export interface RootState {
  app: State
}

export const rootReducer = combineReducers<RootState>({
  app: reducer,
})
