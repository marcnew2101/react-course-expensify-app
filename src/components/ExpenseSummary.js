import getTotalExpenses from '../selectors/expenses-total';
import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';

const ExpenseTotal = (props) => (
    <div>
        <h3>Balance: {numeral(props.expenses / 100).format('$0,0.00')}</h3>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getTotalExpenses(state.expenses),
        filters: state.filters
    }
}

const ConnectedExpenseTotal = connect(mapStateToProps)(ExpenseTotal);

export default ConnectedExpenseTotal;