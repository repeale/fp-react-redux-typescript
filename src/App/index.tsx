import * as React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {Dispatch, Reducer} from 'redux'
import {RootState} from '../reducers/root'

// --- View

type Props = ReduxProps

const AppComponent = ({counter, onIncrement, onDecrement}: Props) => {
  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = (RootState: RootState) => ({
  counter: RootState.app.counter,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onDecrement: () => dispatch(Decrement.of()),
  onIncrement: () => dispatch(Increment.of()),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>

export const App = connector(AppComponent)

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
}

class Increment {
  public readonly type = 'INCREMENT'
  public static of() {
    return new Increment()
  }
}
