import React from 'react';
import { startLogout } from '../actions/auth.js';
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
  <header>
    <h1>Allowance App</h1>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch, state) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
