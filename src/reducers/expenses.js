const expensesReducerDefaultState = [];  //default state

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    if (action.type === 'ADD_EXPENSE') {
        return [
            ...state,
            action.expense
        ]
    } else if (action.type === 'REMOVE_EXPENSE') {
        return state.filter(({ id }) => id !== action.id);

    } else if (action.type === 'EDIT_EXPENSE') {
        return state.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              ...action.updates
            }
          } else {
            return item;
          }
        })
    } else {
        return state;
    }
}

export default expensesReducer;