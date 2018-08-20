import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import ExpenseNotFoundPage from '../components/ExpenseNotFoundPage.js';
import LoginPage from '../components/LoginPage.js';
import createHistory from 'history/createBrowserHistory.js';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <Route component={ExpenseNotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
