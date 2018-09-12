import React from 'react';
import { startGoogleLogin } from '../actions/auth.js';
import { connect } from 'react-redux';

export const LoginPage = ({ startGoogleLogin, startEmailLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h2 className="box-layout__title">Allowance App</h2>
            <button className="button" onClick={startGoogleLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);