import {ConnectedProps, connect} from 'react-redux'
import {Dispatch} from 'redux'

import {Action, Decrement, Increment} from '../../libs/counter/actions'
import {RootState} from '../../store'

type Props = ReduxProps

const AppComponent = ({count, onIncrement, onDecrement}: Props) => {
  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onDecrement: () => dispatch(Decrement.of()),
  onIncrement: () => dispatch(Increment.of()),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>

export const App = connector(AppComponent)
