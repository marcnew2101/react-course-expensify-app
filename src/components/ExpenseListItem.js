import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import ExpenseEdit from './ExpenseEdit.js';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses.js';
import { startEditExpense } from '../actions/expenses.js';

export class ExpenseListItem extends React.Component {

    state = {
        expenseEdit: undefined
    }
    
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.id, expense)
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.id })
    }

    viewEditExpenseForm = () => {
        this.setState(() => {
            return {
                expenseEdit: true
            }
        })
      }

      closeEditExpenseForm = () => {
        this.setState(() => {
            return {
                expenseEdit: undefined
            }
        })
      }
    
    render() {
        return (
            <div>
                <li>
                    {numeral(this.props.amount / 100).format('$0,0.00')} - 
                    {this.props.description} - 
                    {moment(this.props.createdAt).format('MMMM Do, YYYY')} - 
                    {this.props.note}
                </li>

                <button onClick={this.viewEditExpenseForm}>Edit</button>

                <ExpenseEdit 
                    isEditOpen={this.state.expenseEdit}
                    viewEditExpenseForm={this.viewEditExpenseForm}
                    closeEditExpenseForm={this.closeEditExpenseForm}
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}/>

                <button onClick={this.onRemove}>Delete</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.id)
  });

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListItem);