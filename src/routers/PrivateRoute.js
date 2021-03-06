import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header.js';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...otherStuff }) => {
    return (
        <Route {...otherStuff} component={(props) => (
            isAuthenticated ? (<div><Header /><Component {...props} /></div>
            ) : (<Redirect to="/" />)
        )}/>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);