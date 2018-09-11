import React from 'react';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth.js';
import { connect } from 'react-redux';

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h2 className="box-layout__title">Allowance App</h2>
            <button className="button" onClick={startGoogleLogin}>Login with Google</button>
            <span>  </span>
            <button className="button" onClick={startFacebookLogin}>Login with Facebook</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);