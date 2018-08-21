import getTotalExpenses from '../selectors/expenses-total';
import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';

const ExpenseTotal = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h3 className="page-header__title">Balance:  
                <span><span>  </span>{numeral(props.expenses / 100).format('$0,0.00')}</span>
            </h3>
        </div>
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