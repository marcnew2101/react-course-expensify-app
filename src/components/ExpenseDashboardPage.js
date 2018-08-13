import React from 'react';
import ExpenseList from './ExpenseList.js';
import AllowanceList from './AllowanceList.js';
import ExpenseListFilters from './ExpenseListFilters.js';

const ExpenseDashboardPage = () => (
  <div>
    <AllowanceList />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
