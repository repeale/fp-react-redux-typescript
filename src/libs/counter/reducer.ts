import {Reducer} from 'redux'

import {Action} from './actions'

export interface State {
  count: number
}

const defaultState: State = {
  count: 0,
}

export const reducer: Reducer<State, Action> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case '@counter/INCREMENT':
      return {count: state.count + 1}
    case '@counter/DECREMENT':
      return {count: state.count - 1}
    default:
      return state
  }
}
