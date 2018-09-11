import React from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseAdd extends React.Component {

    state = {
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
      this.props.closeAddExpenseForm();
    }
  };

  render() {
    return (
        <Modal 
            isOpen={this.props.isAddOpen} 
            contentLabel="Add Expense" 
            onRequestClose={this.props.closeAddExpenseForm}
            ariaHideApp={false}>

            <form className="form" onSubmit={this.onSubmit}>
              {this.state.error && <p className="form__error">{this.state.error}</p>}
              <input
                  type="text"
                  placeholder="Description"
                  autoFocus
                  className="text-input"
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
              />
              <input
                  type="text"
                  placeholder="Amount"
                  className="text-input"
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
                  className="text-area"
                  value={this.state.note}
                  onChange={this.onNoteChange}
              >
              </textarea>
              <div>
                <button className="button">Submit</button>
              </div>
            </form>
        </Modal>
    )
  }
}