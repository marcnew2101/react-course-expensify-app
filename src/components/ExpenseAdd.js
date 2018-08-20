import React from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseAdd extends React.Component {

    state = {
      openModal: true,
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false,
      error: ''
    };

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
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * (100 * -1),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
      this.props.closeExpenseForm();
    }
  };

  render() {
    return (
        <Modal 
            isOpen={this.props.isModalOpen} 
            contentLabel="Add Expense" 
            onRequestClose={this.props.closeExpenseForm}
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
                placeholder="Add a note (optional)"
                value={this.state.note}
                onChange={this.onNoteChange}
            >
            </textarea>
            <button>Submit</button>
            </form>
        </Modal>
    )
  }
}