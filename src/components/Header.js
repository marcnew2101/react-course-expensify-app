import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth.js';
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
  <header>
    <h1>Allowance</h1>
    <ol>
      <li><NavLink to="/dashboard" activeClassName="is-active">Home</NavLink></li>
      <li><NavLink to="/User1" activeClassName="is-active">User1</NavLink></li>
      <li><NavLink to="/User2" activeClassName="is-active">User2</NavLink></li>
      <button onClick={startLogout}>Logout</button>
    </ol>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
