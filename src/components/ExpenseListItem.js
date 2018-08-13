import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import numeral from 'numeral';
import { editExpense } from '../actions/expenses.js';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses.js';

class ExpenseListItem extends React.Component {

    state = {
        openModal: undefined,
        description: this.props.description,
        note: this.props.note,
        amount: (this.props.amount / 100).toString(),
        createdAt: moment(this.props.createdAt),
        calendarFocused: false,
        error: ''
    }      
    
    viewModal = () => {
        this.setState(() => {
            return {
                openModal: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                openModal: undefined
            }
        })
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    
    onAmountChange = (e) => {
        const amount = e.target.value;
    
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.closeModal();
            this.props.dispatch(editExpense(
                this.props.id, {
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()}
            ))
        }
    };
    
    render() {
        return (
            <div>
                <li>
                    {numeral(this.props.amount / 100).format('$0,0.00')} - 
                    {this.props.description} - 
                    {moment(this.props.createdAt).format('MMMM Do, YYYY')} - 
                    {this.props.note}
                </li>
                <button onClick={this.viewModal}>Edit</button>
                <Modal
                    isOpen={this.state.openModal} 
                    contentLabel="Edit Expense" 
                    onRequestClose={this.closeModal}
                    ariaHideApp={false}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        <input
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                        <textarea
                            placeholder="Add a note for your expense (optional)"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        >
                        </textarea>
                        <button>Update</button>
                    </form>
                    <button onClick={() => {
                        this.props.dispatch(removeExpense({ id: this.props.id }));
                        this.closeModal();
                    }}>Delete</button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

const ConnectedExpenseListItem = connect(mapStateToProps)(ExpenseListItem);

export default ConnectedExpenseListItem;