import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';
import ExpenseAdd from './ExpenseAdd.js';
import AllowanceForm from './AllowanceForm.js';
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
            <div>
                <h2>Expense List</h2>
                <button 
                    onClick={this.viewAddExpenseForm}>Add Expense</button>
                <ExpenseAdd 
                    closeAddExpenseForm={this.closeAddExpenseForm}
                    isAddOpen={this.state.expenseAdd}
                    onSubmit={(expense) => {
                        this.props.dispatch(startAddExpense(expense))
                    }}/>
                <button 
                    onClick={this.viewAllowanceForm}>Add Allowance</button>
                <AllowanceForm 
                    closeAllowanceForm={this.closeAllowanceForm}
                    isAllowanceOpen={this.state.allowanceAdd}
                    onSubmit={(expense) => {
                        this.props.dispatch(startAddExpense(expense))
                        console.log(expense)
                }}/>
                <ol>{this.props.expenses.map((expense) => 
                    <ExpenseListItem 
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