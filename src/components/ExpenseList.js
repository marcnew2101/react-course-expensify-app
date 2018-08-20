import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';
import ExpenseAdd from './ExpenseAdd.js';
import AllowanceForm from './AllowanceForm.js';
import { startAddExpense } from '../actions/expenses.js';

class ExpenseList extends React.Component {

    state = {
        expenseComponent: undefined,
        allowanceComponent: undefined
    }
    
    viewExpenseForm = () => {
        this.setState(() => {
            return {
                expenseComponent: true
            }
        })
      }

      closeExpenseForm = () => {
        this.setState(() => {
            return {
                expenseComponent: undefined
            }
        })
      }
    
      viewAllowanceForm = () => {
          this.setState(() => {
              return {
                allowanceComponent: true
              }
          })
      }

      closeAllowanceForm = () => {
        this.setState(() => {
            return {
                allowanceComponent: undefined
            }
        })
      }
    
    render() {
        return (
            <div>
                <h1>Expense List</h1>
                <button onClick={this.viewExpenseForm}>Add Expense</button>
                {this.state.expenseComponent ? <ExpenseAdd 
                    closeExpenseForm={this.closeExpenseForm}
                    isModalOpen={this.state.expenseComponent}
                    onSubmit={(expense) => {
                        this.props.dispatch(startAddExpense(expense))
                    }}/> : null}
                <button onClick={this.viewAllowanceForm}>Add Allowance</button>
                {this.state.allowanceComponent ? <AllowanceForm 
                    closeAllowanceForm={this.closeAllowanceForm}
                    isModalOpen={this.state.allowanceComponent}
                    onSubmit={(expense) => {
                    this.props.dispatch(startAddExpense(expense))
                }}/> : null}
                <ol>{this.props.expenses.map((expense) => 
                    <ExpenseListItem 
                        isModalOpen={this.state.expenseComponent} 
                        viewExpenseForm={this.viewExpenseForm}
                        key={expense.id}{...expense}/>)}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;