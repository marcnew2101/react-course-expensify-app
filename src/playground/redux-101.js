import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy,
    alert: `number increased by ${incrementBy}!`
  }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy: decrementBy,
    alert: `number decreased by ${decrementBy}!`
  }
}

const setCount = ({ newCount }) => {
  return {
    type: 'SET',
    newCount: newCount,
    alert: `number set to ${newCount}!`
  }
}

const resetCount = () => {
  return {
    type: 'RESET',
  }
}

const countReducer = (state = { count: 0, message: '' }, action) => {

  if (action.type === 'INCREMENT') {
    return {
      count:  state.count + action.incrementBy,
      message: action.alert
    }
  } else if (action.type === 'DECREMENT') {
    return {
      count: state.count - action.decrementBy,
      message: action.alert
    }
  } else if (action.type === 'SET') {
    return {
      count: action.newCount,
      message: action.alert
    }
  } else if (action.type === 'RESET') {
    return {
      count: 0,
      message: 'reset to 0'
    }
  } else {
    return state;
  }
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setCount({ newCount: 10 }));

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(decrementCount({ decrementBy: 7 }));

store.dispatch(incrementCount({ incrementBy: 9 }));

store.dispatch(decrementCount({ decrementBy: 1 }));

store.dispatch(resetCount());
