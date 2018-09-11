import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';
import authReducer from '../reducers/auth.js';
import adminReducer from '../reducers/admin.js';
import usersReducer from '../reducers/users.js';
import userReducer from '../reducers/user.js';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer,
            admin: adminReducer,
            users: usersReducer,
            user: userReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};