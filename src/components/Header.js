import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth.js';
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
  <header>
    <h1>Allowance</h1>
    <ol>
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to="/Nick" activeClassName="is-active">User1</NavLink></li>
      <li><NavLink to="/Nathan" activeClassName="is-active">User2</NavLink></li>
      <button onClick={startLogout}>Logout</button>
    </ol>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
