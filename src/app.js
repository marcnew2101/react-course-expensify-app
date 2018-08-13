import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'FortNite',
    note: 'Battle Pass for Switch',
    amount: 1000,
    createdAt: 20000
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    note: 'utilities',
    amount: 6300,
    createdAt: 21000
}));

store.dispatch(addExpense({
    description: 'Water Bill',
    note: 'utilities',
    amount: 4500,
    createdAt: 15000
}));

const state = store.getState();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
