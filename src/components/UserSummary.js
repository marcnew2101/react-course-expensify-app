import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseSummary from './ExpenseSummary.js';
import { connect } from 'react-redux';
import { startSetExpense } from '../actions/expenses.js';
import { startSetSelectedUser } from '../actions/user.js';

class UserSummary extends React.Component {

    render() {
        return (
            <div>
                <select className="select" onChange={ (e) => 
                        this.props.onChange(e.target.value)
                        }>
                    {this.props.users.map((userData, index) => 
                        <option 
                            key={index}
                            value={userData.id}
                            label={userData.userInfo.userName}
                        ></option>
                    )}
                </select>
                <ExpenseSummary />
                <ExpenseList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (uid) => {
            dispatch(startSetExpense(uid)).then(() => 
            dispatch(startSetSelectedUser(uid)))
        }
    }
}

const ConnectedUserSummary = connect(mapStateToProps, mapDispatchToProps)(UserSummary);

export default ConnectedUserSummary;