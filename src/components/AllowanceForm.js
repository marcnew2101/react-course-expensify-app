import React from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class AllowanceForm extends React.Component {
  state = {
    description: 'Allowance',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
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

    if (!this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
      this.props.closeAllowanceForm();
    }
  };

  render() {
    return (
        <Modal 
            isOpen={this.props.isAllowanceOpen} 
            contentLabel="Add Allowance" 
            onRequestClose={this.props.closeAllowanceForm}
            ariaHideApp={false}>

            {this.state.error && <p>{this.state.error}</p>}

            <form onSubmit={this.onSubmit}>

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
            <button>Submit</button>
            </form>
        </Modal>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

const ConnectedAllowanceForm = connect(mapStateToProps)(AllowanceForm);

export default ConnectedAllowanceForm;