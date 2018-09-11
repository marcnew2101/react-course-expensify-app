import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import { startGetUser } from './actions/users.js';
import { startSetExpense } from './actions/expenses.js';
import { login, logout } from './actions/auth.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase.js';
import { getRole } from './actions/admin.js';
import LoadingPage from './components/LoadingPage.js';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// store.subscribe(() => {
//     const state = store.getState()
//     console.log('state', state)
// })

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    
    if (user) {
        store.dispatch(login(user.uid, user.displayName));
        store.dispatch(getRole());
        store.dispatch(startGetUser());
        store.dispatch(startSetExpense(user.uid)).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
  
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/')
    }
});