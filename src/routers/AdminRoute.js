import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header.js';

export const AdminRoute = ({ isAdmin, component: Component, ...otherStuff }) => {
    return (
        <Route {...otherStuff} component={(props) => (
            isAdmin ? (<div><Header /><Component {...props} /></div>
            ) : (<Redirect to="/" />)
        )}/>
    )
};

const mapStateToProps = (state) => {
    return {
        isAdmin: !!state.admin
    }
}

export default connect(mapStateToProps)(AdminRoute);