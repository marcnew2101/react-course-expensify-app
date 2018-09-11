import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    if (action.type === 'SORT_BY_TEXT') {
        return {
          ...state,
          text: action.text
        }
    } else if (action.type === 'SORT_BY_DATE') {
        return {
            ...state,
            sortBy: action.sortBy
        }
    } else if (action.type === 'SORT_BY_AMOUNT') {
        return {
            ...state,
            sortBy: action.sortBy
        }
    } else if (action.type === 'START_DATE') {
        return {
            ...state,
            startDate: action.startDate
        }
    } else if (action.type === 'END_DATE') {
        return {
            ...state,
            endDate: action.endDate
        }
    } else {
        return state;
    }
}

export default filtersReducer;