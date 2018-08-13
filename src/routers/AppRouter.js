import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import ExpensePageOne from '../components/ExpensePageOne.js';
import ExpensePageTwo from '../components/ExpensePageTwo.js';
import ExpenseNotFoundPage from '../components/ExpenseNotFoundPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/Nick" component={ExpensePageOne}/>
        <Route path="/Nathan" component={ExpensePageTwo}/>
        <Route component={ExpenseNotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
