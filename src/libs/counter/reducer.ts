import {Reducer} from 'redux'
import {Action} from './actions'

export interface State {
  counter: number
}

const defaultState: State = {
  counter: 0,
}

export const reducer: Reducer<State, Action> = (
  state = defaultState,
  action
): State => {
  switch (action.type) {
    case '@appCounter/INCREMENT':
      return {counter: state.counter + 1}
    case '@appCounter/DECREMENT':
      return {counter: state.counter - 1}
    default:
      return state
  }
}
