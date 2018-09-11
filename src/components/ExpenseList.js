import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';
import ExpenseAdd from './ExpenseAdd.js';
import AllowanceForm from './AllowanceForm.js';
import ExpenseListFilters from './ExpenseListFilters.js';
import { startAddExpense } from '../actions/expenses.js';

class ExpenseList extends React.Component {

    state = {
        expenseAdd: undefined,
        allowanceAdd: undefined
    }
    
    viewAddExpenseForm = () => {
        this.setState(() => {
            return {
                expenseAdd: true
            }
        })
      }

      closeAddExpenseForm = () => {
        this.setState(() => {
            return {
                expenseAdd: undefined
            }
        })
      }
    
      viewAllowanceForm = () => {
          this.setState(() => {
              return {
                allowanceAdd: true
              }
          })
      }

      closeAllowanceForm = () => {
        this.setState(() => {
            return {
                allowanceAdd: undefined
            }
        })
      }
    
    render() {
        return (
            <div className="content-container">
                {this.props.admin ? (
                    <button className="button"
                    onClick={this.viewAddExpenseForm}>Add Expense</button>
                ) : (null)}
                <span>  </span>
                {this.props.admin ? (
                    <button className="button"
                    onClick={this.viewAllowanceForm}>Add Allowance</button>
                ) : (null)}
                {this.props.admin ? (
                    <div>
                        <ExpenseAdd 
                            closeAddExpenseForm={this.closeAddExpenseForm}
                            isAddOpen={this.state.expenseAdd}
                            onSubmit={(expense) => {
                            this.props.dispatch(startAddExpense(expense))
                        }}/>
                    </div>
                ) : (null)}
                {this.props.admin ? (
                    <div>
                        <AllowanceForm 
                            closeAllowanceForm={this.closeAllowanceForm}
                            isAllowanceOpen={this.state.allowanceAdd}
                            onSubmit={(expense) => {
                            this.props.dispatch(startAddExpense(expense))
                        }}/>
                    </div>
                ) : (null)}
                <ExpenseListFilters />
                <div className="list-header">
                    <div className="show-for-mobile">Expenses</div>
                    <div className="show-for-desktop">Expense</div>
                    <div className="show-for-desktop">Amount</div>
                </div>
                <div className="list-body">
                    {this.props.expenses.length === 0 ? (
                        <div className="list-item--message">
                            <span>No Expenses</span>
                        </div>
                    ) : (
                        this.props.expenses.map((expense) => 
                        <ExpenseListItem 
                            key={expense.id}{...expense}/>)
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        admin: state.admin,
        auth: state.auth
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;