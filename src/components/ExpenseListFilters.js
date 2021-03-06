import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { sortByText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters.js';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused: calendarFocused
            }
        })
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            placeholder="Search Expenses"
                            type="text" 
                            value={this.props.filters.text} onChange={(e) => {
                                this.props.dispatch(sortByText(e.target.value));
                            }}/>
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy} onChange={(e) => {
                                if (e.target.value === "date") {
                                    this.props.dispatch(sortByDate(e.target.value))
                                } else if (e.target.value === "amount") {
                                    this.props.dispatch(sortByAmount(e.target.value))
                                }}}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;
