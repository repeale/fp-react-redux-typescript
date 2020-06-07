import * as React from 'react'
import {connect} from 'react-redux'
import {Dispatch, Reducer} from 'redux'
import {RootState} from '../reducers/root'

// --- View

interface Props {
  counter: number
  onIncrement: () => any
  onDecrement: () => any
}

const App = ({counter, onIncrement, onDecrement}: Props) => (
  <div>
    <div>Counter: {counter}</div>
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  </div>
)

const mapStateToProps = (RootState: RootState) => ({
  counter: RootState.app.counter,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onDecrement: () => dispatch(Decrement.of()),
  onIncrement: () => dispatch(Increment.of()),
})

export const component = connect(mapStateToProps, mapDispatchToProps)(App)

// --- Reducer

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
    case 'INCREMENT':
      return {counter: state.counter + 1}
    case 'DECREMENT':
      return {counter: state.counter - 1}
    default:
      return state
  }
}

// --- Actions

type Action = Decrement | Increment

class Decrement {
  public readonly type = 'DECREMENT'
  public static of() {
    return new Decrement()
  }
  constructor() {}
}

class Increment {
  public readonly type = 'INCREMENT'
  public static of() {
    return new Increment()
  }
  constructor() {}
}
