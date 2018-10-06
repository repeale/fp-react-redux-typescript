import * as React from 'react'
import {connect} from 'react-redux'

// --- View

const App = ({counter = 1, onIncrement, onDecrement}) => (
  <div>
    <div>Counter: {counter}</div>
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  </div>
)

const mapStateToProps = ({UserReducer}) => ({
  counter: UserReducer.counter
})

const mapDispatchToProps = dispatch => ({
  onDecrement: () => dispatch(DecrementEnthusiasm.of()),
  onIncrement: () => dispatch(IncrementEnthusiasm.of())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// --- Reducer

interface State {
  counter: number
}

export const reducer = (state = {counter: 1}, action: Action): State => {
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

type Action = DecrementEnthusiasm | IncrementEnthusiasm

class DecrementEnthusiasm {
  public readonly type = 'DECREMENT'
  public static of() {
    return Object.assign({}, new DecrementEnthusiasm())
  }
  constructor() {}
}

class IncrementEnthusiasm {
  public readonly type = 'INCREMENT'
  public static of() {
    return Object.assign({}, new IncrementEnthusiasm())
  }
  constructor() {}
}
