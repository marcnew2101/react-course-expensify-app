import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Allowance</h1>
    <ol>
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to="/Nick" activeClassName="is-active">Nick</NavLink></li>
      <li><NavLink to="/Nathan" activeClassName="is-active">Nathan</NavLink></li>
    </ol>
  </header>
);

export default Header;
