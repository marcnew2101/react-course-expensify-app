import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';
import ExpenseForm from './ExpenseForm.js';
import { showModal } from '../actions/filters.js';
import { addExpense } from '../actions/expenses.js';

const ExpenseList = (props) => {

    return (
        <div>
            <ExpenseForm onSubmit={(expense) => {
                console.log(expense)
                props.dispatch(addExpense(expense))
            }}/>
            <h1>Expense List</h1>
            <button onClick={() => {
                props.dispatch(showModal());
            }}>Add Expense</button>
            <ol>{props.expenses.map((options) => 
                <ExpenseListItem key={options.id}{...options}/>)}
            </ol>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;