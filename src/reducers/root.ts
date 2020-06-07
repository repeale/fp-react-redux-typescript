import {combineReducers} from 'redux'
import * as App from '../App'

export interface RootState {
  app: App.State
}

export const rootReducer = combineReducers<RootState>({
  app: App.reducer,
})
